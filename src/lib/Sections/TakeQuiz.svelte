<script>
	import { cursor_size, curr_quiz, cursor_color } from '../../stores/global.js';
	import { blur } from 'svelte/transition';
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
	const delay = (/** @type {number} */ ms) => new Promise((resolve) => setTimeout(resolve, ms));
	/**
	 * @type {{ [x: string]: any; } | null}
	 */
	let quizData = null;
	let submitted = false;
	async function getQuizData(value) {
		let searchTerm = { quizID: value };
		return fetch('http://127.0.0.1:5000/GetQuiz', {
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
				console.log(respData); // <-- log JSON response here
				quizData = respData; // return JSON response for access in your promise chain
			});
	}

	getQuizData($curr_quiz);

	/**
	 * @param {any} question
	 * @param {any} answer
	 */
	function selectItem(question, answer) {
		if (quizData === null) {
			return;
		}
		console.log('question: ' + question + '. answerID: ' + answer);
		for (let i = 0; i < quizData['results'].length; i++) {
			if (quizData['results'][i]['score'] === null) {
				quizData['results'][i]['score'] -= question['selected']['results'][i]['value'];
				question['selected'] = answer;
				quizData['results'][i]['score'] += question['selected']['results'][i]['value'];
				console.log('score is now: ' + quizData['results'][i]['score']);
			} else {
				console.log('no score!');
				question['selected'] = answer;
				quizData['results'][i]['score'] = question['selected']['results'][i]['value'];
				console.log('score is now: ' + quizData['results'][i]['score']);
			}
		}
	}
	//onMount(() => getQuizData($curr_quiz));
</script>

