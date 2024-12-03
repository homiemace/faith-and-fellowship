<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import "$lib/core/tailwind.css";

    let randomQuote = { text: "", author: "" };
    let isLoading = true;
    let quoteClass = "fade-in";
    const MAX_LENGTH = 150;

    onMount(async () => {
        await getVerse();
    });

    const getVerse = async () => {
        isLoading = true;
        try {
            const response = await axios.get("https://labs.bible.org/api/?passage=votd&type=json");
            const quoteData = response.data[0];

            randomQuote.text = quoteData.text.length > MAX_LENGTH 
                ? quoteData.text.substring(0, MAX_LENGTH) + "..." 
                : quoteData.text;

            randomQuote.text = randomQuote.text.replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>");
            randomQuote.author = `— ${quoteData.bookname} ${quoteData.chapter}:${quoteData.verse}`;

            setTimeout(() => {
                quoteClass = "fade-in visible";
            }, 100);
        } catch (error) {
            console.error("Error fetching the quote:", error);
            randomQuote = {
                text: "For I know the plans I have for you, declares the Lord...",
                author: "— Jeremiah 29:11",
            };
        } finally {
            isLoading = false;
        }
    };
</script>

<div class="homepage-background"></div>

<div class="flex flex-col min-h-[calc(100vh-4rem)] justify-between w-full relative">
    <div class="flex-1 flex flex-col items-center w-full relative overflow-hidden mt-24 px-4">
        <section class="flex flex-col justify-center items-center text-center w-full py-12 md:py-24 relative z-10">
            <h2 class="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 select-none text-white text-shadow-lg">Join Our Journey</h2>

            <p class="text-lg md:text-2xl lg:text-4xl mb-8 select-none text-white text-shadow-lg" style="font-family: 'PlayfairDisplay', serif;">In faith and fellowship of the Lord</p>

            <div class="mb-12">
                <button
                    class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-brand px-8 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    on:click={() => {
                        window.location.href = "/announcements";
                    }}
                >
                    <div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] select-none group-hover:opacity-0">Go to Announcements</div>
                    <div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </button>
            </div>

            <section class="py-8 md:py-16 px-4 md:px-6 text-center relative z-10">
                <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 select-none text-white text-shadow-lg">Daily Inspiration for Your Journey</h3>
                <blockquote class="p-6 md:p-8 text-white-900 italic text-shadow-lg max-w-xl mx-auto h-full flex flex-col justify-between" style="line-height: 1.8;">
                    {#if isLoading}
                        <div class="flex justify-center items-center h-full">
                            <span class="loader"></span>
                        </div>
                    {:else}
                        <p class={`text-lg md:text-xl lg:text-2xl text-shadow-lg ${quoteClass}`} style="font-family: 'PlayfairDisplay', serif;"> 
                          {@html randomQuote.text}
                        </p>
                        <footer class={`mt-4 text-sm md:text-lg text-shadow-lg ${quoteClass}`} style="font-family: 'PlayfairDisplay', serif;">
                            {randomQuote.author}
                        </footer>
                    {/if}
                </blockquote>
            </section>
        </section>
    </div>
</div>

<style>
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
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .fade-in {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .fade-in.visible {
        opacity: 1;
    }

    .text-shadow-lg {
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    :global(.homepage-background) {
        @apply fixed inset-0 scale-110;
        background-image: url('/images/faithandfellowshipbackground.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(var(--blur-amount));
        -webkit-filter: blur(var(--blur-amount));
    }
</style>