<script>
    import "../app.css";
    import Loading from "$lib/loading.svelte";

    import { onMount } from 'svelte';

	onMount(() => {
        setInterval(() => {
            loading = false;
        }, 1000)
	});

    let loading = true;
</script>

{#if loading}
    <Loading/> 
{/if}

<slot/>