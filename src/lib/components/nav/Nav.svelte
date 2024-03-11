<script lang="ts">
  import duggup_logo from "../../../assets/logos/duggup_logo_with_name.svg";
  import NavLink from "./NavLink.svelte";
  import homeIcon from "../../../assets/icons/nav_home.svg";
  import exploreIcon from "../../../assets/icons/nav_explore.svg";
  import learnIcon from "../../../assets/icons/nav_learn.svg";
  import StyledClickBtn from "../ui/StyledClickBtn.svelte";
  import Profile from "../Profile.svelte";

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
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 4.33333V9.66667M4.33333 7H9.66667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Post
      </StyledClickBtn>
      <Profile />
    </div>
  </div>
</nav>

<style>
  .nav-underline {
    background-image: radial-gradient(circle, rgb(82, 92, 105) 33%, rgba(255, 255, 255, 0) 0%);
    background-position: bottom;
    background-size: 5px 3px;
    background-repeat: repeat-x;
  }
</style>
