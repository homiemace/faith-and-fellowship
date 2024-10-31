<script lang="ts">
  import { onMount } from "svelte";

  let navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Announcements", href: "/announcements" },
    { name: "Verse Search", href: "/bible-search" },
    { name: "Contact", href: "/contact" },
  ];

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  onMount(() => {
    function closeMenu(event: MouseEvent) {
      const target = event.target as Element;
      if (!target.closest(".dropdown")) {
        showMenu = false;
      }
    }

    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  });
</script>

<div class="relative z-20 dropdown">
  <header
    class="flex justify-end items-center p-6 bg-brand text-white select-none font-sans shadow-md md:shadow-lg"
    style="font-family: 'Muli', sans-serif;"
  >
    <div class="flex items-center space-x-4">
      <nav class="hidden md:flex space-x-4">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-white hover:text-brandSecondary transition duration-200"
            >{link.name}</a
          >
        {/each}
      </nav>

      <button
        class="hamburger md:hidden"
        on:click|preventDefault={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          fill="#ffffff"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 81 117"
          class={`glow-effect ${showMenu ? "active" : ""}`}
          style="filter: ${showMenu
            ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))'
            : 'none'};"
        >
          <polygon
            points="81 27 54 27 54 0 27 0 27 27 0 27 0 54 27 54 27 117 54 117 54 54 81 54 81 27"
          />
        </svg>
      </button>
    </div>
  </header>

  <div
    class={`absolute top-full right-0 bg-brand shadow-lg z-30 transition-all duration-500 ease-in-out ${showMenu ? "max-h-60 opacity-100 overflow-y-auto pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
    style="width: auto; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;"
  >
    <div class="flex flex-col">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-white hover:text-brandSecondary transition duration-200 p-2 text-center"
          >{link.name}</a
        >
      {/each}
    </div>
  </div>
</div>

<style>
  .glow-effect {
    transition: filter 0.3s ease;
  }

  .glow-effect.active {
    filter: drop-shadow(0 0 5px #ffffff69) drop-shadow(0 0 5px #ffffff6b);
  }

  /* Hide scrollbar in dropdown */
  .dropdown .overflow-y-auto {
    scrollbar-width: none;
  }

  .dropdown .overflow-y-auto::-webkit-scrollbar {
    display: none;
  }

  /* Transition for dropdown */
  .transition-all {
    transition:
      max-height 0.5s ease,
      opacity 0.5s ease;
  }

  a {
    padding: 8px 12px;
    position: relative;
    display: inline-block;
  }

  a:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #7a288a;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  a:hover:before {
    transform: scaleX(1);
    width: 100%;
  }
</style>