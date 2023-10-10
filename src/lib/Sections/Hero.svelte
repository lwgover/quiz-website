<script>
	let colors = [
		'#8c4b6f',
		'#f3715c',
		'#fbb040',
		'#10ac8f',
		'#3d99d4',
		'#66d2ea',
		'#fe938c',
		'#F1A9A0',
		'#e55813',
		'#f58233',
		'#d88495',
		'#ebbd30',
		'#7DCFB6',
		'#68ABB3',
		'#A3DAE5',
		'#D85C68',
		'#9CEC5B',
		'#FFB75E',
		'#FFA931',
		'#Fa5b30'
	];
</script>

<section class="Hero">
	<div class="hero-container">
		<div class="blue-circle" />
		<div class="green-circle" style="transform: translate(70vw,0vh)" />
		<div class="red-circle" style="transform: translate(30vw,0vh)" />
        <div class='quiz-picture-container-container-bc-im-good-at-css-and-naming'>
		<div class="quiz-picture-gradient-outline">
			<div class="quiz-picture-container">
				<div class="quiz-picture-top-bar">
					<div class="quiz-picture-top-bar-button" />
					<div class="quiz-picture-top-bar-button" />
					<div class="quiz-picture-top-bar-button" />
				</div>
				<div
					class="quiz-picture-header"
					style={`background: linear-gradient( to bottom right, ${
						colors[Math.floor(Math.random() * colors.length)]
					}, ${colors[Math.floor(Math.random() * colors.length)]});`}
				>
					<div class="quiz-picture-title"></div>
                    <div class="quiz-picture-title" style='width: 50%' />
				</div>
				<ul class="quiz-picture-question-list">
					<li class="quiz-picture-question" />
					<li class="quiz-picture-question" />
					<li class="quiz-picture-question" />
					<li class="quiz-picture-question" />
				</ul>
			</div>
		</div>
        </div>
        <div class="promo-text-container">
            <div class="promo-subtitle">Welcome to</div>
            <div class="promo-title">Quiz Quest!</div>
			<div class="promo-text">Take Quizzes</div>
			<div class="promo-text" style="transform: translate( 7vw, 0px);">Make Quizzes</div>
			<div class="promo-text">Share Quizzes</div>
		</div>
	</div>
</section>

