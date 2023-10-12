<script>
	import { onMount } from 'svelte';
	import { cursor_size } from '../../stores/global.js';
	import { slide } from 'svelte/transition';
	let size = $cursor_size;
	let value = '';
	export let extraHeight = 0;

	let colors = [
		'#E5009C',
		'#FF6346',
		'#FFD788',
		'#05C99C',
		'#2CC570',
		'#2FBA9B',
		'#25FCDE',
		'#00AEFF',
		'#2B81D7',
		'#5968FF',
		'#8731E8',
		'#A192F7',
		'#CE47FE',
		'#ED05BF',
		'#F3BF03',
		'#F89E20',
		'#FDEB4D',
		'#00A8B3',
		'#51AFAC',
		'#92D1CF'
	];

	/**
	 * @type {Array}
	 */
	let quizzes = [
		{
			author: null,
			description: null,
			title: null
		},
		{
			author: null,
			description: null,
			title: null
		},
		{
			author: null,
			description: null,
			title: null
		},
		{
			author: null,
			description: null,
			title: null
		}
	];
	console.log(quizzes);
	const delay = (/** @type {number} */ ms) => new Promise((resolve) => setTimeout(resolve, ms));

	/**
	 * @param {any} value
	 */
	async function search(value) {
		let searchTerm = { searchTerm: value };
        quizzes = [
		{
			author: null,
			description: null,
			title: null
		},
		{
			author: null,
			description: null,
			title: null
		},
		{
			author: null,
			description: null,
			title: null
		},
		{
			author: null,
			description: null,
			title: null
		}
	];
		await delay(2000);
		return fetch('http://127.0.0.1:5000/Search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(searchTerm)
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw response;
				}
			})
			.then((respData) => {
				console.log(respData['quizzes']); // <-- log JSON response here
				quizzes = respData['quizzes']; // return JSON response for access in your promise chain
			});
	}
	onMount(() => search(''));
</script>

