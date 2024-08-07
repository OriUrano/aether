<script>
    import Ribbon from '$lib/ribbon.svelte';
    import SideTab from '$lib/sideTab.svelte';
    import TabPanel from '$lib/tabPanel.svelte';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
	class="bg-neutral-900 w-screen h-screen flex"
>
    <Ribbon/>
    <SideTab/>
    <TabPanel/>
	
</div>

<div class="hidden hover:bg-neutral-800"></div>