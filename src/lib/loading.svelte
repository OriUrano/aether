<script>
    import { fade } from 'svelte/transition'
</script>

<div class="grid h-screen place-items-center bg-neutral-900 absolute z-50 w-screen" out:fade={{ duration: 1000}}>
    <div class="flex flex-col items-center p-8 noselect">
        <span class="text-9xl mb-4">✨</span>
        <h1 class="text-6xl font-rubik font-black italic flex">
            <h1 class="absolute text-transparent stroke">
                Aether
            </h1>
            <span class="text-sky-400 z-10">A</span>
            <span class="text-pink-300 z-10">e</span>
            <span class="text-yellow-300 z-10">t</span>
            <span class="text-sky-400 z-10">h</span>
            <span class="text-pink-300 z-10">e</span>
            <span class="text-yellow-300 z-10">r</span>
        </h1>
    </div>
</div>