<script context="module">
  import { page } from "$app/stores";
</script>

<script lang="ts">
  import Header from "./header.svelte";
  import "$lib/core/tailwind.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  $: currentPage = $page.url.pathname;
  let showPopup = false;

  function togglePopup(event: MouseEvent) {
    event.stopPropagation();
    showPopup = !showPopup;
  }

  function closePopup() {
    showPopup = false;
  }

  function copyText() {
    const textToCopy = "65BB-GBLQ";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
        closePopup();
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
</script>

<div class="flex flex-col min-h-screen relative">
  <Header />

  {#if currentPage === "/"}
    <div class="homepage-background absolute inset-0 z-0"></div>
  {/if}

  <main class="flex-1 flex flex-col z-10 max-w-full p-4 md:p-8">
    <slot />
  </main>

  {#if showPopup}
    <aside
      class="fixed z-50 flex items-center justify-between gap-2 p-3 rounded-lg shadow-lg bg-brand text-white max-w-[90%] sm:max-w-xs md:max-w-[18rem] lg:max-w-[16rem] bottom-20 transition-transform transform-gpu ease-out duration-300 right-4 md:right-0 md:left-1/2 md:-translate-x-1/2"
      class:translate-y-0={showPopup}
      class:translate-y-full={!showPopup}
    >
      <button
        class="flex-1 text-sm font-medium hover:text-brandSecondary transition duration-200 truncate"
        on:click={copyText}
      >
        65BB-GBLQ
      </button>
      <button
        class="p-1 hover:bg-white/10 rounded"
        on:click={closePopup}
        aria-label="Close popup"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </aside>
  {/if}

  <footer class="bg-brand text-white flex flex-col md:flex-row items-center justify-between border-t border-white border-opacity-10 py-4 md:py-6 px-4 md:px-6 z-10">
    <div class="flex flex-col md:flex-row items-center justify-between w-full">
      <p class="text-center md:text-left mb-4 md:mb-0 text-sm md:text-base">
        &copy; 2024 Faith & Fellowship. All rights reserved.
      </p>
      <div class="flex space-x-6 items-center">
        <button
          class="social-icon text-white hover:text-brandSecondary transition-colors duration-200"
          on:click|preventDefault={togglePopup}
          aria-label="Copy code"
        >
          <svg class="w-8 h-8" viewBox="0 0 79.82 79.98" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.93,70.5c-7.57.02-15.09-1.11-22.32-3.35,17.57,19.26,49.29,16.42,63.15-5.65-12.75,6.77-24.74,8.53-40.83,9.01Z" fill="currentColor" />
            <path d="M33.51,61.8c21.9-.46,35.49-9.04,46.31-25.66C77.54,11.35,52.55-5.5,28.72,1.66,4.8,8.55-7.08,36.26,4.44,58.32c9.47,2.56,19.26,3.73,29.07,3.48ZM33.92,20.21c.08-.07.18-.11.28-.1h9.9c.16.05.34.04.49.13.08.05.15.11.2.18.1.13.2.26.28.4l6.26,11.81,6.21-11.81c.19-.42.48-.67.95-.71h9.9c.11,0,.22.03.3.1.07.06.12.15.12.24-.03.23-.17.44-.36.57-2.74,4.31-9.38,14.75-12.19,19.18v12.78c0,.72-.39,1.08-1.18,1.08h-7.69c-.6.07-1.15-.48-1.08-1.08v-12.82l-12.16-19.13c-.18-.13-.31-.35-.33-.57,0-.09.04-.18.1-.24ZM21.37,53.8c-3.24-.51-6.49-1.9-8.66-4.43-.66-.67-.82-1.95.05-2.51l3.35-2.97c.29-.27.71-.39,1.1-.32.46.18.88.44,1.23.78,1.24,1.09,2.81,1.75,4.41,2.12.26.06.52.1.78.12,1.41-.06,4.32.1,4.44-1.91.02-.36-.08-.73-.29-1.03-1.03-1.12-2.51-1.11-3.94-1.6-3.02-.71-6.14-1.81-8.34-4.09-2.27-2.42-2.79-6.41-1.26-9.35,2.79-4.76,9.2-5.49,14.2-4.79,2.93.46,5.57,2.03,7.7,4.05.25.22.41.53.45.86.01.27-.18.56-.58.86-1.39,1.02-2.54,1.88-3.84,3.04-.68.57-1.7.29-2.23-.35-1.09-1.14-2.73-1.49-4.25-1.52-1.04-.01-2.82.22-2.72,1.59.34,1.82,3.01,1.64,4.38,2.1,3.7,1.12,8.03,2.38,9.87,6.11.56,1.21.83,2.54.79,3.87-.01,8.19-10.03,10.5-16.63,9.36Z" fill="currentColor" />
          </svg>
        </button>
        <a
          href="https://www.instagram.com/417.faith.and.fellowship/"
          target="_blank"
          class="text-white hover:text-brandSecondary transition duration-200 text-3xl"
          aria-label="Visit our Instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</div>
