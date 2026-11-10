
<script setup>
import { ref } from 'vue'
import SidebarPageItem from './SidebarPageItem.vue'
import UiIcon from '~/components/ui/UiIcon.vue'

defineProps({
  section: {
    type: Object,
    required: true
  }
})

const expanded = ref(true)
</script>

<template>
  <section class="mb-5">

    <!-- Título de sección -->
    <button
      type="button"
      class="flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-foreground/65 hover:bg-sidebar-hover"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      <span class="text-label-small">
        {{ section.title }}
      </span>

      <UiIcon
        :name="expanded ? 'chevron-down' : 'chevron-right'"
        :size="14"
      />
    </button>

    <!-- elementos de sección -->
    <nav
      v-if="expanded"
      :aria-label="section.title"
      class="mt-1"
    >
      <SidebarPageItem
        v-for="item in section.items"
        :key="item.id"
        :item="item"
      />
    </nav>

  </section>
</template>
