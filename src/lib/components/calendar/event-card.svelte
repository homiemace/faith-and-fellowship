<script>
    import { format } from "date-fns";
    export let event;
</script>

<div class="group bg-event-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
    <div class="relative overflow-hidden">
        <img src={event.image} alt={event.title} class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute top-4 left-4">
            <span class="px-3 py-1 bg-event-accent/90 text-white rounded-full text-sm backdrop-blur-sm">
                {event.category}
            </span>
        </div>
    </div>
    <div class="p-6">
        <h2 class="text-xl font-semibold mb-3 text-white group-hover:text-event-accent transition-colors">
            {event.title}
        </h2>
        <div class="space-y-2 text-gray-400">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <span>{format(event.date, "MMM dd, yyyy")} at {event.time}</span>
            </div>
            <div class="flex items-center">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>{event.location}</span>
            </div>
        </div>
    </div>
</div>
