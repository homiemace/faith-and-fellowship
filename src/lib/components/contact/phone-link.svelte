<script lang="ts">
    export let phone: string;
    let isCopied = false;

    function copyToClipboard() {
        navigator.clipboard.writeText(phone).then(() => {
            isCopied = true;
            setTimeout(() => {
                isCopied = false;
            }, 2000);
        });
    }
</script>

<div class="relative group">
    <a href={`tel:${phone}`} class="inline-flex items-center text-light hover:text-brand transition-colors duration-200 group">
        <i class="fa-solid fa-phone w-4 h-4 mr-2"></i>
        <span class="whitespace-nowrap">{phone}</span>
    </a>

    <!-- Add aria-label for accessibility -->
    <button on:click={copyToClipboard} class="ml-2 duration-200 text-light hover:text-brand" aria-label="Copy phone number">
        <i class="fa-solid fa-copy w-4 h-4"></i>
    </button>

    {#if isCopied}
        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 border border-gray-100/5 bg-background text-light text-sm py-1 px-2 rounded-sm shadow-lg">Copied!</div>
    {/if}
</div>

<style>
    button {
        display: inline-flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        padding: 2px;
    }

    .absolute {
        pointer-events: none;
        z-index: 50;
    }
</style>