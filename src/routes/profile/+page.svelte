<script>
	import Seo from '$lib/Seo.svelte';
	import Footer from '$lib/Sections/Footer.svelte';
	import Cursor from '$lib/Sections/Cursor.svelte';
	import Profile from '$lib/Sections/Profile.svelte'
	import {curr_quiz } from '../../stores/global.js';

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
	let parallax_rate = -1.001;
	/**
	 * @type {any}
	 */
	let currentStep;
</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY={scroll} />
<Seo />
<main id="home">
	<Profile/>
	<Footer/>
	<Cursor/>

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
