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

<ToastConfig />

<div class="flex flex-col min-h-screen">
    <Header />
    <PageBackground {currentPage} />

    <main class="flex-1 flex flex-col z-10 max-w-full p-4 md:p-8">
        <slot />
    </main>

    <CodePopup {showPopup} onClose={closePopup} />
    <Footer onCodeClick={togglePopup} />
</div>
