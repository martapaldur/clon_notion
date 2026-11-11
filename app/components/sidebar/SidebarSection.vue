<script setup>
import { ref } from 'vue'
import SidebarSectionHeader from './SidebarSectionHeader.vue'
import SidebarPageItem from './SidebarPageItem.vue'
import SidebarUtilityItem from './SidebarUtilityItem.vue'

defineProps({
  section: {
    type: Object,
    required: true
  }
})

const expanded = ref(true)
</script>

<template>
  <section 
    class="sidebar_section"
    :class="`is_${section.id}`"
  >

    <!-- TÍTULO DE LA SECCIÓN -->
    <SidebarSectionHeader
      v-if="section.title"
      :title="section.title"
      :variant="section.headerVariant || 'pages'"
      :expanded="expanded"
      :actions="section.headerActions || []"
      @toggle="expanded = !expanded"
    />

    <!-- CONTENIDO DE LA SECCIÓN -->
    <nav
      v-if="expanded"
      class="sidebar_section_content"
      :aria-label="section.title || 'Utilidades'"
    >

    <component
      :is="
        section.itemVariant === 'utility'
          ? SidebarUtilityItem
          : SidebarPageItem
      "
      v-for="item in section.items"
      :key="item.id"
      :item="item"
    />

    </nav>

  </section>
</template>
