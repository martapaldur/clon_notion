
<script setup>
import SidebarNavButton from './SidebarNavButton.vue'
import { controlarNavegacion } from '~/composables/sidebar.js'

// Recibimos los datos de navegación desde AppSidebar.vue.
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

const {
    activeItem,
    navigationItems,
    actionItems,
    selectItem
} = controlarNavegacion(props.items)
</script>

<template>
    <nav class="sidebar_primary_nav" aria-label="Navegación principal"> 

        <div class="sidebar_primary_nav_group"> <!--  BOTONES DE NAVEGACIÓN (Home, Chat, Meetings e Inbox) -->

            <!-- Generamos los botones recorriendo el array -->
            <SidebarNavButton
                v-for="item in navigationItems"
                :key="item.id"
                :item="item"
                :active="activeItem === item.id"
                :show-label="showAllLabels || activeItem === item.id"
                @select="selectItem"
            />

        </div>

        <div class="sidebar_primary_nav_actions"> <!-- BOTÓN DE ACCIÓN (search) -->

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
