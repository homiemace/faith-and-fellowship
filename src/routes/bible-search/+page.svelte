<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { popularVerses } from "$lib/data/popular-verses";
    import type { SearchResult } from "$lib/types/bible";
    import SearchBar from "$lib/components/bible-search/search-bar.svelte";
    import PopularVerseCard from "$lib/components/bible-search/popular-verse-card.svelte";
    import VerseDisplay from "$lib/components/bible-search/verse-display.svelte";
    import ParallaxBackground from "$lib/components/about/parallax-background.svelte";

    let query: string = "";
    let verseData: SearchResult | null = null;
    let errorMessage: string = "";
    let isLoading: boolean = false;
    let showError: boolean = false;
    let showVerseData: boolean = false;
    let mounted: boolean = false;

    onMount(() => {
        mounted = true;
    });

    async function handleSearch() {
        if (!query.trim()) {
            errorMessage = "Please enter a valid scripture reference.";
            showError = true;
            return;
        }

        errorMessage = "";
        verseData = null;
        isLoading = true;
        showError = false;
        showVerseData = false;

        try {
            const response = await fetch(`https://bible-api.com/${encodeURIComponent(query)}?translation=oeb-us`);
            if (!response.ok) throw new Error("Error fetching the verse.");

            verseData = await response.json();
            showVerseData = true;
        } catch (error) {
            errorMessage = "Failed to fetch the verse. Please check your input.";
            showError = true;
            console.error(error);
        } finally {
            isLoading = false;
        }
    }

    function setQuery(verse: string) {
        query = verse;
        handleSearch();
    }
</script>

<ParallaxBackground />

<div class="flex-1 flex flex-col">
    <div class="container mx-auto px-4 py-12 md:py-24 max-w-4xl flex-1">
        {#if mounted}
            <h1 in:fly={{ y: -50, duration: 500 }} class="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-linear-to-r from-brand to-brand-secondary">Bible Verse Search</h1>

            <!-- Search Section -->
            <section in:fly={{ y: 50, duration: 500 }} class="mb-12">
                <SearchBar bind:query {isLoading} on:search={handleSearch} />
            </section>

            <!-- Instructions Section -->
            <section in:fly={{ y: 50, duration: 500 }} class="mb-12 bg-background/5 border border-gray-100/5 backdrop-blur-xs rounded-lg p-6">
                <h2 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-brand to-brand-secondary">Instructions and Tips</h2>
                <p class="text-lg mb-2 text-white/90">
                    Enter a scripture reference in the format: <strong>Book Chapter:Verse</strong>
                </p>
                <p class="text-lg text-white/90">You can also click on any popular verse below to search for it directly.</p>
            </section>

            <!-- Popular Verses Section -->
            <section in:fly={{ y: 50, duration: 500 }} class="mb-12">
                <h2 class="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-brand to-brandSecondary">Popular Verses</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {#each popularVerses as verse, i}
                        <PopularVerseCard {verse} index={i} on:click={() => setQuery(verse.reference)} />
                    {/each}
                </div>
            </section>

            <!-- Messages and Results -->
            {#if showError}
                <p class="text-red-300 text-lg mb-4 p-4 bg-red-900/50 rounded-lg flex items-center gap-2" in:fly={{ y: 20, duration: 300 }} out:fade aria-live="polite">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {errorMessage}
                </p>
            {/if}

            {#if isLoading}
                <div class="flex items-center justify-center mb-4" in:fade={{ duration: 300 }} out:fade aria-live="polite">
                    <l-hourglass size="40" bg-opacity="0.1" speed="1.75" color="white"></l-hourglass>
                </div>
            {/if}

            {#if showVerseData && verseData}
                <VerseDisplay {verseData} />
            {/if}
        {/if}
    </div>
</div>