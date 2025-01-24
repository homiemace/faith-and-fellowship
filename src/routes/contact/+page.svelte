<script lang="ts">
    import ContactCard from "$lib/components/contact/contact-card.svelte";
    import { team } from "$lib/data/team";

    // Precompute delays for all team members
    const delays = team.map(() => Math.random() * 8);

    // Helper functions for random values
    function getRandomDelay(): number {
        return Math.random() * 8;
    }

    function getRandomSize(): number {
        return Math.random() * 40 + 30;
    }

    function getRandomTop(): number {
        return Math.random() * 80;
    }

    function getRandomLeft(): number {
        return Math.random() * 80;
    }
</script>

<main class="bg-background py-12 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 overflow-hidden">
        {#each Array(8) as _, index}
            <i
                class="fa-solid fa-cross absolute text-white opacity-20 transition-transform duration-300 ease-in-out hover:scale-110"
                style="animation-delay: {getRandomDelay()}s; font-size: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; filter: blur(2px);"
                aria-hidden="true"
            ></i>
        {/each}
    </div>

    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-gradient mb-8 tracking-tight" aria-label="Contact Us">
                Contact Us
            </h1>
            <p class="text-lg md:text-xl text-white mb-16 max-w-3xl mx-auto text-center leading-relaxed">Reach out to our amazing team!</p>
        </div>

        <h2 class="sr-only">Our Team</h2> 
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {#each team as member, index}
                <ContactCard {member} delay={delays[index]} />
            {/each}
        </div>
    </div>
</main>

<style>
    .fa-cross {
        animation: float 6s ease-in-out infinite;
        will-change: transform; 
    }

    @keyframes float {
        0%, 100% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
    }
</style>