<script>
    import TabWindow from "./tabWindow.svelte";
    /**
	 * @type {any[]}
	 */
    let s;
    import {l} from '$lib/store'
    l.subscribe((value) => {
        s = value;
    });
</script>

<div class="h-screen grow min-w-96 flex flex-row">
    <TabWindow color="blue" width="{s[0]}"/>
    <!-- <div class="h-screen w-64 bg-white"></div> -->
    <TabWindow color="red" width="{s[1]}"/>
    <TabWindow color="green" width="{s[2]}"/>


    <!-- <div> 
        <div class="h-12 w-full bg-neutral-700"></div>
        <div class="h-10 w-full bg-transparent"></div>
        <div>
            <div class="px-8 m-auto max-w-3xl select-text">
                <h1 class="text-3xl font-bold">Title</h1>
            </div>
        </div>
    </div> -->
</div>