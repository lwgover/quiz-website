<script>
	import { cursor_size, curr_quiz, cursor_color } from '../../stores/global.js';
	import { slide, blur } from 'svelte/transition';
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
	let quiz = {};
	quiz['title'] = '';
	quiz['description'] = '';
	quiz['results'] = [
		{ title: '', description: '' },
		{ title: '', description: '' }
	];
	quiz['questions'] = [{ question: '', answers: ['', ''] }];

	//onMount(() => getQuizData($curr_quiz));
</script>

<section class="make-quiz">
	<div
		class="make-quiz-gradient-background"
		style={`background: linear-gradient( to bottom right, ${
			colors[Math.floor(Math.random() * colors.length)]
		}, ${colors[Math.floor(Math.random() * colors.length)]});`}
	>
		<div class="make-quiz-wave-background">
			<div class="quiz-title">
				<input
					bind:value={quiz['title']}
					class="quiz-title-input"
					type="text"
					name="query"
					placeholder="Input Quiz Title..."
					autocomplete="one-time-code"
					style="cursor:auto;"
				/>
				<textarea
					class="description"
					id="description"
					placeholder="Describe your quiz..."
					bind:value={quiz['description']}
				/>
			</div>
		</div>
		<div class="results-and-questions">
			<div class="results">
				<div class="make-quiz-title">Results</div>
				<div class="make-quiz-subtitle">
					Describe the possible results of your quiz, and what they mean
				</div>
				{#each quiz['results'] as result, i}
					<div class="result" transition:slide={{ delay: 200, duration: 300, axis: 'y' }}>
						{#if quiz['results'].length > 2}
							<div
								class="delete-result"
								transition:blur={{ amount: 10 }}
								role="none"
								on:click={function () {
									quiz['results'].splice(i, 1);
									quiz['results'] = quiz['results'];
								}}
							>
								x
							</div>
						{/if}
						<input
							bind:value={result['title']}
							class="result-title-input"
							type="text"
							name="query"
							placeholder="Result Title..."
							autocomplete="one-time-code"
							style="cursor:auto;"
						/>
						<textarea
							class="result-description"
							id="description"
							placeholder="Describe this result..."
							bind:value={result['description']}
						/>
					</div>
				{/each}
				<div
					class="result-plus"
					role="none"
					on:click={() =>
						(quiz['results'] = quiz['results'].concat([{ title: '', description: '' }]))}
				>
					+
				</div>
				<div class="make-quiz-title">Questions</div>
				<div class="make-quiz-subtitle">Write out your questions, and assign them results.</div>
				{#each quiz['questions'] as question, i}
					<div class="question" transition:slide={{ duration: 300, axis: 'y' }}>
						<div class="question-title-container">
							<div class="question-title-spacing" />
							<input
								bind:value={question['question']}
								class=" question-title"
								type="text"
								name="query"
								placeholder={`Question ${i + 1}`}
								autocomplete="one-time-code"
								style="cursor:auto;"
							/>
							<div class="question-title-spacing"><div class="question-delete" on:click={function () {
                                quiz['questions'].splice(i, 1);
                                quiz['questions'] = quiz['questions'];
                            }} role='none'>-</div></div>
						</div>
						{#each question['answers'] as answer, j}
							<input
								bind:value={answer}
								class=" question-answer"
								type="text"
								name="query"
								placeholder={`Answer ${j + 1}`}
								autocomplete="one-time-code"
								style="cursor:auto;"
								transition:slide={{ duration: 300, axis: 'y' }}
							/>
						{/each}
						<div
							class="answers-plus"
							role="none"
							on:click={() => (question['answers'] = question['answers'].concat(['']))}
						>
							+
						</div>
					</div>
				{/each}
				<div
					class="questions-plus"
					role="none"
					on:click={() =>
						(quiz['questions'] = quiz['questions'].concat([{ question: '', answers: ['', ''] }]))}
				>
					+
				</div>
			</div>
			<div class="console-log-quiz" role="none" on:click={() => console.log(quiz)}>log quiz</div>
		</div>
	</div>
</section>

<style>
	@keyframes hover-question-delete-x {
		from {
			background-color: rgba(255,255,255, 0.0);
		}
		to {
			background-color: rgba(255, 0, 0, 0.18);
		}
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
	.question-delete:hover {
		animation: hover-question-delete-x 0.5s;
		background-color: rgba(255, 0, 0, 0.18);
	}
    .question-delete {
        margin:auto;
        text-align: right;
        font-family: var(--font-sans);
		color: black;
		font-weight: 800;
		font-size: 32px;
        padding:2vh;
        padding-right:10px;
        border-radius: 15px;
        cursor:pointer;

    }
	.question-title-spacing {
		width: 9.4%;
		display: inline-block;
	}
	.question-title-container {
		width: 100%;
		display: block;
	}
	.questions-plus {
		background-color: rgba(0, 255, 68, 0.5);
		border: rgba(0, 54, 4, 0.3) solid 2px;
		border-radius: 32px;
		font-family: var(--font-sans);
		color: rgba(0, 0, 0, 0.8);
		font-weight: 800;
		font-size: 32px;
		text-align: center;
		word-wrap: break-word;
		animation: hover-answer-out 0.2s;
		display: block;
		margin: auto;
		margin-bottom: 2vh;
		width: 64px;
		height: 64px;
		padding: 13px;
		cursor: pointer;
	}
    .answers-plus:hover {
        animation: hover-answer-in 0.2s;
        background-color: rgba(0, 0, 0, 0.13);
    }
	.answers-plus {
		background-color: rgba(0, 0, 0, 0.08);
		padding: 8px;
		border-radius: 30px;
		font-family: var(--font-sans);
		color: #222;
		font-weight: 800;
		font-size: 24px;
		text-align: center;
		word-wrap: break-word;
		animation: hover-answer-out 0.2s;
		border: none;
		display: block;
		margin: auto;
		margin-bottom: 2vh;
		width: 1000px;
		max-width: 90vw;
		cursor: pointer;
	}
	.question {
		margin: auto;
		width: fit-content;
		padding: 40px;
	}
	.question-title {
		text-align: center;
		font-family: var(--font-sans);
		color: black;
		font-weight: 800;
		font-size: 32px;
		text-align: center;
		word-wrap: break-word;
		padding: 5vh;
		margin: auto;
		border: none;
		width: 80%;
		margin: auto;
		display: inline;
	}
	.question-answer {
		background-color: rgba(0, 0, 0, 0.08);
		padding: 18px;
		border-radius: 30px;
		font-family: var(--font-sans);
		color: #222;
		font-weight: 800;
		font-size: 24px;
		text-align: center;
		word-wrap: break-word;
		animation: hover-answer-out 0.2s;
		border: none;
		display: block;
		margin: auto;
		margin-bottom: 2vh;
		width: 1000px;
		max-width: 90vw;
	}
	.delete-result {
		position: absolute;
		background-color: var(--pure-background-color);
		margin: auto;
		text-align: center;
		font-family: var(--font-sans);
		font-weight: 550;
		float: right;
		cursor: pointer;
		transform: translate(-8px, -12px);
		color: rgb(179, 169, 198);
	}
	.result-plus:hover {
		background-color: rgb(237, 228, 253);
	}
	.result-plus {
		background-color: var(--pure-background-color);
		margin: auto;
		margin-top: 20px;
		padding: 12px;
		width: 1000px;
		max-width: 90vw;
		border-radius: 20px;
		border: rgb(208, 202, 219) solid 1.2px;
		text-align: center;
		font-family: var(--font-sans);
		font-weight: 550;
		cursor: pointer;
	}
	.result-description {
		height: 120px;
		font-family: var(--font-sans);
		border-width: 2.5px;
		overflow: auto;
		display: block;
		margin: auto;
		margin-top: 4vh;
		width: 100%;
		background: rgba(47, 19, 107, 0.023);
		border: rgba(255, 255, 255, 0.8) solid 2.5px;
		border-radius: 8px;
		padding: 10px;
		font-size: 18px;
		border: none;
		border-bottom: rgba(0, 0, 0, 0.7) solid 2px;
		font-family: var(--font-serif);
	}
	.result-title-input {
		display: block;
		background-color: transparent;
		border: none;
		border-bottom: rgba(0, 0, 0, 0.7) solid 2px;
		padding: 10px;
		padding-bottom: 5px;
		border-radius: 5px;
		font-size: 24px;
		margin-bottom: 20px;
		font-family: var(--font-serif);
		width: 100%;
	}
	.result {
		background-color: var(--pure-background-color);
		margin: auto;
		margin-top: 20px;
		padding: 20px;
		width: 1000px;
		max-width: 90vw;
		border-radius: 20px;
		border: rgb(208, 202, 219) solid 1.2px;
		box-shadow: 0px 0px 15px 5px rgba(66, 40, 67, 0.05);
	}
	.make-quiz-subtitle {
		font-size: 18px;
		color: black;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 250;
		padding: 24px;
	}
	.make-quiz-title {
		font-size: 48px;
		color: black;
		font-style: italic;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 550;
		padding-top: 48px;
	}
	.console-log-quiz {
		width: 200px;
		height: 100px;
		background-color: black;
		margin: auto;
		border-radius: 20px;
		color: white;
		text-align: center;
		padding: 30px;
		font-size: 24px;
	}
	.results {
		width: 100%;
		height: fit-content;
	}
	.results-and-questions {
		background-color: white;
		padding: 20px;
	}
	.description {
		height: 30vh;
		font-family: var(--font-sans);
		border-width: 2.5px;
		overflow: auto;
		display: block;
		margin: auto;
		margin-top: 4vh;
		max-width: 85vw;
		width: 750px;
		background: rgba(255, 255, 255, 0.3);
		border: rgba(255, 255, 255, 0.8) solid 2.5px;
		color: white;
		border-radius: 20px;
		padding: 20px;
		font-size: 24px;
	}
	.description::placeholder {
		color: rgb(255, 255, 255);
		opacity: 0.5; /* Firefox */
	}

	input:focus,
	select:focus,
	textarea:focus,
	button:focus {
		outline: none;
	}
	.quiz-title-input {
		width: fit-content;
		max-width: 90vw;
		width: 800px;
		height: 60px;
		background: rgba(255, 255, 255, 0.3);
		border: rgba(255, 255, 255, 0.8) solid 2.5px;
		color: white;
		border-radius: 120px;
		padding: 50px;
		font-size: 60px;
	}
	.quiz-title-input::placeholder {
		color: rgb(255, 255, 255);
		opacity: 0.5; /* Firefox */
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
		padding-top: 30vh;
		padding-bottom: 0px;
	}
	.make-quiz-wave-background {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 500 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c161 C 57.6%2c144.4 172.8%2c81.6 288%2c78 C 403.2%2c74.4 460.8%2c153.2 576%2c143 C 691.2%2c132.8 748.8%2c20.6 864%2c27 C 979.2%2c33.4 1036.8%2c155.4 1152%2c175 C 1267.2%2c194.6 1382.4%2c135 1440%2c125L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 0.3)'%3e%3c/path%3e%3cpath d='M 0%2c537 C 96%2c493.6 288%2c319.8 480%2c320 C 672%2c320.2 768%2c540.2 960%2c538 C 1152%2c535.8 1344%2c354.8 1440%2c309L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 0.4)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
		width: 100%;
		height: 100vh;
		box-shadow: inset 0px 40px 60px 10px rgba(0, 0, 100, 0.13);
	}
</style>
