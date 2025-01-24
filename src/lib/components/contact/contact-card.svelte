<script lang="ts">
    import { onMount } from "svelte";
    import PhoneLink from "./phone-link.svelte";
    import type { TeamMember } from "../../types/teams";

    export let member: TeamMember;
    export let delay: number;

    let isVisible = false;
    let card: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            isVisible = true;
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(card);

        return () => {
            observer.disconnect();
        };
    });
</script>

<div
    bind:this={card}
    class="transform transition-all duration-500 ease-out"
    class:translate-y-0={isVisible}
    class:opacity-100={isVisible}
    class:translate-y-4={!isVisible}
    class:opacity-0={!isVisible}
>
    <div class="bg-background/5 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/5 p-6 h-full">
        <div class="flex flex-col h-full">
            <!-- Team member name as <h3> -->
            <h3 class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brandSecondary mb-2">{member.name}</h3>
            <div class="mt-auto">
                <PhoneLink phone={member.phone} />
            </div>
        </div>
    </div>
</div>