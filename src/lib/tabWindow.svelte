<script>
    export let color;
    export let parentWidth;
    export let last = false;
    let oldParentWidth = structuredClone(parentWidth);
    import {mouse, mouseUpOrDown} from '$lib/store'

    let width = 0;
    $: {
        if (parentWidth !== undefined && oldParentWidth === undefined) {
            width = parentWidth/3;
        }

        if (parentWidth !== undefined && oldParentWidth !== undefined) {
            width = width * parentWidth/oldParentWidth;
        }

        oldParentWidth = structuredClone(parentWidth);
    }

    import { onMount } from 'svelte';


    /**
	 * @type {number}
	 */
    let mouseX;
    /**
	 * @type {number}
	 */
    let oldX;

    /**
	 * @type {number}
	 */
    let mouseY;

    
	/**
	 * @type {HTMLDivElement}
	 */
	let sideTabDragEle;
	let sideTabDragging = false;
    /**
	 * @type {HTMLDivElement}
	 */
    let windowTab;

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
        } catch {
            
        }

	}


    // @ts-ignore
    export function sideTabDrag() {
		if (!sideTabDragging) {
			return;
		}
		
        document.body.style.cursor = 'col-resize';
        sideTabDragEle.style.background = '#ec4899';
        sideTabDragEle.style.borderRightColor = '#ec4899';
        width = width + (mouseX - oldX);
        oldX = structuredClone(mouseX);
	}

    onMount(() => {
        mouse.subscribe((value) => {
            mouseX = value.x;
            mouseY = value.y;
            sideTabDrag();
        });

        mouseUpOrDown.subscribe((value) => {
            if (value) {
                sideTabDragStop();
            }
        })
    })
</script>

<div style="background-color: {color}; {last ? 'flex-grow: 1;' : 'width: '+width+'px;'}" class="h-full relative min-w-48" bind:this={windowTab}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#if !last}
        <div
            bind:this={sideTabDragEle}
            class="h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0"
            on:mousedown={sideTabDragStart}
            on:mouseup={sideTabDragStop}
        ></div>
    {/if}
</div>