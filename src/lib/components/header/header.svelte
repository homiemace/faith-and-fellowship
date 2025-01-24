<script lang="ts">
    // Svelte
    import { onMount } from "svelte";

    interface NavLink {
        name: string;
        href: string;
    }

    let navLinks: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Calendar", href: "/calendar" },
        { name: "Verse Search", href: "/bible-search" },
        { name: "Contact", href: "/contact" },
    ];

    let showMenu: boolean = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }

    onMount(() => {
        const closeMenu = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest(".dropdown")) {
                showMenu = false;
            }
        };

        document.addEventListener("click", closeMenu);
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    });
</script>

<div class="relative z-20 dropdown">
    <header class="flex justify-between items-center p-6 bg-background text-white border-b border-gray-100/5">
        <a href="/" class="text-base font-bold text-white hover:text-brand transition duration-200">417 Faith & Fellowship</a>
        <div class="flex items-center space-x-4">
            <nav class="hidden md:flex space-x-4">
                {#each navLinks as link}
                    <a href={link.href} class="text-white hover:text-brand transition duration-200 text-base relative py-2 px-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        {link.name}
                    </a>
                {/each}
            </nav>

            <button class="md:hidden focus:outline-none group" on:click|preventDefault={toggleMenu} aria-label="Toggle Menu" aria-expanded={showMenu}>
                <i class="fas fa-cross text-white text-3xl transition-all duration-300 ease-in-out group-hover:text-white"></i>
            </button>
        </div>
    </header>

    <div class="absolute top-full right-0 bg-background rounded-b-lg z-30 w-full md:w-64 overflow-hidden transition-all duration-300 ease-in-out" style="max-height: {showMenu ? '1000px' : '0'}; opacity: {showMenu ? '1' : '0'};">
        <div class="flex flex-col py-2 transform transition-transform duration-300 ease-in-out" style="transform: translateY({showMenu ? '0' : '-100%'});">
            {#each navLinks as link}
                <a href={link.href} class="text-white hover:text-brand p-3 text-center text-base transition duration-200 animate-fade-in animate-slide-down">
                    {link.name}
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    /* Hide scrollbar in dropdown */
    .dropdown :global(.overflow-y-auto) {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .dropdown :global(.overflow-y-auto::-webkit-scrollbar) {
        display: none;
    }

    :global(.fa-cross) {
        color: white;
        transition:
            filter 0.3s ease,
            color 0.3s ease;
    }

    @keyframes wrap-glow {
        0% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
        }
        50% {
            filter: drop-shadow(0 0 9px rgba(255, 255, 255, 1)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
        }
        100% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
        }
    }

    :global(.group:hover .fa-cross) {
        filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
        animation: wrap-glow 1.5s infinite;
        color: white; /* Keeps the glow color consistent */
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0);
        }
    }

    .dropdown :global(.animate-fade-in) {
        animation: fadeIn 0.3s ease-out;
    }

    .dropdown :global(.animate-slide-down) {
        animation: slideDown 0.3s ease-out;
    }
</style>