<style>
	.Hero {
		overflow: hidden;
	}
    .quiz-picture-container-container-bc-im-good-at-css-and-naming {
        margin:40px;
        margin-top: 200px;
        display: inline-block;
    }
	.promo-text-container {
		padding: 40px;
        width:fit-content;
        display: inline-block;
        transform: scale(2);
        translate: 10vw -20vh;
        text-shadow: 0 0 10px 10px #fff;
        /*transform: translate(0px, -20vh);*/
	}
    .promo-subtitle {
		font-family: Mackinac, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
		font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
		font-size: 1vw;
		font-variation-settings: normal;
		font-weight: 900;
		height: auto;
		letter-spacing: -0.9px;
		line-height: 45px;
		outline-color: rgb(124, 58, 237);
		word-spacing: 0.9px;
		-webkit-font-smoothing: antialiased;
		-webkit-text-fill-color: rgba(255, 255, 255, 1);
        margin: 30px;
        width:fit-content;
        padding-bottom: 0px;
        margin: 0px;
	}
    .promo-title {
		font-family: Mackinac, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
		font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
		font-size: 4vw;
		font-variation-settings: normal;
		font-weight: 900;
		height: auto;
		letter-spacing: -0.9px;
		line-height: 45px;
		outline-color: rgb(124, 58, 237);
		word-spacing: 0.9px;
		-webkit-font-smoothing: antialiased;
		-webkit-text-fill-color: rgba(255, 255, 255, 1);
        width:fit-content;
        padding-top: 0px;
        margin: 0px;
        margin-bottom: 5vh;
	}
	.promo-text {
		font-family: Mackinac, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
		font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
		font-size: 1.5vw;
		font-variation-settings: normal;
		font-weight: 900;
		height: auto;
		letter-spacing: -0.9px;
		outline-color: rgb(124, 58, 237);
		word-spacing: 0.9px;
		-webkit-font-smoothing: antialiased;
		-webkit-text-fill-color: rgba(255, 255, 255, 1);
        margin: 0.5vw;
        width:fit-content;
        transform: translate(5vw, 0px)
	}
	.quiz-picture-header {
		height: 200px;
		width: 100%;
		padding-top: 20px;
	}
	.quiz-picture-top-bar-button {
		height: 10px;
		width: 10px;
		border-radius: 5px;
		display: inline-block;
		box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
	}
	.quiz-picture-top-bar {
		width: 100%;
		height: 20px;
		background-color: rgba(0, 0, 0, 0.1);
		padding-left: 6px;
		padding-top: 2px;
	}
	.quiz-picture-gradient-outline {
		width: fit-content;
		height: fit-content;
		background: radial-gradient(ellipse at top, #fff, var(--dark-background-color)),
			radial-gradient(ellipse at bottom, var(--dark-background-color), #f00);
		padding: 3px;
		/*transform: translate(55vw, 20vh);*/
		rotate: -3deg;
		border-radius: 15px;
		box-shadow: 0px 10vh 10vh -1vh rgba(var(--other-color-rgb), 0.6);
        display: inline-block;
	}
	.quiz-picture-title {
		background: rgba(255, 255, 255, 0.5);
		padding: 25px 10px;
		width: 70%;
		top: 15%;
		margin: auto;
        margin-top: 20px;
		border-radius: 25px;
	}

	.quiz-picture-question-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.quiz-picture-question {
		text-align: center;
		float: left;
		width: 70%;
		background: rgba(0, 0, 0, 0.1);
		padding: 0.1vh; /* should prevent issues with content longer than image */
		border-radius: 20px; /* create rounded edges to div */
		margin: 1vh;
	}
	.quiz-picture-question:hover {
		background: rgba(0, 0, 0, 0.15);
	}
	.quiz-picture-container {
		height: 60vh;
		width: 40vw;
		background-color: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0px 0vh 2vh 0.3vh rgba(255,255,255, 0.2);
	}
	ul {
		list-style: none; /* Remove default bullets */
		padding: 1vh;
	}

	ul li::before {
		content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a 
  bullet */
		color: rgba(0, 0, 0, 0.3); /* Change the color */
		font-weight: bold; /* If you want it to be bold */
		display: inline-block; /* 
  Needed to add space between the bullet and the text */
		width: 1em;
		/* Also needed for space (tweak if needed) */
		margin-left: -110%; /* 
  Also needed for space (tweak if needed) */
	}
	.hero-container {
		height: 100vh;
		background-color: var(--dark-background-color);
		overflow: hidden;
	}
	.blue-circle {
		position: absolute;
		background: radial-gradient(
			rgba(var(--accent-color-rgb), 0.25) 10%,
			rgba(1, 1, 1, 0),
			rgba(1, 1, 1, 0)
		);
		height: 130vh;
		width: 130vh;
		left: -20vw;
		top: -40vh;
	}
	.green-circle {
		position: absolute;
		background: radial-gradient(
			rgba(var(--primary-color-rgb), 0.2) 20%,
			rgba(1, 1, 1, 0),
			rgba(1, 1, 1, 0)
		);
		height: 80vh;
		width: 80vh;
	}
	.red-circle {
		position: absolute;
		background: radial-gradient(
			rgba(var(--other-color-rgb), 0.1) 30%,
			rgba(1, 1, 1, 0),
			rgba(1, 1, 1, 0)
		);
		height: 80vh;
		width: 80vh;
	}
	#highlight {
		position: absolute;
		height: 30px;
		width: 30px;
		border-radius: 15px;
		background:white;
		-webkit-filter: invert(100%);
    	filter: invert(100%);
		z-index: 1001;
	}
	@media screen and (max-width: 768px) {
		#highlight {
			background: (rgba(255, 255, 255, 0) 45%, rgba(1, 1, 1, 0));
		}
        .quiz-picture-container {
		    height: 40vh;
		    width: 70vw;
		    background-color: white;
        }
        .quiz-picture-container-container-bc-im-good-at-css-and-naming {
            margin-top: 100px;
            margin-left: 15vw;
        }
        .quiz-picture-header {
            height: 16vh;
        }
        .promo-text-container {
            translate: 0vw -5vh;
            transform: scale(1.1);
            display: block;
            width: 100%;
            padding: 5vw
        }
        .promo-title {
            font-size: 15vw;
            margin: auto;
            margin-top: 1vh;
        }
        .promo-subtitle {
            font-size: 5vw;
            margin: auto;
        }
        .promo-text {
            font-size: 5vw;
            margin: auto;
            margin-top: 1vh;
            transform: translate(0vw, 5vh) !important;
        }

	}
</style>
