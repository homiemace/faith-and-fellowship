<script lang="ts">
    import { fly } from "svelte/transition";

    export let title: string;
    export let content: string;
    export let image: string;
    export let index: number;
</script>

<div in:fly={{ y: 50, duration: 800, delay: 600 + index * 200 }} class="card p-6 md:p-8 h-full flex flex-col hover-scale">
    <img src={image} alt={title} class="rounded-xl mb-6 object-cover h-48 w-full" loading="lazy" />
    <h3 class="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
    <p class="text-gray-300 flex-grow">{content}</p>
</div>
