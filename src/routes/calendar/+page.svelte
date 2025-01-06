<script>
    import { format } from "date-fns";
    import { fly } from "svelte/transition";

    let events = [
        {
            id: 1,
            title: "Faith & Fellowship",
            date: new Date("2024-12-17"),
            time: "7:00 PM",
            location: "Schweitzer Church",
            category: "Fellowship",
            image: "_",
        },
        {
            id: 2,
            title: "Design Workshop",
            date: new Date("2024-06-20"),
            time: "2:00 PM",
            location: "Creative Hub",
            category: "Fellowship",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
        },
        {
            id: 3,
            title: "Startup Networking",
            date: new Date("2024-06-25"),
            time: "6:30 PM",
            location: "Innovation Center",
            category: "Networking",
            image: "https://images.unsplash.com/photo-1511795409834-432f7b1728f2?auto=format&fit=crop&q=80&w=1000",
        },
    ];

    let searchQuery = "";
    let selectedCategory = "All";
    const categories = ["All", "Fellowship", "Design", "Networking"];

    $: filteredEvents = events.filter((event) => {
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    function getRandomDelay() {
        return Math.random() * 8;
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
</script>

<main class="min-h-screen p-6">
    <div class="absolute inset-0 overflow-hidden">
        {#each Array(8) as _, index}
            <i class="fa-solid fa-cross absolute text-white opacity-20 transition-transform duration-300 ease-in-out hover:scale-110" style="animation-delay: {getRandomDelay()}s; font-size: {getRandomSize()}px; top: {getRandomTop()}%; left: {getRandomLeft()}%; filter: blur(2px);"></i>
        {/each}
    </div>
    <div class="max-w-6xl mx-auto space-y-8" in:fly={{ y: -50, duration: 1000, delay: 300 }}>
        <h1 class="text-4xl sm:text-5xl md:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brandSecondary mb-4 leading-tight sm:leading-tight lg:leading-relaxed lg:text-6xl tracking-tight overflow-hidden">Upcoming Events</h1>

        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                    </div>
                    <input type="text" placeholder="Search events by title or location..." bind:value={searchQuery} class="w-full pl-12 pr-4 py-3 rounded-full bg-background placeholder-white/70 hover:shadow-lg border border-gray-100/5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300" />
                </div>
            </div>
            <div class="flex gap-2 flex-wrap">
                {#each categories as category}
                    <button class="px-4 py-3 rounded-xl card transition-all duration-200 {selectedCategory === category}" on:click={() => (selectedCategory = category)}>
                        {category}
                    </button>
                {/each}
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredEvents as event (event.id)}
                <div class="group card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div class="relative overflow-hidden">
                        <img src={event.image} alt={event.title} class="w-full h-48 object-cover rounded-xl" />
                        <div class="absolute top-4 left-4">
                            <span class="px-3 py-1 btn-primary text-white rounded-full text-sm backdrop-blur-sm">
                                {event.category}
                            </span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-3 text-white group-hover:text-brand transition-colors">
                            {event.title}
                        </h2>
                        <div class="space-y-2 text-light text-md">
                            <div class="flex items-center">
                                <i class="fa-solid fa-calendar mr-2"></i>
                                <span>{format(event.date, "MMM dd, yyyy")} at {event.time}</span>
                            </div>
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
