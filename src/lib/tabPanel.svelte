<script>
	import { onMount } from "svelte";
    import TabWindow from "./tabWindow.svelte";

    /**
	 * @type {number}
	 */
    let parentWidth;
    /**
	 * @type {number}
	 */
    let oldParentWidth;

    /**
	 * @type {any[]}
	 */
    let sizes = [];
    onMount(() => {
        sizes = [parentWidth/3, parentWidth/3, parentWidth/3];
        oldParentWidth = structuredClone(parentWidth);
    })

    // $: console.log(sizes);
    setInterval(() => {
        let used = 0;
        for (let i = 0; i<sizes.length; i++) {
            used += sizes[i];
        }
        console.log(parentWidth, used, sizes)
    }, 1000)

    // @ts-ignore
    function move(e) {
        // console.log(e.detail.move);
        sizes[e.detail.id] = sizes[e.detail.id] + e.detail.move;
        sizes[e.detail.id+1] = sizes[e.detail.id+1] - e.detail.move;
        console.log(e.detail.id, sizes[e.detail.id] + e.detail.move, sizes[e.detail.id+1] - e.detail.move)
        if (sizes[e.detail.id] < 192) {
            sizes[e.detail.id] = 192;
        }
        let used = 0;
        for (let i = 0; i<sizes.length-1; i++) {
            used += sizes[i];
        }
        sizes[sizes.length-1] = parentWidth - used;
        if (sizes[sizes.length-1] < 192) {
            sizes[sizes.length-1] = 192;
        }
    }

    $: {
        for (let i = 0; i<sizes.length; i++) {
            sizes[i] = sizes[i]/oldParentWidth*parentWidth
            if (sizes[i] < 192) {
                sizes[i] = 192;
            }
        }
        oldParentWidth=structuredClone(parentWidth);
    }

</script>

<div class="h-screen grow flex flex-row" style="min-width: {sizes.length*192}px;" bind:offsetWidth={parentWidth}>
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