<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

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
      id: 1,
      date: "10th Oct 2022",
      title: "First Announcement",
      tags: ["Snippet", "JavaScript"],
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      date: "15th Oct 2022",
      title: "Second Announcement",
      tags: ["Update", "Svelte"],
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      date: "20th Oct 2022",
      title: "Third Announcement",
      tags: ["News", "API"],
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      date: "25th Oct 2022",
      title: "Fourth Announcement",
      tags: ["Event", "Community"],
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 5,
      date: "30th Oct 2022",
      title: "Fifth Announcement",
      tags: ["Reminder", "Newsletter"],
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      id: 6,
      date: "5th Nov 2022",
      title: "Sixth Announcement",
      tags: ["Launch", "Features"],
      excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
    },
    {
      id: 7,
      date: "10th Nov 2022",
      title: "Seventh Announcement",
      tags: ["Survey", "Feedback"],
      excerpt: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    },
    {
      id: 8,
      date: "15th Nov 2022",
      title: "Eighth Announcement",
      tags: ["Promotion", "Deals"],
      excerpt: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
    },
    {
      id: 9,
      date: "20th Nov 2022",
      title: "Ninth Announcement",
      tags: ["Holiday", "Events"],
      excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
    },
    {
      id: 10,
      date: "25th Nov 2022",
      title: "Tenth Announcement",
      tags: ["Thanksgiving", "Community"],
      excerpt: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
    },
  ];
</script>

<div class="w-full min-h-screen flex flex-col relative overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    {#each Array(8) as _, index}
      <i
        class="fa-solid fa-cross absolute text-white opacity-20 transition-transform duration-300 ease-in-out hover:scale-110"
        style="animation-delay: {getRandomDelay()}s; font-size: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; filter: blur(2px);"
      ></i>
    {/each}
  </div>

  <div class="container mx-auto px-4 py-16 relative z-10 flex-grow">
    {#if mounted}
      <h1 in:fly="{{ y: -50, duration: 1000, delay: 300 }}" class="text-5xl md:text-7xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand to-brandSecondary">
        Announcements
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each announcements as { id, date, title, tags, excerpt }, index}
          <article
            in:fly="{{ y: 50, duration: 800, delay: 300 + index * 100 }}"
            class="rounded-xl overflow-hidden drop-shadow-lg transition-all select-none duration-300 ease-in-out hover:drop-shadow-xl hover:scale-105 card"
          >
            <div class="p-6 h-full flex flex-col justify-between">
              <div>
                <time
                  datetime={date}
                  class="block text-xs text-gray-500 dark:text-gray-400 mb-2"
                >{date}</time>
                <a href={`/blog/${id}`} class="group">
                  <h3
                    class="text-xl font-semibold text-white group-hover:text-brand transition-colors duration-300 mb-3"
                  >
                    {title}
                  </h3>
                </a>
                <p class="text-gray-300 text-sm mb-4">{excerpt}</p>
              </div>
              <div class="flex flex-wrap gap-2">
                {#each tags as tag}
                  <span
                    class="whitespace-nowrap rounded-full px-2.5 py-1 text-xs bg-brand hover:bg-brandSecondary text-white transition-colors duration-300"
                  >{tag}</span>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
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

  @media (max-width: 640px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 3.5rem;
    }
  }
</style>

