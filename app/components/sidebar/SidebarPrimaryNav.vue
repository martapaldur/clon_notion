
<script setup>
import SidebarPageItem from './SidebarPageItem.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav
    aria-label="Navegación principal"
    class="shrink-0 px-2 pb-3"
  >
    <SidebarPageItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </nav>
</template>
