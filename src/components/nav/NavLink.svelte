<script>
  export let props = {
    label: "",
    icon: "",
  };
</script>

<a href="#top" class="flex items-center gap-2 text-pri hover:bg-slate-100 px-4 py-2 rounded-md smooth-transition">
  <img src={props.icon} alt="icon" />
  {props.label}
</a>
