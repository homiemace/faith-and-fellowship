<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import axios from "axios";
    import "$lib/core/tailwind.css";

    let randomQuote = { text: "", author: "" };
    let isLoading = true;

    onMount(async () => {
        isLoading = true;
        try {
            const response = await axios.get("https://labs.bible.org/api/?passage=votd&type=json");
            const quoteData = response.data[0];
            randomQuote.text = quoteData.text.replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>");
            randomQuote.author = `— ${quoteData.bookname} ${quoteData.chapter}:${quoteData.verse}`;
        } catch (error) {
            console.error("Error fetching the quote:", error);
            randomQuote = {
                text: "For I know the plans I have for you, declares the Lord...",
                author: "— Jeremiah 29:11",
            };
        } finally {
            isLoading = false;
        }
    });
</script>

<div class="homepage-background-wrapper">
    <div class="homepage-background"></div>
</div>

<div class="flex flex-col justify-between w-full relative overflow-x-hidden">
    <div class="flex-1 flex flex-col items-center w-full relative overflow-hidden mt-24 px-4 sm:px-6 lg:px-8">
        <section class="flex flex-col justify-center items-center text-center w-full py-12 md:py-16 lg:py-20 relative z-10">
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 select-none text-white text-shadow-lg">Make Heaven Crowded</h2>
            <p class="text-lg md:text-2xl lg:text-3xl mb-8 select-none text-white text-shadow-lg font-playfair">In faith and fellowship of the Lord</p>

            <div class="mb-12">
                <button
                    class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full btn btn-primary hover-scale bg-brand px-6 sm:px-20 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                    on:click={() => (window.location.href = "/calendar")}
                    aria-label="Go to the Calendar"
                >
                    <div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] select-none group-hover:opacity-0">Go to the Calendar</div>
                    <div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </button>
            </div>

            <section class="py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 text-center relative z-10">
                <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 select-none text-white text-shadow-lg">Daily Inspiration for Your Journey</h3>
                <blockquote class="p-4 sm:p-6 md:p-8 text-white-900 italic text-shadow-lg max-w-xl mx-auto h-full flex flex-col justify-between" style="line-height: 1.8; word-wrap: break-word;">
                    {#if isLoading}
                        <div class="flex justify-center items-center h-full">
                            <span class="loader"></span>
                        </div>
                    {:else}
                        <p in:fade={{ duration: 300 }} class="text-lg md:text-xl lg:text-2xl text-shadow-lg" style="font-family: 'PlayfairDisplay', serif;">
                            {@html randomQuote.text}
                        </p>
                        <footer in:fade={{ duration: 300, delay: 100 }} class="mt-4 text-sm md:text-lg text-shadow-lg" style="font-family: 'PlayfairDisplay', serif;">
                            {randomQuote.author}
                        </footer>
                    {/if}
                </blockquote>
            </section>
        </section>
    </div>
</div>

<style>
    .homepage-background-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
    }

    .homepage-background {
        position: fixed;
        inset: 0;
        transform: scale(1.1);
        background-image: url('/images/faithandfellowshipbackground.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(var(--blur-amount));
        -webkit-filter: blur(var(--blur-amount));
        z-index: -1;
    }

    .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        border-top: 3px solid #fff;
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .text-shadow-lg {
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }
</style>