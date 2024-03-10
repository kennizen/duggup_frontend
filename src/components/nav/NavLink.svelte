<script lang="ts">
  interface IProps {
    label: string;
    icon: string;
  }

  export let props: IProps;
</script>

<a
  href="#top"
  aria-label={props.label}
  class="flex items-center gap-2 text-pri hover:bg-slate-100 px-4 py-2 rounded-md hover-transition"
>
  <img src={props.icon} alt="icon" />
  {props.label}
</a>
