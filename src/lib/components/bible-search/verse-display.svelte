<script lang="ts">
    import type { SearchResult } from "../../types/bible";
    import { fly, fade } from "svelte/transition";

    export let verseData: SearchResult;
    let isCopied = false;

    function copyToClipboard() {
        navigator.clipboard.writeText(verseData.text).then(() => {
            isCopied = true;
            setTimeout(() => {
                isCopied = false;
            }, 2000);
        });
    }
</script>

<article class="rounded-lg border border-brand p-6 mb-8 bg-background relative" in:fly={{ y: 20, duration: 300, opacity: 0 }} out:fade>
    <h3 class="text-3xl font-bold mb-4 text-brand flex items-center justify-between">
        <span>{verseData.reference}</span>
        <div class="relative group">
            <button
                on:click={copyToClipboard}
                class="ml-2 duration-200 text-light hover:text-brand"
                aria-label="Copy verse to clipboard"
            >
                <i class="fa-solid fa-copy w-4 h-4"></i>
            </button>
            {#if isCopied}
                <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 border border-gray-100/5 bg-background text-light text-sm py-1 px-2 rounded-sm shadow-lg animate-fade-up">
                    Copied!
                </div>
            {/if}
        </div>
    </h3>
    <div class="text-xl mb-4 leading-relaxed prose prose-invert text-white/80 font-playfair">
        {verseData.text}
    </div>
    <p class="text-sm text-gray-300">
        Translation: {verseData.translation_name}
    </p>
</article>

<style>
    button {
        display: inline-flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        padding: 2px;
    }

    .absolute {
        pointer-events: none;
        z-index: 50;
        opacity: 0;
        transform: translate(-50%, 0.5rem);
        transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    }

    .animate-fade-up {
        opacity: 1;
        transform: translate(-50%, 0);
    }
</style>