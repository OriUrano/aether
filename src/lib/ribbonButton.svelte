<script>
    import { createEventDispatcher } from "svelte";
    import {sideTabClosed} from '$lib/store'

    let isSideTabClosed = false;

    sideTabClosed.subscribe((value) => {
		isSideTabClosed = value;
	});

    const dispatch = createEventDispatcher();

    function click() {
        dispatch('click');
    }

    export let icon;
    export let tooltip;
</script>

<button
    class="relative group material-symbols-outlined cursor-pointer w-[2.25rem] mx-[.375rem] hover:bg-neutral-{icon === 'dock_to_right' ? '600' : (isSideTabClosed ? '800' : '700')} rounded-md"
    on:click={click}
>
    {icon}
    <span class="transition-all absolute left-12 top-1 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default text-white">
        {tooltip}
    </span>
</button>