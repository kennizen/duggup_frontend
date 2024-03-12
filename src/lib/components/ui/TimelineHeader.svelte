<script lang="ts">
  interface IProps {
    heading: string;
    subHeading: string[];
  }

  export let props: IProps | undefined;
</script>

<div class="py-4 px-5 rounded-xl bg-white flex flex-col justify-center gap-2 custom-shadow w-full">
  <p class="font-bold text-xl">{props?.heading}</p>
  {#if props && props.subHeading.length > 0}
    <div class="flex items-center">
      {#each props.subHeading as text, idx (idx)}
        <p class="text-xs text-sec">{text}</p>
        {#if idx + 1 !== props.subHeading.length}
          <div class="w-[2px] h-[2px] rounded-full bg-sec m-1"></div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .custom-shadow {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }
</style>
