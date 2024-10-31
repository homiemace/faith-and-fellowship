<script lang="ts">
  function getRandomDelay() {
    return Math.random() * 3;
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

  // Array of announcements
  const announcements = [
    {
      date: "10th Oct 2022",
      title: "First Announcement",
      tags: ["Snippet", "JavaScript"],
    },
    {
      date: "15th Oct 2022",
      title: "Second Announcement",
      tags: ["Update", "Svelte"],
    },
    {
      date: "20th Oct 2022",
      title: "Third Announcement",
      tags: ["News", "API"],
    },
    {
      date: "25th Oct 2022",
      title: "Fourth Announcement",
      tags: ["Event", "Community"],
    },
    {
      date: "30th Oct 2022",
      title: "Fifth Announcement",
      tags: ["Reminder", "Newsletter"],
    },
    {
      date: "5th Nov 2022",
      title: "Sixth Announcement",
      tags: ["Launch", "Features"],
    },
    {
      date: "10th Nov 2022",
      title: "Seventh Announcement",
      tags: ["Survey", "Feedback"],
    },
    {
      date: "15th Nov 2022",
      title: "Eighth Announcement",
      tags: ["Promotion", "Deals"],
    },
    {
      date: "20th Nov 2022",
      title: "Ninth Announcement",
      tags: ["Holiday", "Events"],
    },
    {
      date: "25th Nov 2022",
      title: "Tenth Announcement",
      tags: ["Thanksgiving", "Community"],
    },
  ];
</script>

<div
  class="w-full min-h-screen flex flex-col relative overflow-hidden bg-gray-900"
>
  <div class="absolute inset-0 overflow-hidden">
    {#each Array(8) as _, index}
      <svg
        class="cross absolute transition-transform duration-300 ease-in-out hover:scale-110"
        style="animation-delay: {getRandomDelay()}s; width: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; max-width: none; max-height: none; filter: blur(4px); opacity: 0.4;"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 81 117"
        data-index={index}
      >
        <polygon
          fill="#fff"
          points="81 27 54 27 54 0 27 0 27 27 0 27 0 54 27 54 27 117 54 117 54 54 81 54 81 27"
        />
      </svg>
    {/each}
  </div>

  <div class="container mx-auto px-4 py-8 relative z-10 flex-grow">
    <h1 class="text-white text-3xl font-bold select-none text-center mb-8 pt-16">
      Announcements
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each announcements as { date, title, tags }, index}
        <!-- Update to use announcement objects -->
        <article
          class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition-all select-none duration-300 ease-in-out hover:shadow-md hover:scale-105"
        >
          <div
            class="rounded-lg bg-white p-4 h-full flex flex-col justify-between dark:bg-gray-900"
          >
            <time
              datetime={date}
              class="block text-xs text-gray-500 dark:text-gray-400"
              >{date}</time
            >
            <a href="/">
              <h3
                class="mt-1 text-lg font-medium text-gray-900 dark:text-white"
              >
                {title}
              </h3>
            </a>
            <div class="mt-2 flex flex-wrap gap-1">
              {#each tags as tag}
                <span
                  class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-brand dark:bg-brand dark:text-purple-100"
                  >{tag}</span
                >
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>

<style>
  .cross {
    animation: none;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 3rem;
    }
  }
</style>
