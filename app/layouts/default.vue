
<script setup>
import { ref } from 'vue'

import AppSidebar from '~/components/sidebar/AppSidebar.vue'
import AppHeader from '~/components/header/AppHeader.vue'
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

// ESTADO DE LA SIDEBAR
const isSidebarOpen = ref(true)

// CERRAR SIDEBAR
function collapseSidebar() {
  isSidebarOpen.value = false
}

// ABRIR SIDEBAR
function expandSidebar() {
  isSidebarOpen.value = true
}

//ancho de la sidebar
const sidebarWidth = ref(270)
function updateSidebarWidth(newWidth) {
  sidebarWidth.value = newWidth
}

</script>

<template>
  <div class="app_layout">

    <!-- SIDEBAR -->
    <AppSidebar
      v-show="isSidebarOpen"
      :width="sidebarWidth"
      @collapse="collapseSidebar"
      @resize="updateSidebarWidth"
    />

    <!-- CONTENEDOR DERECHO -->
    <div class="app_layout_content">

      <!-- HEADER -->
      <div class="app_layout_header">

        <!-- BOTÓN PARA ABRIR SIDEBAR -->
        <UiTooltip
          v-if="!isSidebarOpen"
          text="Open sidebar"
          position="bottom"
        >
          <button
            type="button"
            class="app_layout_open_button"
            aria-label="Abrir barra lateral"
            @click="expandSidebar"
          >
            <span class="app_layout_open_icon">
              <UiIcon name="chevrons-left" :size="18" />
            </span>
          </button>
        </UiTooltip>

        <AppHeader />

      </div>

      <!-- MAIN -->
      <main class="app_layout_main">
        <slot />
      </main>

    </div>

  </div>
</template>
