<script>
	/**
	 * @type {number}
	 */
	export let size;
	/**
	 * @type {any}
	 */
	export let id;
	export let last = false;
	import { mouse, mouseUpOrDown } from '$lib/store';

	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * @type {number}
	 */
	let mouseX;
	/**
	 * @type {number}
	 */
	let oldX;

	/**
	 * @type {HTMLDivElement}
	 */
	let sideTabDragEle;
	let sideTabDragging = false;

	function sideTabDragStart() {
		sideTabDragging = true;
		document.body.style.cursor = 'col-resize';
		sideTabDragEle.style.background = '#ec4899';
		sideTabDragEle.style.borderRightColor = '#ec4899';
		oldX = structuredClone(mouseX);
	}

	export function sideTabDragStop() {
		sideTabDragging = false;
		document.body.style.cursor = 'default';
		try {
			sideTabDragEle.style.removeProperty('background');
			sideTabDragEle.style.removeProperty('border-right-color');
		} catch {}
	}

	// @ts-ignore
	export function sideTabDrag() {
		if (!sideTabDragging) {
			return;
		}

		document.body.style.cursor = 'col-resize';
		sideTabDragEle.style.background = '#ec4899';
		sideTabDragEle.style.borderRightColor = '#ec4899';
		// size = size + (mouseX - oldX);
		dispatch('move', {
			move: mouseX - oldX,
			id: +id
		});
		oldX = structuredClone(mouseX);
	}

	onMount(() => {
		mouse.subscribe((value) => {
			mouseX = value.x;
			sideTabDrag();
		});

		mouseUpOrDown.subscribe((value) => {
			if (value) {
				sideTabDragStop();
			}
		});
	});
</script>

<div style="width: {size}px;}" class="h-full relative bg-neutral-900 min-w-48">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="h-12 w-full bg-neutral-700 flex pt-2 pr-6 pl-6 gap-3">
        <div class="group truncate">Notes and stuff blah blah</div>
        <div class="group truncate">Notes and stuff blah 2</div>
		<!-- <div class="group relative">
            <div class="truncate relative">
                <div class="truncate">Notes and stuff blah blah</div>
                <span
                    class="transition-all absolute left-[50%] -translate-x-2/4 top-12 text-xs scale-0 z-200 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default text-white"
                    >Notes and stuff blah blah</span
                >
            </div>
		</div>
        <div class="group relative">
            <div class="truncate relative">
                <div class="truncate">Notes and stuff blah blah</div>
                <span
                    class="transition-all absolute left-[50%] -translate-x-2/4 top-12 text-xs scale-0 z-200 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default text-white"
                    >Notes and stuff blah blah</span
                >
            </div>
		</div> -->
	</div>
	{#if !last}
		<div
			bind:this={sideTabDragEle}
			class="h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0"
			on:mousedown={sideTabDragStart}
			on:mouseup={sideTabDragStop}
		></div>
	{/if}
</div>
