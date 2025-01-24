<script lang="ts">
    // Stores
    import { page } from "$app/stores";

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

    function closePopup() {
        showPopup = false;
    }
</script>

<div class="flex flex-col min-h-screen">
    <Header />
    <PageBackground {currentPage} />

    <main class="flex-1 flex flex-col z-10 w-full overflow-x-hidden p-4 md:p-8" aria-label="Main content">
        <slot />
    </main>

    {#if showPopup}
        <CodePopup showPopup={showPopup} onClose={closePopup} />
    {/if}

    <Footer onCodeClick={() => (showPopup = !showPopup)} />
</div>