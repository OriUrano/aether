<script>
    	import { fly } from 'svelte/transition';
        import { quintOut } from 'svelte/easing';
    /**
	 * @type {HTMLDivElement}
	 */
    let sideTab;
    let sideTabDragging = false;

    function sideTabDragStart() {
        console.log("eb")
        sideTabDragging = true;
    }
    function sideTabDragStop() {
        sideTabDragging = false;
        console.log("ea")

    }

    // @ts-ignore
    function sideTabDrag(event) {
        if (!sideTabDragging) {
            return;
        }
        sideTab.style.width = event.clientX-47+"px";
        if (event.clientX-47 <= 47*2) {
            sideTab.style.display = "none";
        } else {
            sideTab.style.display = "block";
        }
        console.log(event.clientX);
    }

    function sideTabDisplay() {
        if (sideTab.style.display === "block") {
            sideTab.style.display = "none";
        } else {
            sideTab.style.display = "block";
        }
    }
</script>

        <!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="bg-neutral-900 w-screen h-screen flex" on:mousemove={sideTabDrag} on:mouseup={sideTabDragStop}>
    <div class="h-screen w-12 bg-neutral-800 border-r-2 border-neutral-700">
        <div class="h-12 w-full bg-neutral-700" on:click={sideTabDisplay}>B</div>
    </div>
    <div class="h-screen min-w-48 w-64 bg-neutral-800 relative" bind:this={sideTab}>
        <div class="h-12 w-full bg-neutral-700"></div>
        <div class="h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0" on:mousedown={sideTabDragStart} on:mouseup={sideTabDragStop}></div>
    </div>


    <div class="h-screen grow min-w-96">
        <div class="h-12 w-full bg-neutral-700"></div>
    </div>
</div>