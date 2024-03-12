<script lang="ts">
  interface IProps {
    url: string;
    text: string;
  }

  export let props: IProps | undefined;
</script>

<a href="#top">
  <div
    class="rounded-xl max-w-[21.5rem] h-[14rem] flex flex-col overflow-clip border-[0.5px] border-border-sec hover-transition card"
  >
    <div class="h-[8.5rem] w-full bg-cover flex-shrink-0 cursor-pointer">
      <img src={props?.url} alt="" loading="lazy" />
    </div>
    <div class="flex-1 w-full flex items-center px-6 bg-white">
      <p class="text-sm card-overview">
        {props?.text}
      </p>
    </div>
  </div>
</a>

<style>
  .card-overview {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .card:hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
</style>