<section class="search" style={`height:${100+extraHeight}vh;`}>
	<div class="search-background-pattern">
		<div class="search-background-pattern-fade">
			<div style={`height:${extraHeight}vh;`}/>
			<div class='search-title'>Find a Quiz</div>
			<div
				class="search-bar-container"
				role="search"
				on:mouseenter={() => size.set(5)}
				on:mouseleave={() => size.set(15)}
			>
				<div class="search-bar-underline">
					<form on:submit={() => search(value)} class="search-bar" on:submit|preventDefault>
						<input
							class="search-bar-input"
							bind:value
							type="text"
							name="query"
							placeholder="Search..."
							autocomplete="one-time-code"
						/>
						<button type="submit" class="search-bar-submit-button"
							><div class="search-bar-submit">&#9906;</div></button
						>
					</form>
				</div>
			</div>
			<div class="search-results">
				<div class="search-results-flex-container">
					{#if quizzes.length > 0}
						{#each quizzes as quiz}
							<div
								class="search-quiz-mini"
								style={`background: linear-gradient( to bottom right, ${
									colors[Math.floor(Math.random() * colors.length)]
								}, ${colors[Math.floor(Math.random() * colors.length)]});`}
								transition:slide={{ delay: 200, duration: 300, axis: 'x' }}
								role="none"
							>
								<div class="search-quiz-mini-background">
									<div class="search-results-title search-results-loading">
										{#if quiz['title'] === null}
											<div class="search-result-title-loading"><div class="loading-shine" /></div>
										{:else}
											{quiz['title']}
										{/if}
									</div>
									<div class="search-results-author search-results-loading">
										{#if quiz['author'] === null}
											<div class="search-result-author-loading"><div class="loading-shine" /></div>
										{:else}
											{quiz['author']}
										{/if}
									</div>
								</div>
							</div>
						{/each}
					{:else}
						<div
							class="search-results-title"
							transition:slide={{ delay: 200, duration: 300, axis: 'x' }}
						>
							Sorry, We couldn't find any Quizzes with that name
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.search-title {
		width: 100%;
		padding: 40px;
		color: white;
		font-size: 60px;
		font-style: italic;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 550;
	}
	.loading-shine {
		position: relative;
		top: 0;
		height: 100%;
		width: 6vh;
		background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
		animation: shine 2.5s infinite linear;
		transform: translate(-100px, 0px);
	}
	@keyframes shine {
		0% {
			transform: translate(-50px, 0px);
		}
		100% {
			transform: translate(360px, 0px);
		}
	}
	@keyframes search-quiz-mini-hover-in {
		from {
			transform: scale(1);
			box-shadow: 0px 0px 20px 8px rgba(0, 0, 10, 0.08);
		}
		to {
			transform: scale(1.05);
			box-shadow: 0px 0px 5px 8px rgba(0, 0, 10, 0.1);
		}
	}
	@keyframes search-quiz-mini-hover-out {
		to {
			transform: scale(1);
			box-shadow: 0px 0px 20px 8px rgba(0, 0, 10, 0.08);
		}
		from {
			transform: scale(1.05);
			box-shadow: 0px 0px 5px 8px rgba(0, 0, 10, 0.1);
		}
	}
	.search-quiz-mini:hover {
		animation: search-quiz-mini-hover-in 0.3s;
		transform: scale(1.05);
		box-shadow: 0px 0px 5px 8px rgba(0, 0, 10, 0.1);
	}
	.search-result-author-loading {
		background: rgba(255, 255, 255, 0.5);
		width: 60%;
		height: 30px;
		border-radius: 10px;
		overflow: hidden;
	}
	.search-result-title-loading {
		background: rgba(255, 255, 255, 0.5);
		width: 80%;
		height: 40px;
		border-radius: 10px;
		overflow: hidden;
	}
	.search-results-author {
		width: 100%;
		padding-left: 20px;
		font-family: var(--font-sans);
		color: white;
		font-weight: 800;
		font-size: 20px;
	}

	.search-results-title {
		width: 100%;
		padding: 20px;
		font-family: var(--font-sans);
		color: white;
		font-weight: 800;
		font-size: 40px;
	}
	.search-quiz-mini-background {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 500 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c161 C 57.6%2c144.4 172.8%2c81.6 288%2c78 C 403.2%2c74.4 460.8%2c153.2 576%2c143 C 691.2%2c132.8 748.8%2c20.6 864%2c27 C 979.2%2c33.4 1036.8%2c155.4 1152%2c175 C 1267.2%2c194.6 1382.4%2c135 1440%2c125L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 0.3)'%3e%3c/path%3e%3cpath d='M 0%2c537 C 96%2c493.6 288%2c319.8 480%2c320 C 672%2c320.2 768%2c540.2 960%2c538 C 1152%2c535.8 1344%2c354.8 1440%2c309L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 0.4)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
		width: 100%;
		height: 100%;
		box-shadow: inset 0px 40px 60px 10px rgba(0, 0, 100, 0.33);
	}
	.search-results-flex-container {
		width: fit-content;
		height: fit-content;
		display: flex;
		margin: auto;
	}
	.search-results {
		width: 100%;
		overflow-y: hidden;
		overflow-x: scroll;
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
	}
	.search-results::-webkit-scrollbar {
		height: 0px;
	}
	.search-quiz-mini {
		background: rgba(255, 255, 255, 0.5);
		width: 360px;
		height: 50vh;
		display: inline-block;
		margin: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px 8px rgba(0, 0, 10, 0.08);
		overflow: hidden;
		animation: search-quiz-mini-hover-out 0.3s;
	}
	.search-bar-submit {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		font-size: 24px;
		color: white;
		text-align: right;
		padding: 0px;
		margin: 0px;
	}
	.search-bar-submit-button {
		max-width: 5%;
		height: 5%;
		background-color: transparent;
		border: transparent;
		padding: 0px;
		margin: 0px;
		position: relative;
		float: right;
	}
	.search-bar-underline {
		border: transparent;
		border-bottom: white solid 3px;
		border-radius: 5px;
	}
	.search-bar-container {
		padding: 5vw;
		padding-top: 3vw;
	}
	.search-bar-input:focus {
		outline: none;
	}
	.search-bar-input::placeholder {
		color: rgba(255, 255, 255, 0.8);
		opacity: 1; /* Firefox */
	}

	.search-bar-input::-ms-input-placeholder {
		/* Edge 12 -18 */
		color: white;
	}
	.search-bar-input {
		width: 92%;
		z-index: 1000;
		background: transparent;
		color: white;
		border: transparent;
		font-size: 24px;
		font-family: var(--font-serif);
		cursor: none;
	}
	.search-bar {
		width: 100%;
		z-index: 1000;
	}
	.search-background-pattern-fade {
		width: 100%;
		height: inherit;
		background: linear-gradient(
			to bottom right,
			rgba(181, 53, 213, 0.5),
			rgba(129, 45, 194, 1),
			rgba(100, 36, 182, 0.5)
		);
	}
	.search-background-pattern {
		width: 100%;
		height: inherit;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
	}
	.search {
		width: 100%;
		/** From https://bgjar.com/simple-shiny */
		background: linear-gradient(to bottom right, #b535d5, #812dc2, #6424b6);
	}
</style>
