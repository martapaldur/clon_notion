
<script setup>
import {
  workspace,
  primaryNavigation,
  sidebarSections
} from '~/data/sidebar.js'

import SidebarHeader from './SidebarHeader.vue'
import SidebarPrimaryNav from './SidebarPrimaryNav.vue'
import SidebarSection from './SidebarSection.vue'
import SidebarFooter from './SidebarFooter.vue'
</script>

<template>
  <aside
    class="flex h-full w-60 shrink-0 flex-col border-r border-neutral-400/25 bg-sidebar text-foreground"
  >

    <!-- CABECERA FIJA -->
    <div class="shrink-0">

      <SidebarHeader :workspace="workspace" />

      <SidebarPrimaryNav :items="primaryNavigation" />

    </div>


    <!-- ZONA CENTRAL CON SCROLL -->
    <div class="min-h-0 flex-1 overflow-y-auto px-2 py-3">

      <SidebarSection
        v-for="section in sidebarSections"
        :key="section.id"
        :section="section"
      />

    </div>


    <!-- FOOTER FIJO -->
    <SidebarFooter />

  </aside>
</template>
