<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let query = "";
    export let isLoading = false;

    const dispatch = createEventDispatcher();

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            dispatch("search");
        }
    }
</script>

<div class="relative w-full">
    <input type="text" bind:value={query} placeholder="Book, chapter, verse (e.g., John 3:16)" class="w-full rounded-full border bg-background/5 backdrop-blur-sm py-4 px-6 text-lg placeholder-white/70 hover:shadow-lg border-gray-100/5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300" on:keydown={handleKeyDown} disabled={isLoading} />
    <button type="button" on:click={() => dispatch("search")} disabled={isLoading} class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-white p-3 hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100">
        <span class="sr-only">Search</span>
        {#if isLoading}
            <i class="fa-solid fa-spinner fa-spin text-xl"></i>
        {:else}
            <i class="fa-solid fa-magnifying-glass text-xl"></i>
        {/if}
    </button>
</div>
