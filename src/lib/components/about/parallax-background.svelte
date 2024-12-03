<script lang="ts">
  const particles = Array(20).fill(null).map(() => ({
    size: Math.random() * 10 + 5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 5
  }));
</script>

<div class="fixed inset-0">
  {#each particles as particle}
    <div 
      class="absolute rounded-full bg-white opacity-10"
      style="
        width: {particle.size}px;
        height: {particle.size}px;
        top: {particle.top}%;
        left: {particle.left}%;
        animation: float {particle.duration}s infinite ease-in-out;
      "
    ></div>
  {/each}
</div>