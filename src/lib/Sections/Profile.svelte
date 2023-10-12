<section class="info">
	<div class="info-title">How to use Quiz Quest</div>
	<div class="row">
		<div class="column">
			<div class="svg-container">
				<svg height="80px" width="80px" style="background: #00f; margin:auto; float:center">
                    <circle fill="white" r="20px" x="40px" style="transform: translate(40px, 30px)"/>
                    <circle fill="white" r="30px" x="40px" style="transform: translate(40px, 80px)"/>
                </svg>
			</div>
		</div>
		<div class="column" />
		<div class="column" />
	</div>
</section>

<style>
    .svg-container {
        width:fit-content;
        margin:auto;
    }
	.column {
		float: left;
		width: 30%;
		margin: 1.5%;
		background: #f00;
		padding: 0px;
	}

	/* Clear floats after the columns */
	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	.info {
		height: 100vh;
		background: linear-gradient(
			to top right,
			rgb(249, 212, 255),
			rgb(237, 228, 255),
			rgb(220, 243, 255)
		);
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
