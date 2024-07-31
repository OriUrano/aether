<script>
	export let icon;
	export let tooltip;
</script>

<button
	class="group relative material-symbols-outlined cursor-pointer h-8 w-[2.25rem] hover:bg-neutral-600 rounded-md"
>
	{icon}
	<span
		class="transition-all absolute left-[50%] -translate-x-2/4 top-10 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default"
	>
		{tooltip}
	</span>
</button>