<section class="take-quiz">
	<div
		class="take-quiz-gradient-background"
		style={`background: linear-gradient( to bottom right, ${
			colors[Math.floor(Math.random() * colors.length)]
		}, ${colors[Math.floor(Math.random() * colors.length)]});`}
	>
		<div class="take-quiz-wave-background">
			{#if quizData == null}
				<div class="lds-facebook">
					<div />
					<div />
					<div />
				</div>
			{:else}
				<div class="quiz-title">{quizData['quiz']['title']}</div>
				<div class="quiz-author">{quizData['quiz']['author']}</div>
			{/if}
		</div>
	</div>
	{#if quizData !== null}
		<div class="quiz-questions">
			{#if !submitted}
				{#each quizData['questions'] as question}
					<div class="quiz-question" transition:blur={{ amount: 30 }}>
						<div class="question-title">{question['question']}</div>
						{#each quizData['questions'] as question}
							<div class="quiz-answers">
								{#each question['answers'] as answer}
									<div
										class="quiz-answer"
										role="none"
										on:click={() => selectItem(question, answer)}
									>
										{answer['answer']}
									</div>
								{/each}
							</div>
						{/each}
					</div>
				{/each}
				<div
					class="submit-quiz"
					role="none"
					style={`background: linear-gradient( to bottom right, ${
						colors[Math.floor(Math.random() * colors.length)]
					}, ${colors[Math.floor(Math.random() * colors.length)]});`}
					on:click={() => (submitted = true)}
				>
					Submit
				</div>
			{:else}
				<div class="results-container" transition:blur={{ amount: 50 }}>
					<div class="results-title">You Got:</div>
					{#each quizData['results'] as result}
						<div class="result">
							<div class="result-title">{result['name']}</div>
							<div class="result-description">{result['description']}</div>
							<div class="result-bar">
								<div
									class="result-percent-bar"
									style={`width:${result['score'] ? result['score'] : 0}%;`}
								/>
							</div>
						</div>
					{/each}
					<div class="save-to-profile-button">Save Results to Profile</div>
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	.save-to-profile-button {
		padding: 20px;
		margin: auto;
		width: fit-content;
		color: rgb(84, 84, 84);
		font-family: var(--font-sans);
		font-weight: 1000;
		border: rgb(84, 84, 84) solid 4px;
		margin-top: 8vh;
	}
	.result-description {
		font-size: 18px;
		text-align: left;
		margin: auto;
		margin-top: 16px;
		width: fit-content;
		max-width: 60%;
		font-weight: 300;
	}
	.results-container {
		margin: auto;
		width: 90%;
		background-color: white;
		padding: 5vw;
	}
	.result-percent-bar {
		background-color: #999;
		padding: 5px;
		border-radius: 5px;
		overflow: hidden;
	}
	.result-bar {
		background-color: #ddd;
		margin: auto;
		margin-top: 20px;
		border-radius: 5px;
		overflow: hidden;
		width: 80%;
	}
	.results-title {
		text-align: center;
		padding: 20px;
		font-family: var(--font-sans);
		color: black;
		font-weight: 800;
		font-size: 32px;
		text-align: center;
		word-wrap: break-word;
		padding: 5vh;
	}
	.result {
		padding: 20px;
		margin: 20px;
		border-radius: 40px;
		text-align: center;
		font-family: var(--font-sans);
		color: #333;
		font-weight: 800;
		font-size: 32px;
		text-align: center;
		word-wrap: break-word;
		background-color: var(--pure-background-color);
		border: rgb(191, 184, 201) solid 1.2px;
	}
	@keyframes submit-hover-in {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.05);
		}
	}
	@keyframes submit-hover-out {
		from {
			transform: scale(1.05);
		}
		to {
			transform: scale(1);
		}
	}
	.submit-quiz:hover {
		animation: submit-hover-in 0.2s;
		transform: scale(1.05);
	}
	.submit-quiz {
		animation: submit-hover-out 0.05s;
		padding: 20px;
		margin: auto;
		width: fit-content;
		color: rgb(255, 255, 255);
		font-family: var(--font-sans);
		font-weight: 1000;
		font-size: 24px;
		margin-top: 0vh;
		border-radius: 44px;
		padding-left: 30px;
		padding-right: 30px;
	}
	@keyframes hover-answer-in {
		from {
			background-color: rgba(0, 0, 0, 0.08);
		}
		to {
			background-color: rgba(0, 0, 0, 0.13);
		}
	}
	@keyframes hover-answer-out {
		from {
			background-color: rgba(0, 0, 0, 0.13);
		}
		to {
			background-color: rgba(0, 0, 0, 0.08);
		}
	}
	.quiz-answer:hover {
		animation: hover-answer-in 0.2s;
		background-color: rgba(0, 0, 0, 0.13);
	}
	.quiz-answers {
		margin: 0px;
		padding: 0px;
	}
	.quiz-answer {
		background-color: rgba(0, 0, 0, 0.08);
		padding: 18px;
		border-radius: 30px;
		margin: 2vh;
		font-family: var(--font-sans);
		color: #222;
		font-weight: 800;
		font-size: 24px;
		text-align: center;
		word-wrap: break-word;
		animation: hover-answer-out 0.2s;
	}
	.question-title {
		text-align: center;
		padding: 5vw;
		font-family: var(--font-sans);
		color: black;
		font-weight: 800;
		font-size: 32px;
		text-align: center;
		word-wrap: break-word;
		padding: 5vh;
	}
	.quiz-question {
		width: 100%;
		padding-bottom: 5vh;
	}
	.quiz-questions {
		padding: 20px;
		width: 100%;
		display: relative;
		padding-bottom: 10vh;
	}
	.lds-facebook {
		display: inline-block;
		position: relative;
		width: 10vh;
		height: 10vh;
		top: 40vh;
		left: 47.5%;
		transform: translate(-50%, -50%);
	}
	.lds-facebook div {
		display: inline-block;
		position: absolute;
		left: 2vh;
		width: 4vh;
		background: #fff;
		animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
		border-radius: 0.7vh;
	}
	.lds-facebook div:nth-child(1) {
		left: 2vh;
		animation-delay: -0.24s;
	}
	.lds-facebook div:nth-child(2) {
		left: 8vh;
		animation-delay: -0.12s;
	}
	.lds-facebook div:nth-child(3) {
		left: 14vh;
		animation-delay: 0;
	}
	@keyframes lds-facebook {
		0% {
			top: 2vh;
			height: 16vh;
		}
		50%,
		100% {
			top: 6vh;
			height: 8vh;
		}
	}

	.quiz-author {
		font-family: var(--font-sans);
		color: white;
		font-weight: 800;
		font-size: 32px;
		text-align: center;
		word-wrap: break-word;
		padding: 5vh;
	}

	.quiz-title {
		font-family: var(--font-sans);
		color: white;
		font-weight: 800;
		font-size: 80px;
		text-align: center;
		word-wrap: break-word;
		padding: 20%;
		padding-top: 40vh;
		padding-bottom: 0px;
	}
	.take-quiz-wave-background {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 500 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c161 C 57.6%2c144.4 172.8%2c81.6 288%2c78 C 403.2%2c74.4 460.8%2c153.2 576%2c143 C 691.2%2c132.8 748.8%2c20.6 864%2c27 C 979.2%2c33.4 1036.8%2c155.4 1152%2c175 C 1267.2%2c194.6 1382.4%2c135 1440%2c125L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 0.3)'%3e%3c/path%3e%3cpath d='M 0%2c537 C 96%2c493.6 288%2c319.8 480%2c320 C 672%2c320.2 768%2c540.2 960%2c538 C 1152%2c535.8 1344%2c354.8 1440%2c309L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 0.4)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
		width: 100%;
		height: 100vh;
		box-shadow: inset 0px 40px 60px 10px rgba(0, 0, 100, 0.13);
	}
	.take-quiz {
		background-color: white;
	}
</style>
