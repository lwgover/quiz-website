<script>
	//<circle fill="white" r="15px" x="40px" style="transform: translate(40px, 42.25px)"/>
	//<circle fill="white" r="22.75px" x="40px" style="transform: translate(40px, 60px)"/>
</script>

<section class="info">
	<div class="info-title">How to use Quiz Quest</div>
	<div class="row">
		<div class="column">
			<div class="svg-container">
				<svg class="info-take-svg" height="80px" width="80px">
					<rect
						fill="transparent"
						height="60px"
						width="45px"
						style="transform: translate(15.5px, 8px); rx: 5px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<rect
						fill="transparent"
						height="1px"
						width="20px"
						style="transform: translate(33px, 20px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<rect
						fill="transparent"
						height="1px"
						width="20px"
						style="transform: translate(33px, 32px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<rect
						fill="transparent"
						height="1px"
						width="20px"
						style="transform: translate(33px, 44px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<rect
						fill="transparent"
						height="1px"
						width="20px"
						style="transform: translate(33px, 56px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<circle
						fill="white"
						r="1"
						style="transform: translate(24px, 20px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<circle
						fill="white"
						r="1"
						style="transform: translate(24px, 32px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<circle
						fill="white"
						r="1"
						style="transform: translate(24px, 44px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
					<circle
						fill="white"
						r="1"
						style="transform: translate(24px, 56px); rx: 2px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>
				</svg>
			</div>
			<div class="info-subtitle">Take Quizzes</div>
			<div class="info-info-text">
				Quiz Quest is the perfect platform to take quizzes of all varieties — Personality Quizzes, practice-test quizzes, and more!
			</div>
		</div>
		<div class="column">
			<div class="svg-container">
				<svg class="info-make-svg" height="80px" width="80px">
					<!--<rect
						fill="transparent"
						height="60px"
						width="60px"
						style="transform: translate(8px, 8px); rx: 5px; stroke: #fff; stroke-width: 4px; "
						opacity="1"
					/>-->
                    <path fill="transparent" style="rx: 5px; stroke: #fff; stroke-width: 4px;" d="M 13 55 V 65 H 23 L 57 25 L 47 16 L 13 55 "/>
                    <path fill="transparent" style="rx: 5px; stroke: #fff; stroke-width: 4px;" d="M 63 21 L 51 10  "/>
				</svg>
			</div>
			<div class="info-subtitle">Make Quizzes</div>
			<div class="info-info-text">
				Quiz Quest allows you to make highly-customizable quizzes for all your quizzing needs.
			</div>
		</div>
		<div class="column">
			<div class="svg-container">
				<svg class="info-share-svg" height="80px" width="80px">
					<circle
						fill="white"
						r="10px"
						x="40px"
						style="transform: translate(12.5px, 25px)"
						opacity="1"
					/>
					<circle
						fill="white"
						r="15px"
						x="40px"
						style="transform: translate(12.5px, 50px)"
						opacity="1"
					/>
					<rect
						fill="#fff"
						height="15px"
						width="30px"
						style="transform: translate(-2.5px, 50px)"
						opacity="1"
					/>
					<circle
						fill="white"
						r="10px"
						x="40px"
						style="transform: translate(67.5px, 25px)"
						opacity="1"
					/>
					<circle
						fill="white"
						r="15px"
						x="40px"
						style="transform: translate(67.5px, 50px)"
						opacity="1"
					/>
					<rect
						fill="#fff"
						height="15px"
						width="30px"
						style="transform: translate(52.5px, 50px)"
						opacity="1"
					/>
					<circle fill="white" r="17.5px" x="40px" style="transform: translate(40px, 35px)" />
					<circle fill="white" r="27.5px" x="40px" style="transform: translate(40px, 80px)" />
				</svg>
			</div>
			<div class="info-subtitle">Share Quizzes</div>
			<div class="info-info-text">
				Quiz Quest allows you to easily share your quizzes with friends, and compare results for
				every quiz you take.
			</div>
		</div>
	</div>
    <hr class='info-hr'/>
    <div class="info-title">The Origin Story</div>
    <div class="info-origin-text" style="padding-bottom: 20px">
        Quiz Quest began as the final project for my Database Management class in 2022 - a website where users could create and take quizzes. Georgia Karwhite and Jared Vigliecca and I created the initial project, but due to the limited time-frame and our inexperience with web development, we only managed to implement a basic proof of concept version of this site. I always had a feeling the project could be something much better than it was, so I decided to revisit this project post-graduation and redo it from scratch, with the ultimate goal of making it available online.
    </div>
    <div class="info-origin-text" style="padding-bottom: 20px">
        This time, I chose to use a Flask server rather than an Express.js one, while also significantly improving the design. User password salting has been implemented for additional security, and I increased database security by enforcing stronger encryption algorithms than before. After many days of development work, what you see now is the result of my efforts!
    </div>
    <div class="info-origin-text" style="margin-top: 0px; padding-top: 0px;">
        I decided to host this website using Github Pages. This, of course, has some limitations in terms of features that I am not allowed to implement- for example, dynamic routing would facilitate an easy way for users to share their quizzes using a URL. 
    </div>
</section>

<style>
    .info-hr {
        border: var(--dark-background-color) solid 2px;
        margin-top:30px;
        margin-bottom:20px;
        opacity: 0.7;
        width: 40%;
        
    }
    .info-origin-text {
		font-size: 18px;
		color: #557;
		letter-spacing: 3px;
		text-align: left;
		padding: 12px;
		font-family: var(--font-sans);
		padding: 20%;
        padding-top:20px;
        padding-bottom: 80px;
        line-height: 25px;
	}
    .info-make-svg {
		background: #84f43a;
		border-radius: 10px;
		box-shadow: 0px 10px 10px 0px rgba(173, 253, 43, 0.6);
		padding: 0px;
		margin: 0px;
		border: #66cc23 solid 2px;
	}
	.info-take-svg {
		background: #f43a84;
		border-radius: 10px;
		box-shadow: 0px 10px 10px 0px rgba(253, 43, 173, 0.3);
		padding: 0px;
		margin: 0px;
		border: #ed0562 solid 2px;
	}
	.info-share-svg {
		background: #00aeff;
		border-radius: 10px;
		box-shadow: 0px 10px 10px 0px rgba(100, 200, 255, 0.3);
		padding: 0px;
		margin: 0px;
		border: #008aff solid 2px;
	}
	.svg-container {
		width: fit-content;
		margin: auto;
	}
	.column {
		float: left;
		width: 30%;
		margin: 1.5%;
		padding: 0px;
	}

	/* Clear floats after the columns */
	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	.info {
		background: linear-gradient(
			to top right,
			rgb(251, 223, 255),
			rgb(247, 243, 255),
			rgb(220, 243, 255)
		);
	}
	.info-info-text {
		font-size: 16px;
		color: #557;
		letter-spacing: 3px;
		text-align: left;
		padding: 12px;
		font-family: var(--font-sans);
		padding-left: 10%;
		padding-right: 10%;
	}
	.info-subtitle {
		font-size: 30px;
		color: #336;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 550;
		padding: 24px;
	}
	.info-title {
		font-size: 48px;
		color: var(--dark-background-color);
		font-style: italic;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 550;
		padding: 48px;
	}
</style>
