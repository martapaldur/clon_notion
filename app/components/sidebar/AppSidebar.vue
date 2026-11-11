
<script setup>
import {
  workspace,
  primaryNavigation,
  sidebarSections
} from '~/data/sidebar.js'


/* SIDEBAR WIDTH */

const props = defineProps({
  width: {
    type: Number,
    default: 270
  }
})

const emit = defineEmits(['collapse', 'resize'])

const sidebarElement = ref(null)
const isResizing = ref(false)
const sidebarLeft = ref(0)

const minWidth = 270
const maxWidth = 600


/* LIMITAR LA ANCHURA */

function clampWidth(value) {
  return Math.min(maxWidth, Math.max(minWidth, value))
}


/* COMENZAR A ARRASTRAR */

function startResize(event) {
  if (event.button !== 0) return

  isResizing.value = true

  sidebarLeft.value =
    sidebarElement.value.getBoundingClientRect().left

  event.currentTarget.setPointerCapture(event.pointerId)
  event.preventDefault()
}


/* ACTUALIZAR LA ANCHURA */

function resizeSidebar(event) {
  if (!isResizing.value) return

  const newWidth = event.clientX - sidebarLeft.value

  emit('resize', clampWidth(newWidth))
}


/* TERMINAR DE ARRASTRAR */

function stopResize(event) {
  isResizing.value = false

  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
    event.currentTarget.releasePointerCapture(event.pointerId)
  }
}


/* REDIMENSIONAR CON EL TECLADO */

function resizeWithKeyboard(amount) {
  emit('resize', clampWidth(props.width + amount))
}

function setSidebarWidth(value) {
  emit('resize', clampWidth(value))
}


import SidebarHeader from './SidebarHeader.vue'
import SidebarPrimaryNav from './SidebarPrimaryNav.vue'
import SidebarSection from './SidebarSection.vue'
import SidebarFooter from './SidebarFooter.vue'
import { ref } from 'vue'
</script>


<template>
  <aside
    ref="sidebarElement"
    class="app_sidebar"
    :class="{ is_resizing: isResizing }"
    :style="{ '--sidebar_width': `${width}px` }"
  >

    <!-- CABECERA FIJA -->
    <div class="shrink-0">

      <SidebarHeader
        :workspace="workspace"
        @collapse="emit('collapse')"
      />

      <SidebarPrimaryNav
        :items="primaryNavigation"
        :show-all-labels="width >= 460"
      />

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

    <!-- CONTROL DE REDIMENSIONAMIENTO -->
    <div
      class="sidebar_resize_handle"
      role="separator"
      tabindex="0"
      aria-label="Cambiar anchura de la sidebar"
      aria-orientation="vertical"
      aria-valuemin="270"
      aria-valuemax="600"
      :aria-valuenow="width"
      @pointerdown="startResize"
      @pointermove="resizeSidebar"
      @pointerup="stopResize"
      @pointercancel="stopResize"
      @lostpointercapture="isResizing = false"
      @keydown.left.prevent="resizeWithKeyboard(-10)"
      @keydown.right.prevent="resizeWithKeyboard(10)"
      @keydown.home.prevent="setSidebarWidth(270)"
      @keydown.end.prevent="setSidebarWidth(600)"
    />

  </aside>
</template>

