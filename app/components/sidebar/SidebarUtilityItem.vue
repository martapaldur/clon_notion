
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="sidebar_utility_item">

    <!-- ICONO -->
    <span class="sidebar_utility_item_icon">
      <UiIcon :name="item.icon || 'file'" :size="18" />
    </span>

    <!-- LABEL -->
    <span class="sidebar_utility_item_label">
      {{ item.label }}
    </span>

    <!-- ICONO EXTERNO -->
    <span
      v-if="item.external"
      class="sidebar_utility_item_external"
      aria-hidden="true"
    >
      <UiIcon name="arrow-up-right" :size="16" />
    </span>

  </div>
</template>
