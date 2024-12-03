<script lang="ts">
    import type { SearchResult } from '../../types/bible';
    import { fly, fade } from 'svelte/transition';
  
    export let verseData: SearchResult;
  </script>
  
  <article
    class="rounded-lg border border-brand p-6 mb-8 bg-background"
    in:fly={{ y: 20, duration: 500, opacity: 0 }}
    out:fade
  >
    <h3 class="text-3xl font-bold mb-4 text-brand hover:text-brandSecondary transition-colors duration-300">
      {verseData.reference}
    </h3>
    <div class="text-xl mb-4 leading-relaxed prose prose-invert" style="font-family: 'PlayfairDisplay', serif;">
      {verseData.text}
    </div>
    <p class="text-sm text-gray-300">
      Translation: {verseData.translation_name}
    </p>
  </article>