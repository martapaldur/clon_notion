
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

defineProps({
  workspace: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['collapse'])
</script>

<template>
  <div class="sidebar_header">

    <!-- header del workspace -->
    <div class="sidebar_workspace_header">

      <!-- botón del workspace-->
      <button
        type="button"
        class="sidebar_workspace_button"
        aria-label="Opciones del espacio de trabajo"
      >

        <!-- avatar/ M del perfil -->
        <span class="sidebar_workspace_avatar">
          {{ workspace.avatar }}

          <span
            class="sidebar_workspace_status"
            aria-hidden="true"
          />
        </span>

        <!-- Nombre del. workspace -->
        <span class="sidebar_workspace_name">
          {{ workspace.name }}
        </span>

        <!-- Icono dropdown -->
        <span class="sidebar_workspace_chevron">
          <UiIcon name="chevron-down" :size="14" />
        </span>

      </button>

      <!-- Boton para colapsar la sidebar -->
      <UiTooltip
        text="Close sidebar"
        shortcut="⌘\"
        position="right"
      >
        <button
          type="button"
          class="sidebar_header_collapse"
          aria-label="Cerrar la barra lateral"
          @click="emit('collapse')"
        >
          <UiIcon name="chevrons-left" :size="16" />
        </button>
      </UiTooltip>

    </div>
  </div>
</template>
