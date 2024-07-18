<script>
    import StartMenuOption from "$lib/startMenuOption.svelte";
</script>

<div class="grid h-screen place-items-center bg-gray-800">
    <div class="bg-gray-900 flex flex-col items-center p-8">
        <img src="favicon.png" alt="" class="w-32 h-32 mb-3">
        <h1 class="text-5xl font-rubik font-black italic mb-8">Knowledge</h1>
        <div class="flex flex-col gap-4">
            <StartMenuOption title="Create new Map" description="Create a new Umbra Map under a folder." button="Create" highlight="True"/>
            <StartMenuOption title="Open folder as Map" description="Choose an existing folder of Markdown files." button="Open"/>
            <StartMenuOption title="Proceed with a temporary Map" description="All files will be lost upon exiting." button="Proceed"/>
        </div>
    </div>
</div>