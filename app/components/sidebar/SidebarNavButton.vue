
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

defineProps({
  item: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  showLabel: {
  type: Boolean,
  default: false
  }
})

const emit = defineEmits(['select'])
</script>

<template>
  <UiTooltip
    :text="item.label"
    :shortcut="item.shortcut"
    position="bottom"
  >

    <button
      type="button"
      class="sidebar_nav_button"
      :class="{ is_active: active }"
      :aria-label="item.label"
      :aria-pressed="item.type === 'navigation' ? active : undefined"
      @click="emit('select', item)"
    >

      <!-- ICON -->
      <span class="sidebar_nav_button_icon">

        <UiIcon
          :name="item.icon"
          :size="16"
        />

        <!-- NOTIFICATION BADGE -->
        <span
          v-if="item.badge"
          class="sidebar_nav_button_badge"
        >
          {{ item.badge }}
        </span>

      </span>

      <!-- ACTIVE LABEL -->
      <span
        v-if="showLabel && item.type === 'navigation'"
        class="sidebar_nav_button_label"
      >
        {{ item.label }}
      </span>
    </button>

  </UiTooltip>
</template>
