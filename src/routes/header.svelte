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
      class="flex justify-end items-center p-6 bg-background text-white border-b border-gray-100/5 select-none"
      style="font-family: 'Muli', sans-serif;"
    >
      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex space-x-4">
          {#each navLinks as link}
            <a
              href={link.href}
              class="text-white hover:text-brand transition duration-200"
              >{link.name}</a
            >
          {/each}
        </nav>
  
        <button
          class="hamburger md:hidden"
          on:click|preventDefault={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i
            class={`fas fa-cross text-white text-3xl glow-effect ${showMenu ? "active" : ""}`}
            style="filter: {showMenu ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))' : 'none'};"
          ></i>
        </button>
      </div>
    </header>
  
    <div
      class={`absolute top-full right-0 bg-background z-30 transition-all duration-200 ease-in-out ${showMenu ? "max-h-60 opacity-100 overflow-y-auto pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
      style="width: auto; border-bottom-left-radius: 8px;"
    >
      <div class="flex flex-col">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-white hover:text-brand p-2 text-center"
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