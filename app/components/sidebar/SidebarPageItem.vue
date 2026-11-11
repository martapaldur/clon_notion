
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
  <div
    class="sidebar_page_item"
    :class="{ is_active: item.active === true }"
  >

    <!-- CHEVRON DECORATIVO -->
    <span
      class="sidebar_page_item_chevron"
      aria-hidden="true"
    >
      <UiIcon name="chevron-right" :size="14" />
    </span>

    <!-- CONTENIDO DE LA PÁGINA -->
    <div class="sidebar_page_item_content">

      <!-- EMOJI -->
      <span
        v-if="item.emoji"
        class="sidebar_page_item_emoji"
      >
        {{ item.emoji }}
      </span>

      <!-- ICONO -->
      <span
        v-else
        class="sidebar_page_item_icon"
      >
        <UiIcon
          :name="item.icon || 'file'"
          :size="18"
        />
      </span>

      <!-- NOMBRE -->
      <span class="sidebar_page_item_label">
        {{ item.label }}
      </span>

    </div>

    <!-- BOTONES DE ACCIÓN (SOLO VISUALES) -->
    <div class="sidebar_page_item_actions">

      <button
        type="button"
        class="sidebar_page_item_action"
        aria-label="Añadir página"
        disabled
      >
        <UiIcon name="plus" :size="16" />
      </button>

      <button
        type="button"
        class="sidebar_page_item_action"
        aria-label="Más opciones"
        disabled
      >
        <UiIcon name="ellipsis" :size="16" />
      </button>

    </div>

  </div>
</template>
