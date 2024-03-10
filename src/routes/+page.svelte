<script lang="ts">
  import profileImage from "../assets/images/profile_pic_4x.png";
  import InfoLogo from "../components/nav/ui/InfoLogo.svelte";
  import StyledClickBtn from "../components/nav/ui/StyledClickBtn.svelte";
  import duggup_logo from "../assets/logos/duggup_logo.svg";
</script>

<main class="pr-[22rem] mt-[3.1rem] h-[calc(100vh-(var(--nav-height)+3.1rem))] flex flex-col overflow-auto">
  <div class="flex items-center gap-[3.5rem] ml-72">
    <div class="flex flex-col items-center pb-16">
      <div class="relative w-[120px] h-[120px] rounded-full border-[5px]">
        <img src={profileImage} alt="logo" class="w-full h-full rounded-full" />
        <p class="font-bold text-2xl text-pri text-center user-name">Krishna {@html `<br>`} Kiran</p>
      </div>
    </div>
    <div class="flex-1 min-h-[8.625rem] flex flex-col justify-between gap-4">
      <div class="flex justify-between gap-4">
        <p class="max-w-[38rem] text-sm">
          Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write
          hot-takes on building a business, shipping delightful products and accelerating product and career growth.
        </p>
        <InfoLogo
          props={{
            logo: {
              src: duggup_logo,
              height: "36px",
              width: "36px",
            },
            heading: "Duggup",
            subHeading: "Co-Founder and CEO",
          }}
        />
      </div>
      <div class="flex justify-between h-[33px] items-center gap-4">
        <StyledClickBtn>
          <p class="text-sm">Follow</p>
        </StyledClickBtn>
        <div class="flex items-center gap-2">
          <a href="#top" class="flex items-center gap-[2px] hover:underline">
            <p class="text-pri text-sm">My website</p>
            <i class="ri-share-box-line"></i>
          </a>
          <i class="ri-more-line text-2xl text-sec"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="bg-red-300 ml-44">
    <div class="max-w-[61rem] flex">
      <div class="bg-green-300 min-w-[10.8rem]">right</div>
      <div>left</div>
    </div>
  </div> -->
</main>

<style>
  .user-name {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 110%;
  }
</style>
