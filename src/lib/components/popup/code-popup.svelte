<script lang="ts">
    import { fade } from 'svelte/transition';
    import { toast } from '@zerodevx/svelte-toast';

    export let showPopup: boolean;
    export let onClose: () => void;

    function copyText() {
        const textToCopy = "65BB-GBLQ";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast.push('Code copied to clipboard!', {
                    theme: {
                        '--toastBackground': '#48BB78',
                        '--toastBarBackground': '#2F855A'
                    }
                });
                onClose();
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
                toast.push('Failed to copy code', {
                    theme: {
                        '--toastBackground': '#F56565',
                        '--toastBarBackground': '#C53030'
                    }
                });
            });
    }
</script>

{#if showPopup}
    <aside 
        transition:fade="{{ duration: 300 }}" 
        class="fixed z-50 flex items-center justify-between gap-2 p-3 rounded-lg shadow-lg bg-background text-white max-w-[90%] sm:max-w-xs md:max-w-[18rem] lg:max-w-[16rem] bottom-20 right-4 md:right-0 md:left-1/2 md:-translate-x-1/2"
    >
        <button 
            class="flex-1 text-sm font-medium hover:text-brand transition duration-200 truncate" 
            on:click={copyText}
        >
            65BB-GBLQ
        </button>
        <button 
            class="p-1 hover:bg-white/10 rounded" 
            on:click={onClose} 
            aria-label="Close popup"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path 
                    fill-rule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clip-rule="evenodd" 
                />
            </svg>
        </button>
    </aside>
{/if}