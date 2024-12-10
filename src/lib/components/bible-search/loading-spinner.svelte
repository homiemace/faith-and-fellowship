<script lang="ts">
    export let size = "40px";
    export let color = "white";
</script>

<div class="animate-spin rounded-full border-4 border-t-transparent" style="width: {size}; height: {size}; border-color: {color}; border-top-color: transparent;">
    <span class="sr-only">Loading...</span>
</div>

<style>
    div {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
