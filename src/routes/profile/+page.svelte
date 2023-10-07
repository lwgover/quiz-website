<script>
	import Seo from '$lib/Seo.svelte';
	import Login from '$lib/Sections/Login.svelte';
	import Header from '$lib/Sections/Header.svelte';

	/**
	 * @type {number}
	 */
	let pageWidth;
	/**
	 * @type {number}
	 */
	let pageHeight;
	$: isMobile = pageWidth < 768;
	let scroll = 0;
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

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY={scroll} />
<Seo />
<main id="home" style={`background: linear-gradient( to bottom right, ${
    colors[Math.floor(Math.random() * colors.length)]
}, ${colors[Math.floor(Math.random() * colors.length)]});`}>
	<Login/>

		<!--
    <Projects projects={data.projects} />
    <Awards awards={data.awards} {isMobile} />
    <Blog posts={data.posts} {isMobile} /> 
	-->
</main>

<style>
	main {
		display: grid;
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		justify-content: center;

		/* background-color: var(--primary-color); */
		z-index: 100; /* This is over the nav */
		position: relative;

		/*background-image: url('');*/
	}

	/* On desktop, do the cool sticky footer that reveals on scroll */
	/* @media screen and (min-width: 768px) {
      main {
        position: relative;
      }
    } */
</style>
