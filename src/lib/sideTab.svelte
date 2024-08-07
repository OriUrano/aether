<script>
    import SideTabButton from './sideTabButton.svelte';
    import {sideTabClosed, mouse, mouseUpOrDown} from '$lib/store'
	import { onMount } from 'svelte';

    let isSideTabClosed = false;

    sideTabClosed.subscribe((value) => {
        isSideTabClosed = value;
    });

    /**
	 * @type {number}
	 */
    let mouseX;
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
    let sideTab;

    function sideTabDragStart() {
		sideTabDragging = true;
		sideTabDragEle.focus();
		document.body.style.cursor = 'col-resize';
		sideTabDragEle.style.background = '#ec4899';
		sideTabDragEle.style.borderRightColor = '#ec4899';
	}

    export function sideTabDragStop() {
		sideTabDragging = false;
		document.body.style.cursor = 'default';
		sideTabDragEle.style.removeProperty('background');
		sideTabDragEle.style.removeProperty('border-right-color');
	}

    // @ts-ignore
    export function sideTabDrag() {
		if (!sideTabDragging) {
			return;
		}
		if (mouseX <= 47 * 2) {
            sideTabClosed.set(true);
		} else if (mouseX >= 47 * 4) {
			sideTabClosed.set(false);
            document.body.style.cursor = 'col-resize';
            sideTabDragEle.style.background = '#ec4899';
            sideTabDragEle.style.borderRightColor = '#ec4899';
            sideTab.style.width = mouseX - 47 + 'px';
		}
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

<div class="h-screen min-w-48 bg-neutral-800 relative {isSideTabClosed ? 'hidden' : 'block'}" bind:this={sideTab}>
    <div class="h-12 w-full bg-neutral-700 flex content-center pt-[.425rem] pl-1 gap-1">
        <SideTabButton icon="folder" tooltip="Files"/>
        <SideTabButton icon="search" tooltip="Search"/>
        <SideTabButton icon="bookmark" tooltip="Bookmarks"/>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        bind:this={sideTabDragEle}
        class="h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0"
        on:mousedown={sideTabDragStart}
        on:mouseup={sideTabDragStop}
    ></div>
</div>