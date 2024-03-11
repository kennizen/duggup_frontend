<script lang="ts">
  import profileImage from "../assets/images/profile_pic_4x.png";
  import InfoLogo from "../lib/components/ui/InfoLogo.svelte";
  import duggup_logo from "../assets/logos/duggup_logo.svg";
  import StyledClickBtn from "$lib/components/ui/StyledClickBtn.svelte";
  import TimelineCard from "$lib/components/ui/TimelineCard.svelte";
  import TimelineHeader from "$lib/components/ui/TimelineHeader.svelte";
</script>

<div class="h-[calc(100vh-(var(--nav-height)))] overflow-auto flex justify-center">
  <div class="w-full max-w-[63%] pt-14">
    <section class="flex gap-14 pl-[7.5rem]">
      <div class="flex flex-col items-center pb-16 relative">
        <div class="relative w-[120px] h-[120px] rounded-full border-[5px]">
          <img src={profileImage} alt="logo" class="w-full h-full rounded-full" />
        </div>
        <p class="font-bold text-2xl text-pri text-center user-img">Krishna{@html `<br>`}Kiran</p>
      </div>
      <div class="flex-1 min-h-[8.625rem] flex flex-col justify-center gap-2">
        <div class="flex justify-between gap-16">
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
        <div class="flex justify-between h-[33px] items-center gap-16">
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
    </section>

    <section class="mt-6 relative">
      <div class="flex max-w-[62rem]">
        <div class="w-[11rem] pr-9 pt-[8rem]">
          <p class="text-right text-xs text-sec relative small-timeline-point after:border-accent-pri">Dec 2023</p>
        </div>
        <div class="flex-1 py-8 px-10 flex gap-9 flex-wrap timeline-border">
          <TimelineCard
            props={{
              text: "No amount of technology can convert a bad story into a good story.",
              url: "src/assets/images/steave.jpg",
            }}
          />
          <TimelineCard
            props={{
              text: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have a big house.",
              url: "src/assets/images/sam.jpg",
            }}
          />
        </div>
      </div>
      <div class="flex max-w-[62rem]">
        <div class="w-[11rem] pr-9 relative">
          <i class="ri-arrow-up-s-line big-timeline-point__arrow text-sec"></i>
          <div class="py-2 relative big-timeline-point after:border-accent-pri">
            <InfoLogo
              props={{
                logo: {
                  src: duggup_logo,
                  height: "48px",
                  width: "48px",
                },
                heading: "Duggup",
                subHeading: "San Francisco Bay Area",
                captions: ["Joined", "Nov 2023"],
              }}
            />
          </div>
        </div>
        <div class="flex-1 py-6 px-10 flex gap-9 flex-wrap timeline-border">
          <TimelineHeader
            props={{
              heading: "Co-Founder and CEO",
              subHeading: ["Full-time", "Remote"],
            }}
          />
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .timeline-border {
    background-image: url("src/assets/images/Dot.svg");
    background-position: left;
    background-repeat: repeat-y;
  }

  .small-timeline-point::after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: white;
    border-width: 3px;
    border-style: solid;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 170px;
    transform: translateY(-50%);
  }

  .big-timeline-point::after {
    content: "";
    width: 28px;
    height: 28px;
    background-color: white;
    border-width: 9px;
    border-style: solid;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 165px;
    transform: translateY(-50%);
  }

  .big-timeline-point__arrow {
    position: absolute;
    left: 164.5px;
    font-size: 28px;
    top: -20px;
  }

  .user-img {
    position: absolute;
    top: 125px;
  }
</style>
