<script lang="ts">
    export let title: string;
    export let content: string;
    export let image: string = "/placeholder.svg"; // Default fallback image
</script>

<div class="group card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full">
    <!-- Image container with fixed dimensions -->
    <div class="w-full h-48 overflow-hidden relative">
        <img 
            src={image} 
            alt={`Image representing ${title}`} 
            class="w-full h-full object-cover rounded-xl"
            loading="eager"
            fetchpriority="high"
            width="400" 
            height="192" 
        />
    </div>
    <div class="p-4">
        <h2 class="text-xl mb-3 font-bold text-white group-hover:text-brand transition-colors">
            {title}
        </h2>
        <div class="space-y-2 text-gray-400">
            <p>{content}</p>
        </div>
    </div>
</div>