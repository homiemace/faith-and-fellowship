<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import AboutCard from "$lib/components/about/about-card.svelte";
    import ParallaxBackground from "$lib/components/about/parallax-background.svelte";

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    const cards = [
        {
            title: "Our Vision",
            content: "Coming Soon",
            image: "/images/faithandfellowshipbackground.webp",
        },
        {
            title: "Our Team",
            content: "Coming Soon",
            image: "/images/faithandfellowshipbackground.webp",
        },
        {
            title: "Join Us",
            content: "Coming Soon",
            image: "/images/faithandfellowshipbackground.webp",
        },
    ];
</script>

<div class="relative w-full min-h-screen">
    <ParallaxBackground />

    <section class="relative py-12 md:py-20 min-h-screen">
        <div class="container mx-auto px-4 md:px-6">
            {#if mounted}
                <div class="max-w-6xl mx-auto">
                    <h2 in:fly={{ y: -50, duration: 1000 }} class="text-4xl md:text-6xl font-extrabold text-gradient mb-8 text-center">About Us</h2>
                    <p in:fade={{ duration: 1000, delay: 300 }} class="text-lg md:text-xl text-white mb-16 max-w-3xl mx-auto text-center leading-relaxed">Welcome to 417 Faith and Fellowship! Our journey began in 2024 with...</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
                        {#each cards as card, index}
                            <AboutCard {...card} {index} />
                        {/each}
                    </div>

                    <div in:fade={{ duration: 1000, delay: 1500 }} class="text-center">
                        <a href="/contact" class="btn btn-primary hover-scale"> Get in Touch </a>
                    </div>
                </div>
            {/if}
        </div>
    </section>
</div>
