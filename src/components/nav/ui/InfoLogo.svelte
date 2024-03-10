<script lang="ts">
  interface IProps {
    logo: {
      src: string;
      width: string | number;
      height: string | number;
    };
    heading: string;
    subHeading: string;
    captions?: string[];
  }

  export let props: IProps | undefined;
</script>

<div class="flex flex-col items-end">
  <div class="rounded-full w-[{props?.logo.width}] h-[{props?.logo.height}] overflow-clip">
    <img src={props?.logo.src} alt="logo" class="w-full h-full" />
  </div>
  <p class="text-right font-bold mt-2">{props?.heading}</p>
  <p class="text-right text-xs text-sec my-1">{props?.subHeading}</p>
  {#if props && props.captions}
    {#each props.captions as caption, idx (idx + caption)}
      <p class="text-right text-sec text-xs">{caption}</p>
    {/each}
  {/if}
</div>
