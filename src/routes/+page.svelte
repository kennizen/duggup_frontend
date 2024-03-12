<script lang="ts">
  import InfoLogo from "../lib/components/ui/InfoLogo.svelte";
  import StyledClickBtn from "$lib/components/ui/StyledClickBtn.svelte";
  import TimelineCard from "$lib/components/ui/TimelineCard.svelte";
  import TimelineHeader from "$lib/components/ui/TimelineHeader.svelte";
  import dotIcon from "$lib/assets/images/Dot.png";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: followed = false;

  // methods
  function toggleFollowed() {
    followed = !followed;
  }

  const { timeline } = data;
</script>

<div class="h-[calc(100vh-(var(--nav-height)))] overflow-auto flex justify-center">
  <div class="w-full max-w-[63%] pt-14 h-fit">
    <section class="flex gap-14 pl-[7.5rem]">
      <div class="flex flex-col items-center pb-16 relative">
        <div class="relative w-[120px] h-[120px] rounded-full border-[5px]">
          <img src={data.userInfo.avatar} alt="logo" class="w-full h-full rounded-full" />
        </div>
        <p class="font-bold text-2xl text-pri text-center user-img">
          {data.userInfo.name.firstname}{@html `<br>`}{data.userInfo.name.lastname}
        </p>
      </div>
      <div class="flex-1 min-h-[8.625rem] flex flex-col justify-center gap-2">
        <div class="flex justify-between gap-16">
          <p class="max-w-[38rem] text-sm">
            {data.userInfo.about}
          </p>
          <InfoLogo
            props={{
              logo: {
                src: data.work.company.logo,
                height: "36px",
                width: "36px",
              },
              heading: data.work.company.name,
              subHeading: data.work.designation,
            }}
          />
        </div>
        <div class="flex justify-between h-[33px] items-center gap-16">
          <StyledClickBtn on:click={toggleFollowed}>
            <p class="text-sm">{followed ? "Followed" : "Follow"}</p>
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
      {#each timeline as data, idx (idx)}
        <div class="flex max-w-[62rem]">
          <div class="w-[11rem] pr-9 pt-[8rem]">
            <p class="text-right text-xs text-sec relative small-timeline-point after:border-accent-pri">{data.date}</p>
          </div>
          <div class="flex-1 py-8 px-10 flex gap-9 flex-wrap timeline-border" style="background-image: url({dotIcon});">
            {#each data.posts as post}
              <TimelineCard
                props={{
                  text: post.desc,
                  url: post.cover,
                }}
              />
            {/each}
          </div>
        </div>
        <div class="flex max-w-[62rem]">
          <div class="w-[11rem] pr-9 relative">
            <i class="ri-arrow-up-s-line big-timeline-point__arrow text-sec"></i>
            <div class="py-2 relative big-timeline-point after:border-accent-pri">
              <InfoLogo
                props={{
                  logo: {
                    src: data.by.company.logo,
                    height: "48px",
                    width: "48px",
                  },
                  heading: data.by.company.name,
                  subHeading: data.by.company.location,
                  captions: ["Joined", data.by.company.joinedDate],
                }}
              />
            </div>
          </div>
          <div class="flex-1 py-6 px-10 flex gap-9 flex-wrap timeline-border" style="background-image: url({dotIcon});">
            <TimelineHeader
              props={{
                heading: data.by.company.designation,
                subHeading: data.by.company.jobType.map((type) => type),
              }}
            />
          </div>
        </div>
      {/each}
    </section>
  </div>
</div>

<style>
  .timeline-border {
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
