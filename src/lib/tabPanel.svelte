<script>
    import TabWindow from "./tabWindow.svelte";

    /**
	 * @type {number}
	 */
    let parentWidth;
</script>

<div class="h-screen grow min-w-96 flex flex-row" bind:offsetWidth={parentWidth}>
    <TabWindow color="blue" {parentWidth}/>
    <TabWindow color="red" {parentWidth}/>
    <TabWindow color="green" {parentWidth} last/>
    <!-- <div class="h-screen w-64 bg-white"></div> -->
    <!-- <TabWindow color="red"/>
    <TabWindow color="green"/> -->


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