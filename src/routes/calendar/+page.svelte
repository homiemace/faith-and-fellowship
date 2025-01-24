<script lang="ts">
    // Date formatting
    import { format } from "date-fns";

    // Svelte
    import { fly } from "svelte/transition";

    // Events data and type
    import events from "$lib/data/events.json"; // Import the events data
    import type { Event } from "$lib/data/events"; // Import the Event type

    // Parse the date strings into Date objects
    const parsedEvents: Event[] = events.map(event => ({
        ...event,
        date: new Date(event.date) // Convert date string to Date object
    }));

    let searchQuery: string = "";
    let selectedCategory: string = "All";
    const categories: string[] = [
        "All",
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Declare filteredEvents with a type annotation
    let filteredEvents: Event[];

    // Reactive statement to update filteredEvents
    $: filteredEvents = parsedEvents.filter((event) => {
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Random positioning for decorative crosses
    function getRandomDelay(): number {
        return Math.random() * 8;
    }

    function getRandomSize(): number {
        return Math.random() * 40 + 30;
    }

    function getRandomTop(): number {
        return Math.random() * 80;
    }

    function getRandomLeft(): number {
        return Math.random() * 80;
    }
</script>

<main class="p-6">
    <!-- Decorative crosses in the background -->
    <div class="absolute inset-0 overflow-hidden">
        {#each Array(8) as _, index}
            <i class="fa-solid fa-cross absolute text-white opacity-20 transition-transform duration-300 ease-in-out hover:scale-110" style="animation-delay: {getRandomDelay()}s; font-size: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; filter: blur(2px);"></i>
        {/each}
    </div>

    <!-- Main content -->
    <div class="max-w-6xl mx-auto space-y-8" in:fly={{ y: -50, duration: 500, delay: 300 }}>
        <!-- Page title -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-gradient mb-4 leading-tight sm:leading-tight lg:leading-relaxed lg:text-6xl tracking-tight overflow-hidden">
            Upcoming Events
        </h1>

        <!-- Search and filter section -->
        <div class="flex flex-col md:flex-row gap-4">
            <!-- Search input -->
            <div class="flex-1">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                    </div>
                    <input
                        type="text"
                        placeholder="Search events by title or location..."
                        bind:value={searchQuery}
                        class="w-full pl-12 pr-4 py-3 rounded-full bg-background placeholder-white/70 hover:shadow-lg border border-gray-100/5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                        aria-label="Search events"
                    />
                </div>
            </div>

            <!-- Category filter dropdown -->
            <div class="relative flex-1">
                <select
                    bind:value={selectedCategory}
                    class="w-full pl-4 pr-10 py-3 rounded-full bg-background placeholder-white/70 hover:shadow-lg border border-gray-100/5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 appearance-none"
                    aria-label="Filter by month"
                >
                    {#each categories as category}
                        <option value={category}>{category}</option>
                    {/each}
                </select>
                <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <i class="fa-solid fa-chevron-down text-gray-400"></i>
                </div>
            </div>
        </div>

        <!-- Event cards grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredEvents as event (event.id)}
                <div class="group card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <!-- Event image -->
                    <div class="relative overflow-hidden">
                        <img src={event.image} alt={event.title} class="w-full h-48 object-cover rounded-xl" />
                        <!-- Event category badge -->
                        <div class="absolute top-4 left-4">
                            <span class="px-3 py-1 btn-primary text-white rounded-full text-sm backdrop-blur-sm">
                                {event.category} <!-- Display the category -->
                            </span>
                        </div>
                    </div>

                    <!-- Event details -->
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-3 text-white group-hover:text-brand transition-colors">
                            {event.title}
                        </h2>
                        <div class="space-y-2 text-light text-md">
                            <!-- Event date and time -->
                            <div class="flex items-center">
                                <i class="fa-solid fa-calendar mr-2"></i>
                                <span>{format(event.date, "MMM dd, yyyy")} at {event.time}</span>
                            </div>
                            <!-- Event location -->
                            <div class="flex items-center">
                                <i class="fa-solid fa-location-dot mr-2"></i>
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>