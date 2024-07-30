<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	/**
	 * @type {HTMLDivElement}
	 */
	let sideTab;
	/**
	 * @type {HTMLDivElement}
	 */
	let sideTabDragEle;
	let sideTabDragging = false;

	function sideTabDragStart() {
		sideTabDragging = true;
		sideTabDragEle.focus();
		document.body.style.cursor = 'col-resize';
		sideTabDragEle.style.background = '#ec4899';
		sideTabDragEle.style.borderRightColor = '#ec4899';
	}
	function sideTabDragStop() {
		sideTabDragging = false;
		document.body.style.cursor = 'default';
		sideTabDragEle.style.removeProperty('background');
		sideTabDragEle.style.removeProperty('border-right-color');
	}

	// @ts-ignore
	function sideTabDrag(event) {
		if (!sideTabDragging) {
			return;
		}
		sideTab.style.width = event.clientX - 47 + 'px';
		sideTabDragEle.focus();
		if (event.clientX <= 47 * 2) {
			sideTab.style.display = 'none';
		} else if (event.clientX >= 47 * 4) {
			sideTab.style.display = 'block';
		}
	}

	function sideTabDisplay() {
		if (sideTab.style.display === 'block') {
			sideTab.style.display = 'none';
		} else {
			sideTab.style.display = 'block';
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
	class="bg-neutral-900 w-screen h-screen flex"
	on:mousemove={sideTabDrag}
	on:mouseup={sideTabDragStop}
>
	<div class="h-screen min-w-12 w-12 bg-neutral-800 border-r-2 border-neutral-700">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="h-12 w-full bg-neutral-700 content-center">
			<button
				class="relative group material-symbols-outlined cursor-pointer w-[2.25rem] mx-[.375rem] hover:bg-neutral-600 rounded-md"
				on:click={sideTabDisplay}
			>
				dock_to_right
                <span class="transition-all absolute left-12 top-1 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Hide/Show Sidebar
                </span>
			</button>
		</div>
		<div class="flex flex-col gap-2 py-3 h-[calc(100%-3rem)]">
            <button
                class="relative group material-symbols-outlined w-[2.25rem] mx-[.375rem] hover:bg-neutral-700 rounded-md content-center"
            >
                find_in_page
                <span class="transition-all absolute left-12 top-1 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Quick Find/Create
                </span>
            </button>
            <button
                class="relative group material-symbols-outlined w-[2.25rem] mx-[.375rem] hover:bg-neutral-700 rounded-md content-center"
            >
                file_copy
                <span class="transition-all absolute left-12 top-1 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Insert Template
                </span>
            </button>
            <button
                class="group relative material-symbols-outlined w-[2.25rem] mx-[.375rem] hover:bg-neutral-700 rounded-md content-center mt-auto"
            >
                settings
                <span class="transition-all absolute left-12 top-1 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Settings
                </span>
            </button>
		</div>
	</div>
	<div class="h-screen min-w-48 w-64 bg-neutral-800 relative" bind:this={sideTab}>
		<div class="h-12 w-full bg-neutral-700 flex content-center pt-[.425rem] pl-1 gap-1">
			<button
				class="group relative material-symbols-outlined cursor-pointer h-8 w-[2.25rem] hover:bg-neutral-600 rounded-md"
			>
				folder
                <span class="transition-all absolute left-[50%] -translate-x-2/4 top-10 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Files
                </span>
			</button>
			<button
				class="group relative material-symbols-outlined cursor-pointer h-8 w-[2.25rem] hover:bg-neutral-600 rounded-md"
			>
				search
                <span class="transition-all absolute left-[50%] -translate-x-2/4 top-10 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Search
                </span>
			</button>
			<button
				class="group relative material-symbols-outlined cursor-pointer h-8 w-[2.25rem] hover:bg-neutral-600 rounded-md"
			>
				bookmark
                <span class="transition-all absolute left-[50%] -translate-x-2/4 top-10 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default">
                    Bookmarks
                </span>
			</button>
		</div>
		<div
			bind:this={sideTabDragEle}
			class="h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0"
			on:mousedown={sideTabDragStart}
			on:mouseup={sideTabDragStop}
		></div>
	</div>

	<div class="h-screen grow min-w-96">
		<div class="h-12 w-full bg-neutral-700"></div>
	</div>
</div>
