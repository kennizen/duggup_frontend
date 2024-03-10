<script lang="ts">
  import duggup_logo from "../../assets/logos/duggup_logo_with_name.svg";
  import NavLink from "./NavLink.svelte";
  import homeIcon from "../../assets/icons/nav_home.svg";
  import exploreIcon from "../../assets/icons/nav_explore.svg";
  import learnIcon from "../../assets/icons/nav_learn.svg";
  import addIcon from "../../assets/icons/add.svg";
  import StyledClickBtn from "./ui/StyledClickBtn.svelte";
  import Profile from "./Profile.svelte";

  type NavLink = {
    label: string;
    icon: string;
  };

  const navLinks: NavLink[] = [
    { label: "Home", icon: homeIcon },
    { label: "Explore", icon: exploreIcon },
    { label: "Learn", icon: learnIcon },
  ];

  // methods
  function handleAddPost() {
    console.log("add post");
  }
</script>

<nav class="flex h-[var(--nav-height)] items-center justify-center mx-32">
  <div class="w-full h-full flex items-center nav-underline justify-between">
    <img aria-label="brand-logo" src={duggup_logo} alt="brand-logo" />
    <div class="flex items-center gap-14">
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
      <StyledClickBtn on:click={handleAddPost}>
        <img src={addIcon} alt="icon" />
        Post
      </StyledClickBtn>
      <Profile />
    </div>
  </div>
</nav>
