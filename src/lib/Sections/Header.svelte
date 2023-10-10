<script>
	/**
	 * @type {any}
	 */
	export let user = null;
	import { getContext } from 'svelte';
	import { cursor_size } from '../../stores/global.js';
	let size = $cursor_size;
	
    let logo_text = 'Q'
    if (typeof window !== 'undefined') {
        logo_text = window.innerWidth <780 ? 'Q' : 'Quiz Quest';
    }
	//list of 20 bright and happy colors that work well together in a gradient
</script>

<div class="header">
	<div class="logo-container">
		<a href="./"><div class="logo" role="none" on:mouseenter={() => size.set(5)} on:mouseleave={() => size.set(15)}>{logo_text}</div></a>
	</div>
	<div class="pages-container">
		<ul>
			<a href="./blog"><li class="page-item hover-underline-animation" on:mouseenter={() => size.set(3)} on:mouseleave={() => size.set(15)}>Blog</li></a>
			<a href="./take-a-quiz"><li class="page-item hover-underline-animation" on:mouseenter={() => size.set(3)} on:mouseleave={() => size.set(15)}>Take a Quiz</li></a>
			<a href="./make-quiz"><li class="page-item hover-underline-animation" on:mouseenter={() => size.set(3)} on:mouseleave={() => size.set(15)}>Make a Quiz</li></a>
			{#if user == null}
				<a href="./login"><li class="login page-item" on:mouseenter={() => size.set(5)} on:mouseleave={() => size.set(15)}>Sign In</li></a>
			{:else}
				<a href="./login"><div class="login">Login</div></a>
			{/if}
		</ul>
	</div>
</div>

<style>
	.pages-container {
		width: fit-content;
		float: right;
		margin: auto;
		margin-top: 30px;
		margin-right: 20px;
	}
	.page-item {
		display: inline-block;
        margin-right: 0vw;
        padding: 0px;
	}
	.login {
		color: white;
		font-size: 18px;
		letter-spacing: 0.1vw;
		width: fit-content;
		float: right;
		background-image: linear-gradient(to left top, #cc3363, #bd5ca6, #9583d0, #70a1db, #73b7d3);
		padding: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		font-weight: 400;
		border-radius: 6px;
		font-family: var(--font-sans);
		border: 1.5px solid var(--pure-background-color);
		transform: translate(0, -5px);
	}
	.login:hover {
		background-image: linear-gradient(
			to left top,
			#cc3867,
			#d1327c,
			#d13293,
			#cb38ad,
			#be44c8,
			#a55bdd,
			#866eee,
			#5e7efa,
			#2e91f7,
			#1d9feb,
			#42a9dc,
			#6ab1cc
		);
		cursor: none;
	}
	.header {
		position: absolute;
		background-color: rgba(0, 0, 0, 0);
		height: fit-content;
		width: fit-content;
		top: 0;
		z-index: 1000;
		width: 100%;
	}
	.logo {
		margin: 20px;
		font-size: 40px;
		letter-spacing: 0px;
		font-weight: 250;
		color: #fff;
		float: left;
		border: 2.5px solid white;
		padding: 5px;
	}
	.logo:hover {
		cursor: none;
		background: linear-gradient(
			to right,
			transparent 20%,
			rgb(223, 69, 128),
			#f3715c,
			#fbb040,
			#10ac8f,
			#3d99d4,
            rgb(166, 43, 175),
			#e51359
		);
		background-size: 200%;
		background-position: right;
		transition: 0.4s ease;
		z-index: 1000;
	}
	.hover-underline-animation {
		display: inline-block;
		position: relative;
		cursor: none;
		z-index: 1000;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
		cursor: none;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
		cursor: none;
		z-index: 1000;
	}
    @media screen and (max-width: 568px) {
        .page-item {
            font-size: 2.9vw;
        }
        .logo {
            font-size: 6.5vw;   
        }
    }
</style>
