<script>
  export let props = {
    icon: "",
  };
</script>

<button class="flex items-center gap-2 border-pri border border-b-4 rounded-md px-4 py-1 text-pri active:border-b">
  {#if props.icon !== ""}
    <img src={props.icon} alt="icon" />
  {/if}
  <slot />
</button>
