<script>
	import { user } from '../../stores/global.js';
</script>

<section class="info">
	<div class="profile-title">{$user ? 'welcome, ' + $user['username'] : 'error'}</div>
	<div class="logo-container">
		<a href="./"><div class="profile-title">LINK LINK LINK</div></a>
	</div>
</section>

<style>
	.svg-container {
		width: fit-content;
		margin: auto;
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
		min-height: 100vh;
		background: rgb(237, 228, 255);
	}
	.profile-title {
		font-size: 52px;
		color: var(--dark-background-color);
		font-style: italic;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 550;
		padding: 48px;
	}
</style>
