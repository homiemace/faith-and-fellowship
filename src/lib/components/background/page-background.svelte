<script lang="ts">
    export let currentPage: string;
</script>

<div class={`absolute inset-0 z-0 ${
    currentPage === "/" ? "homepage-background" : 
    currentPage === "/about-us" ? "about-us-background" : ""
}`}></div>