<script setup>
import SidebarHeader from './SidebarHeader.vue'
import SidebarPrimaryNav from './SidebarPrimaryNav.vue'
import SidebarSection from './SidebarSection.vue'
import SidebarFooter from './SidebarFooter.vue'

import {
    workspace,
    primaryNavigation,
    sidebarSections
} from '~/data/sidebar.js'

import { redimensionarSidebar } from '~/composables/sidebar.js'

// Recibe el ancho de inicio de la sidebar que defini en app.vue.
defineProps({
    width: {
        type: Number,
        default: 270
    }
})

const emit = defineEmits(['collapse', 'resize'])

// Cuando cambia el ancho, envia el nuevo valor a app.vue.
const {
    isResizing,
    empezarArrastre,
    moverArrastre,
    terminarArrastre
} = redimensionarSidebar(nuevoAncho => emit('resize', nuevoAncho))

</script>


<template>
    <!-- CONTENEDOR DE LA SIDEBAR 
    	:class añade una clase mientras se arrastra el borde de la sidebar
		:style actualiza el ancho con una variable de CSS -->
    <aside
        class="app_sidebar"
        :class="{ is_resizing: isResizing }"
        :style="{ '--sidebar_width': `${width}px` }"
    >

        <div class="shrink-0"> <!-- HEADER FIJO DE LA SIDEBAR -->

            <!-- WORKSPACE (HEADER DEL HEADER DE LA SIDEBAR)-->
            <SidebarHeader
                :workspace="workspace"
                @collapse="emit('collapse')"
            />

            <!-- NAVEGACIÓN PRINCIPAL DE LA SIDEBAR 
            	:show-all-labels Muestra todos los textos de los links del nav si la sidebar mide más de 460px -->
            <SidebarPrimaryNav
                :items="primaryNavigation"
                :show-all-labels="width >= 460"
            />

        </div>


        <div class="min-h-0 flex-1 overflow-y-auto px-2 py-3"> <!-- ZONA CENTRAL DE LA SIDEBAR CON SCROLL -->

            <!-- recorremos el array sidebarSections con v-for para pintar todo el contenido -->
            <SidebarSection
                v-for="section in sidebarSections"
                :key="section.id"
                :section="section"
            />

        </div>


        <SidebarFooter /> <!-- FOOTER FIJO DE LA SIDEBAR -->


        <!--
            CONTROL DE REDIMENSIONAMIENTO DE LA SIDEBAR (repito que en esto me ha ayudado chatgpt porque no sabía)

            @pointerdown: comienza el arrastre.
            @pointermove: actualiza el ancho mientras arrastramos.
            @pointerup: termina el arrastre.
            @pointercancel: cancela el arrastre si se interrumpe.
            @lostpointercapture: termina el arrastre si se pierde el control del puntero.

            Las funciones están definidas en composables/sidebar.js.
        -->
        <div
            class="sidebar_resize_handle"
            aria-hidden="true"
            @pointerdown="empezarArrastre"
            @pointermove="moverArrastre"
            @pointerup="terminarArrastre"
            @pointercancel="terminarArrastre"
            @lostpointercapture="terminarArrastre"
        />

    </aside>
</template>
