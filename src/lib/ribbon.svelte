<script>
    import {sideTabClosed} from '$lib/store'
    import RibbonButton from './ribbonButton.svelte';

    let isSideTabClosed = false;

    sideTabClosed.subscribe((value) => {
		isSideTabClosed = value;
	});

    function displaySideTab() {
        sideTabClosed.update((n) => !n);
    }
</script>

<div class="h-screen min-w-12 w-12 {isSideTabClosed ? 'bg-neutral-900' : 'bg-neutral-800'} border-r-2 border-neutral-700">
    <div class="h-12 w-full bg-neutral-700 content-center">
        <RibbonButton icon="dock_to_right" tooltip="Hide/Show Sidebar" on:click={displaySideTab}/>
    </div>
    <div class="flex flex-col gap-2 py-3 h-[calc(100%-3rem)]">
        <RibbonButton icon="find_in_page" tooltip="Files"/>
        <div class="mt-auto"></div>
        <RibbonButton icon="terminal" tooltip="Open Command Palette"/>
        <RibbonButton icon="settings" tooltip="Settings"/>
    </div>
</div>