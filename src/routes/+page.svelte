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
    isLoading = true; // Set loading state
    try {
      const response = await axios.get(
        "https://labs.bible.org/api/?passage=votd&type=json"
      );
      const quoteData = response.data[0];

      // Truncate text if it exceeds the maximum length
      randomQuote.text =
        quoteData.text.length > MAX_LENGTH
          ? quoteData.text.substring(0, MAX_LENGTH) + "..."
          : quoteData.text;

      // If the text includes <b> tags, ensure they're rendered correctly
      randomQuote.text = randomQuote.text.replace(
        /<b>(.*?)<\/b>/g,
        "<strong>$1</strong>"
      );
      randomQuote.author = `— ${quoteData.bookname} ${quoteData.chapter}:${quoteData.verse}`;

      // Add a slight delay before fading in the new quote
      setTimeout(() => {
        quoteClass = "fade-in visible";
      }, 100);
    } catch (error) {
      console.error("Error fetching the quote:", error);
      // Fall back to a static quote in case of an error
      randomQuote = {
        text: "For I know the plans I have for you, declares the Lord...",
        author: "— Jeremiah 29:11",
      };
    } finally {
      isLoading = false; // Reset loading state
    }
  };
</script>

<div class="homepage-background"></div>

<div
  class="flex flex-col justify-center items-center w-full relative overflow-hidden mt-24 px-4"
>
  <section
    class="flex flex-col justify-center items-center text-center w-full py-12 md:py-24 relative z-10"
  >
    <h2
      class="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 select-none text-white text-shadow"
    >
      Join Our Journey
    </h2>

    <p
      class="text-lg md:text-2xl lg:text-4xl mb-6 select-none text-white text-shadow"
    >
      In faith and fellowship of the Lord
    </p>

    <div class="mb-6">
      <button
        class="group relative inline-flex h-12 w-fixed items-center justify-center overflow-hidden rounded-full bg-brandSecondary px-6 font-medium text-neutral-200 duration-500"
        on:click={() => {
          window.location.href = "/announcements";
        }}
      >
        <div
          class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] select-none group-hover:opacity-0"
        >
          Go to Announcements
        </div>
        <div
          class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>

    <section class="py-8 md:py-16 px-4 md:px-6 text-center relative z-10">
      <h3
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 select-none text-white text-shadow"
      >
        Daily Inspiration for Your Journey
      </h3>
      <blockquote
        class="p-6 md:p-8 text-white-900 italic text-shadow max-w-xl mx-auto h-full flex flex-col justify-between"
        style="line-height: 1.6;"
      >
        {#if isLoading}
          <div class="flex justify-center items-center h-full">
            <span class="loader"></span>
          </div>
        {:else}
          <p class={`text-lg md:text-xl lg:text-2xl text-shadow ${quoteClass}`}>
            {@html randomQuote.text}
          </p>
          <footer
            class={`mt-2 text-sm md:text-lg font-semibold text-shadow ${quoteClass}`}
          >
            {randomQuote.author}
          </footer>
        {/if}
      </blockquote>
    </section>
  </section>
</div>

<style>
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff; /* Change this color to match your theme */
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

  .fade-in.visible {
    opacity: 1;
  }

  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
</style>
