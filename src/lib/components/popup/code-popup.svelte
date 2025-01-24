<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { onMount, onDestroy } from "svelte";

    export let showPopup: boolean;
    export let onClose: () => void;

    let isCopied = false;
    let timeoutId: number | null = null;

    function copyText() {
        const textToCopy = "65BB-GBLQ";
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                }

                isCopied = true;
                timeoutId = setTimeout(() => {
                    isCopied = false;
                    timeoutId = null;
                }, 3000);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            onClose();
        }
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    });

    onDestroy(() => {
        window.removeEventListener("keydown", handleKeydown);
    });
</script>

{#if showPopup}
    <aside in:fly={{ y: 20, duration: 400, opacity: 0, easing: cubicOut }} out:fly={{ y: 20, duration: 400, opacity: 0, easing: cubicOut }} class="fixed z-[100] flex items-center justify-between gap-2 p-3 rounded-lg shadow-lg border border-gray-100/5 bg-background text-white max-w-[90%] sm:max-w-xs md:max-w-[18rem] lg:max-w-[16rem] bottom-40 md:bottom-40 left-1/2 -translate-x-1/2" aria-live="polite" role="alert">
        <button class="flex-1 text-sm hover:text-brand transition duration-200 truncate" on:click={copyText} aria-label="Copy code 65BB-GBLQ">
            <div class="text-container">
                <span class="text copied {isCopied ? 'active' : ''}" aria-hidden={!isCopied}> Copied! </span>
                <span class="text code {isCopied ? 'hidden' : ''}" aria-hidden={isCopied}> 65BB-GBLQ </span>
            </div>
        </button>

        <!-- Close Button -->
        <button class="close-button p-1 rounded" on:click={onClose} aria-label="Close popup">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </aside>
{/if}

<style>
    .text-container {
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    .text {
        display: inline-block;
        transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    }

    .text.copied {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transform: translateY(10px);
    }

    .text.copied.active {
        opacity: 1;
        transform: translateY(0);
    }

    .text.code {
        opacity: 1;
        transform: translateY(0);
    }

    .text.code.hidden {
        opacity: 0;
        transform: translateY(-10px);
    }

    .close-button {
        transition: transform 0.2s ease-in-out;
    }

    .close-button:hover {
        transform: scale(1.2);
    }

    @media (prefers-reduced-motion) {
        .text,
        .close-button {
            transition: none;
        }
    }
</style>
