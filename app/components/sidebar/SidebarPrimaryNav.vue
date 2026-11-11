
<script setup>
import { ref, computed } from 'vue'
import SidebarNavButton from './SidebarNavButton.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  showAllLabels: {
    type: Boolean,
    default: false
  }
})

const activeItem = ref('home')

/* NAVEGACIÓN IZQUIERDA */

const navigationItems = computed(() =>
  props.items.filter(item => item.type === 'navigation')
)

/* ACCIONES DERECHA */

const actionItems = computed(() =>
  props.items.filter(item => item.type === 'action')
)

/* ESTADO ACTIVO */

function selectItem(item) {
  if (item.type === 'navigation') {
    activeItem.value = item.id
  }
}
</script>

<template>
  <nav
    class="sidebar_primary_nav"
    aria-label="Navegación principal"
  >

    <!-- NAVEGACIÓN IZQUIERDA -->
    <div class="sidebar_primary_nav_group">

      <SidebarNavButton
        v-for="item in navigationItems"
        :key="item.id"
        :item="item"
        :active="activeItem === item.id"
        :show-label="showAllLabels || activeItem === item.id"
        @select="selectItem"
      />

    </div>

    <!-- ACCIONES DERECHA -->
    <div class="sidebar_primary_nav_actions">

      <SidebarNavButton
        v-for="item in actionItems"
        :key="item.id"
        :item="item"
        :active="false"
        :show-label="false"
        @select="selectItem"
      />

    </div>

  </nav>
</template>
