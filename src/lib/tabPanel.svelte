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

    // setInterval(() => {
    //     let used = 0;
    //     for (let i = 0; i<sizes.length; i++) {
    //         used += sizes[i];
    //     }
    //     console.log(parentWidth, used, sizes)
    // }, 1000)

    // @ts-ignore
    function move(e) {

        if (e.detail.move > 0) {
            let rightGoal = -e.detail.move;

            for (let i = e.detail.id+1; i<sizes.length; i++) {
                sizes[i] += rightGoal;
                if (sizes[i] < 192) {
                    rightGoal = sizes[i] - 192
                    sizes[i] = 192;
                } else {
                    rightGoal = 0;
                }
            }

            let leftGoal = e.detail.move + rightGoal;
            sizes[e.detail.id] += leftGoal;
        } else {
            let leftGoal = e.detail.move;

            for (let i = e.detail.id; i>=0; i--) {
                sizes[i] += leftGoal;
                if (sizes[i] < 192) {
                    leftGoal = sizes[i] - 192;
                    sizes[i] = 192;
                } else {
                    leftGoal = 0;
                }
            }
            
            sizes[e.detail.id+1] += -e.detail.move+leftGoal;
        }
    }

    $: {
        for (let i = 0; i<sizes.length; i++) {
            sizes[i] = sizes[i]/oldParentWidth*parentWidth
            // if (sizes[i] < 192) {
            //     sizes[i] = 192;
            // }
        }
        oldParentWidth=structuredClone(parentWidth);
    }

</script>

<div class="h-screen grow flex flex-row" style="min-width: {sizes.length*192}px;" bind:offsetWidth={parentWidth}>
    <TabWindow color="blue" size={sizes[0]} on:move={move} id=0/>
    <TabWindow color="red" size={sizes[1]} on:move={move} id=1/>
    <TabWindow color="red" size={sizes[2]} on:move={move} id=2 last/>
</div>