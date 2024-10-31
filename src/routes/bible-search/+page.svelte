<script lang="ts">
  let query = ""; // Input for verse search
  let verseData: any = null; // Holds fetched verse data
  let errorMessage = ""; // Holds error messages
  let isLoading = false; // Loading state for API request
  let showError = false; // State to control error message visibility
  let showLoading = false; // State to control loading message visibility
  let showVerseData = false; // State to control verse data visibility

  // Popular verses example
  const popularVerses = [
    { reference: "John 3:16", text: "For God so loved the world..." },
    { reference: "Philippians 4:13", text: "I can do all things through Christ..." },
    { reference: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want." },
  ];

  async function fetchVerse() {
    if (!query.trim()) {
      errorMessage = "Please enter a valid scripture reference.";
      showError = true;
      return;
    }

    errorMessage = "";
    verseData = null;
    isLoading = true;
    showError = false;
    showLoading = true;
    showVerseData = false;

    try {
      const response = await fetch(
        `https://bible-api.com/${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("Error fetching the verse.");
      }
      verseData = await response.json();
      showVerseData = true;

      query = ""; // Clear the input after search
    } catch (error) {
      errorMessage = "Failed to fetch the verse. Please check your input.";
      showError = true;
      console.error(error);
    } finally {
      isLoading = false;
      showLoading = false;
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      fetchVerse();
    }
  }
</script>

<div class="container mx-auto p-4 max-w-screen-lg">
  <!-- Search Bar Section -->
  <section class="relative w-full mb-4">
    <label for="Search" class="sr-only">Search for...</label>
    <input
      type="text"
      id="Search"
      bind:value={query}
      placeholder="Book, chapter, verse (e.g., John 3:16)"
      class="w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm text-sm dark:border-gray-800 dark:bg-brand dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
      on:keydown={handleKeyDown}
    />
    <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
      <button
        type="button"
        on:click={fetchVerse}
        class="text-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <span class="sr-only">Search</span>
        <i class="fa-solid fa-magnifying-glass text-xl"></i>
      </button>
    </span>
  </section>

  <!-- Instructions and Tips Section -->
  <section class="mb-6">
    <h2 class="text-xl text-brandSecondary font-bold mb-3">Instructions and Tips</h2>
    <p class="text-gray-300 mb-2">
      Enter a scripture reference in the format: <strong>Book Chapter:Verse</strong> (e.g., <em>John 3:16</em>).
    </p>
    <p class="text-gray-300">
      You can also search for popular verses directly from the list below.
    </p>
  </section>

  <!-- Popular Verses Section -->
  <section class="mb-6">
    <h2 class="text-xl text-brandSecondary font-bold mb-3">Popular Verses</h2>
    <ul class="list-disc list-inside text-gray-300">
      {#each popularVerses as verse}
        <li class="mb-2">
          <strong>{verse.reference}:</strong> {verse.text}
        </li>
      {/each}
    </ul>
  </section>

  <!-- Display messages and verse data -->
  {#if showError}
    <p class="text-red-600 text-lg mb-2 fade-in">{errorMessage}</p>
  {/if}

  {#if showLoading}
    <p class="text-gray-700 text-lg mb-2 fade-in">Fetching scripture...</p>
  {/if}

  {#if showVerseData}
    <article class="rounded-xl border border-gray-800 bg-brand p-4 fade-in mb-6">
      <h3 class="text-lg font-bold text-white">{verseData.reference}</h3>
      <div class="mt-4">
        <div class="block rounded-lg border border-gray-800 p-4 hover:border-brandSecondary">
          <strong class="font-medium text-white">{verseData.text}</strong>
          <p class="mt-1 text-xs font-medium text-gray-300">
            Translation: {verseData.translation_name}
          </p>
        </div>
      </div>
    </article>
  {/if}
</div>

<style>
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  /* Responsive adjustments */
  @media (min-width: 640px) {
    .container {
      padding: 2rem; 
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.5rem; 
    }

    p {
      font-size: 1rem;
    }
  }
</style>
