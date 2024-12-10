<script lang="ts">
    import { page } from "$app/stores";
    import Header from "./header.svelte";
    import ToastConfig from "$lib/components/toast/toast-config.svelte";
    import PageBackground from "$lib/components/background/page-background.svelte";
    import Footer from "$lib/components/footer/footer.svelte";
    import CodePopup from "$lib/components/popup/code-popup.svelte";
    import "$lib/core/tailwind.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";

    $: currentPage = $page.url.pathname;
    let showPopup = false;

    function togglePopup(event: MouseEvent) {
        event.stopPropagation();
        showPopup = !showPopup;
    }

    function closePopup() {
        showPopup = false;
    }
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</svelte:head>

<ToastConfig />

<div class="flex flex-col min-h-screen">
    <Header />
    <PageBackground {currentPage} />

    <main class="flex-1 flex flex-col z-10 w-full overflow-x-hidden p-4 md:p-8">
        <div class="w-full max-w-full">
            <slot />
        </div>
    </main>

    <CodePopup {showPopup} onClose={closePopup} />
    <Footer onCodeClick={togglePopup} />
</div>

