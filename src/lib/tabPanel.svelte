<script>
	import { onMount } from "svelte";
    import TabWindow from "./tabWindow.svelte";

    /**
	 * @type {number}
	 */
    let parentWidth;

    /**
	 * @type {any[]}
	 */
    let sizes = [];
    onMount(() => {
        sizes = [parentWidth/3, parentWidth/3, parentWidth/3];
    })
    $: console.log(sizes);
    setInterval(() => {
        console.log(sizes);
    }, 1000)

    // @ts-ignore
    function move(e) {
        console.log(e.detail.move);
        sizes[e.detail.id] = sizes[e.detail.id] + e.detail.move;
    }
</script>

<div class="h-screen grow min-w-96 flex flex-row" bind:offsetWidth={parentWidth}>
    <TabWindow color="blue" size={sizes[0]} on:move={move} id=0/>
    <TabWindow color="red" size={sizes[1]} on:move={move} id=1/>
    <TabWindow color="green" size={sizes[2]} on:move={move} id=2 last/>
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