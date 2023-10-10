<script>
	import { spring,tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { setContext } from 'svelte'
    import { cursor_size } from '../../stores/global.js';
    let X = 0;
    let Y = 0;
    let scrollY = 0;

	let coords1 = tweened(
		{ x: 0, y: 0 },
		{
			easing: cubicOut,
			duration: 500
		}
	);

	let coords2 = tweened(
		{ x: 0, y: 0 },
		{
			easing: cubicOut,
			duration: 10
		}
	);

	let size = $cursor_size;
    function updateCursor () {
        coords1.set({ x: X, y: Y+ scrollY })
		coords2.set({ x: X, y: Y+ scrollY })
    }
    function updateOnScroll(){
        coords1.set({ x: X, y: Y+ scrollY });
        coords2.set({ x: X, y: Y+ scrollY });
    }

</script>

<svelte:window
	on:mousemove={(e) => {
        X = e.clientX;
        Y = e.clientY;
        updateCursor()
	}}
	on:mousedown={(e) => {
		size.set(30);
	}}
	on:mouseup={(e) => {
		size.set(15);
	}}
    on:scroll={(e) => {
		scrollY = window.scrollY;
        updateOnScroll()
	}}
/>

<svg
	class ="w-full h-full cursor"
>
	<circle cx={$coords1.x} cy={$coords1.y} r={$size} fill="white" style="mix-blend-mode: exclusion;" />
</svg>
<svg
	class ="w-full h-full cursor"
    style = "z-index: 1000"
>
	<circle cx={$coords2.x} cy={$coords2.y} r={Math.min(1/($size/100),$size/2)} fill="white" style="mix-blend-mode: difference;"/>
</svg>

<style>
	:global(body) {
		cursor: none;
	}
	
	.w-full {
		width: 100vw;
	}
	
	.h-full {
		height: 100vw;
	}
	
	svg {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
</style>