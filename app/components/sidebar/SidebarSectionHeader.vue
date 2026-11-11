<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

defineProps({
  title: {
    type: String,
    required: true
  },

  variant: {
    type: String,
    default: 'pages'
  },

  expanded: {
    type: Boolean,
    default: true
  },

  actions: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <div
    class="sidebar_section_header"
    :class="`is_${variant}`"
  >

    <!-- TÍTULO Y DROPDOWN -->
    <button
      type="button"
      class="sidebar_section_header_toggle"
      :aria-expanded="expanded"
      @click="emit('toggle')"
    >

      <span class="sidebar_section_header_title">
        {{ title }}
      </span>

      <!-- CHEVRON -->
      <span class="sidebar_section_header_chevron">
        <UiIcon
          :name="expanded ? 'chevron-down' : 'chevron-right'"
          :size="14"
        />
      </span>

    </button>

    <!-- ACCIONES EN HOVER -->
    <div
      class="sidebar_section_header_actions"
      aria-hidden="true"
    >

      <span
        v-for="iconName in actions"
        :key="iconName"
        class="sidebar_section_header_action"
      >
        <UiIcon
          :name="iconName"
          :size="16"
        />
      </span>

    </div>

  </div>
</template>
