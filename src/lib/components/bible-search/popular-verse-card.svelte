<script lang="ts">
    import type { PopularVerse } from "../../types/bible";
    import { scale } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

    export let verse: PopularVerse;
    export let index: number;
</script>

<button on:click class="p-4 card backdrop-blur-xs rounded-lg transition-all duration-300 text-left transform hover:scale-105 group" in:scale={{ delay: 1500 + index * 100, duration: 500, easing: elasticOut }}>
    <strong class="block mb-2 text-brand group-hover:color-text-secondary transition-colors duration-300">
        {verse.reference}
    </strong>
    <span class="text-sm text-white/80" style="font-family: 'PlayfairDisplay', serif;">
        {verse.text}
    </span>
</button>
