<script lang="ts">
    // Stores
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    // Components
    import Header from "$lib/components/header/header.svelte";
    import PageBackground from "$lib/components/background/page-background.svelte";
    import Footer from "$lib/components/footer/footer.svelte";
    import CodePopup from "$lib/components/popup/code-popup.svelte";

    // Styles
    import "$lib/core/tailwind.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";

    const currentPage = $page.url.pathname;
    let showPopup = false;
    let isLoading = true;

    function closePopup() {
        showPopup = false;
    }

    onMount(() => {
        isLoading = false;
    });
</script>

<div class="flex flex-col">
    <Header />
    <PageBackground {currentPage} />

    <main class="flex-1 flex flex-col z-10 w-full overflow-x-hidden p-4 md:p-8 min-h-screen" aria-label="Main content">
        {#if isLoading}
            <div class="flex items-center justify-center h-full">
                <l-hourglass size="40" bg-opacity="0.1" speed="1.75" color="white"></l-hourglass>
            </div>
        {:else}
            <slot />
        {/if}
    </main>

    {#if showPopup}
        <CodePopup showPopup={showPopup} onClose={closePopup} />
    {/if}

    <Footer onCodeClick={() => (showPopup = !showPopup)} />
</div>