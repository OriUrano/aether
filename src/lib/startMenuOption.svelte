<script>
    export let title = "";
    export let description = "";
    export let button = "";
    export let highlight = "";

    async function getDir() {
        // @ts-ignore
        const dirHandle = await window.showDirectoryPicker();

    // run code for dirHandle
    }

</script>

<div class="flex border-b-2 pb-2 w-96 justify-between border-gray-400">
    <div>
        <h1 class="text-sm">{title}</h1>
        <h2 class="text-xs text-gray-400">{description}</h2>
    </div>
    <button class='rounded-md text-sm h-7 w-24 {highlight ? "bg-pink-600 hover:bg-pink-500" : "bg-gray-600 hover:bg-gray-500"}' on:click={getDir}>{button}</button>    
</div>