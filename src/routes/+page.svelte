<script>
    import Ribbon from '$lib/ribbon.svelte';
    import SideTab from '$lib/sideTab.svelte';
    import TabPanel from '$lib/tabPanel.svelte';

    /**
	 * @type {SideTab}
	 */
    let sideTab;

    let sideTabDragStop = () => sideTab.sideTabDragStop();
    // @ts-ignore
    let sideTabDrag = (e) => sideTab.sideTabDrag(e);

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
	class="bg-neutral-900 w-screen h-screen flex"
	on:mousemove={sideTabDrag}
	on:mouseup={sideTabDragStop}
>
    <Ribbon/>
    <SideTab bind:this={sideTab}/>
    <TabPanel/>
	
</div>

<div class="hidden hover:bg-neutral-800"></div>