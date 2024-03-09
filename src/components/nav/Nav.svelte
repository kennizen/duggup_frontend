<script lang="ts">
  import duggup_logo from "../../assets/logos/duggup_logo_with_name.svg";
  import NavLink from "./NavLink.svelte";
  import HomeIcon from "../../assets/icons/nav_home.svg";
  import ExploreIcon from "../../assets/icons/nav_explore.svg";
  import LearnIcon from "../../assets/icons/nav_learn.svg";
  import AddIcon from "../../assets/icons/add.svg";
  import StyledClickBtn from "./ui/StyledClickBtn.svelte";

  type NavLink = {
    label: string;
    icon: string;
  };

  const navLinks: NavLink[] = [
    { label: "Home", icon: HomeIcon },
    { label: "Explore", icon: ExploreIcon },
    { label: "Learn", icon: LearnIcon },
  ];
</script>

<nav class="flex h-[73px] items-center justify-center mx-32">
  <div class="w-full h-full flex items-center nav-underline justify-between">
    <img src={duggup_logo} alt="brand-logo" />
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-4">
        {#each navLinks as navLink, idx (idx + navLink.label)}
          <NavLink
            props={{
              label: navLink.label,
              icon: navLink.icon,
            }}
          />
        {/each}
      </div>
      <StyledClickBtn props={{ icon: AddIcon }}>Post</StyledClickBtn>
    </div>
  </div>
</nav>
