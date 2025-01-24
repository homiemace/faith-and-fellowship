<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import AboutCard from "$lib/components/about/about-card.svelte";
    import ParallaxBackground from "$lib/components/about/parallax-background.svelte";

    interface Card {
        title: string;
        content: string;
        image: string;
    }

    const cards: Card[] = [
        {
            title: "Our Vision",
            content: "We aim to create a welcoming space for teens to connect, have fun, and explore a meaningful relationship with Christ.",
            image: "/images/event1.webp",
        },
        {
            title: "Our Team",
            content: "Run by passionate teens, our team creates events that are engaging, impactful, and purposeful.",
            image: "/images/teamphoto.webp",
        },
        {
            title: "Join Us",
            content: "Join us! Our monthly events welcome all teens seeking connection and growth—whether you're exploring faith or just looking for a place to belong.",
            image: "/images/faithandfellowshipbackground.webp",
        },
    ];
</script>

<!-- Preload critical resources -->
<svelte:head>
    <link rel="preload" href="/images/event1.webp" as="image" />
    <link rel="preload" href="/images/teamphoto.webp" as="image" />
    <link rel="preload" href="/images/faithandfellowshipbackground.webp" as="image" />
</svelte:head>

<div class="relative w-full">
    <ParallaxBackground />

    <section class="relative py-12 md:py-20">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-6xl mx-auto">
                <h2 in:fly={{ y: -50, duration: 500, delay: 200 }} class="text-4xl md:text-6xl font-bold text-gradient mb-8 text-center will-change-transform">
                    About Us
                </h2>
                <p in:fade={{ duration: 500, delay: 200 }} class="text-lg md:text-xl text-white mb-16 max-w-3xl mx-auto text-center leading-relaxed will-change-opacity">
                    Make Heaven Crowded
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16" style="grid-auto-rows: minmax(300px, auto);">
                    {#each cards as card, index}
                        <div>
                            <AboutCard {...card} />
                        </div>
                    {/each}
                </div>

                <div in:fade={{ duration: 200, delay: 200 }} class="text-center will-change-opacity">
                    <a href="/contact" class="btn btn-primary hover-scale" aria-label="Get in Touch">Get in Touch</a>
                </div>
            </div>
        </div>
    </section>
</div>