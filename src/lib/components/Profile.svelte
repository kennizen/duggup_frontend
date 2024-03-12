<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import type { LayoutData } from "../../routes/$types";

  export let data: LayoutData;
</script>

<div class="flex items-center gap-3">
  <div class="w-12 h-12 rounded-full border border-pri flex items-start justify-center pt-[1px] flex-shrink-0">
    <img src={data.userData.avatar} alt="avatar" class="rounded-full" />
  </div>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="flex items-center gap-2 group">
      <p class="text-xl font-medium text-pri">
        {data.userData.name.firstname}
        {data.userData.name.middlename}
        {data.userData.name.lastname}
      </p>
      <span class="group-hover:bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center hover-transition">
        <i class="ri-arrow-down-s-line"></i>
      </span>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Item class="gap-2 cursor-pointer hover-transition">
          <i class="ri-user-3-line"></i>
          Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item class="gap-2 cursor-pointer hover-transition">
          <i class="ri-settings-line"></i>
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item class="gap-2 cursor-pointer hover-transition">
          <i class="ri-logout-box-line"></i>
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
