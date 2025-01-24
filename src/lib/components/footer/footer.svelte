<script lang="ts">
    import SocialIcons from './social-icons.svelte';
    
    export let onCodeClick: (event: MouseEvent) => void;

    let currentYear: number = new Date().getFullYear();
</script>

<footer class="w-full bg-background backdrop-blur-sm text-white border-t border-gray-100/5 py-6 px-4 md:px-8 z-10">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-sm md:text-base text-center md:text-left order-2 md:order-1 text-white space-y-1">
            <p>&copy; {currentYear} 417 Faith & Fellowship. All rights reserved.</p>
            <p>
                Designed by 
                <a 
                    href="https://www.instagram.com/mason__whitehead/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-brand transition-colors duration-200 ease-in-out"
                >
                    Mason Whitehead
                </a>
            </p>
        </div>
        <div class="order-1 md:order-2">
            <SocialIcons {onCodeClick} />
        </div>
    </div>
</footer>