<script lang="ts">
    import ContactCard from "$lib/components/contact/contact-card.svelte";
    import { team } from "$lib/data/team";

    function getRandomDelay() {
        return Math.random() * 8;
    }

    function getRandomSize() {
        return Math.random() * 40 + 30;
    }

    function getRandomTop() {
        return Math.random() * 80;
    }

    function getRandomLeft() {
        return Math.random() * 80;
    }
</script>

<main class="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 overflow-hidden">
        {#each Array(8) as _, index}
            <i class="fa-solid fa-cross absolute text-white opacity-20 transition-transform duration-300 ease-in-out hover:scale-110" style="animation-delay: {getRandomDelay()}s; font-size: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; filter: blur(2px);"></i>
        {/each}
    </div>

    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-4xl sm:text-5xl md:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brandSecondary mb-4 tracking-tight">Contact Us</h1>
            <p class="text-2xl text-light max-w-2xl mx-auto">Reach out to our amazing team!</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {#each team as member, i}
                <ContactCard {member} delay={Math.min(i * 100, 500)} />
            {/each}
        </div>
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        @apply bg-background;
    }

    @media (max-width: 640px) {
        :global(body) {
            font-size: 14px;
        }
    }

    i.fa-cross {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }
</style>
