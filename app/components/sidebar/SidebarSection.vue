
<script setup>
import SidebarSectionHeader from './SidebarSectionHeader.vue'
import UiPageItem from '~/components/ui/UiPageItem.vue'
import SidebarUtilityItem from './SidebarUtilityItem.vue'
import { controlarSeccion } from '~/composables/sidebar.js'

// Recibimos los datos de cada sección desde AppSidebar.vue.
defineProps({
    section: {
        type: Object,
        required: true
    }
})

// Obtenemos la variable y la función del archivo JavaScript de sidebar.js
const {
    expanded,
    alternarSeccion
} = controlarSeccion()
</script>

<template>
    <section
        class="sidebar_section"
        :class="`is_${section.id}`"
    > <!-- CONTENEDOR DE LA SECCIÓN -->

        <!--TÍTULO DE LA SECCIÓN
            con el v-if hacemos que solo aparezca el título si la sección tiene uno, usamos @toggle para ejecutar alternarSeccion() cuando pulsamos el título.-->
        <SidebarSectionHeader
            v-if="section.title"
            :title="section.title"
            :variant="section.headerVariant || 'pages'"
            :expanded="expanded"
            :actions="section.headerActions || []"
            @toggle="alternarSeccion"
        />

        <!--CONTENIDO DE LA SECCIÓN
            muestra las páginas únicamente si expanded es true.-->
        <nav
            v-if="expanded"
            class="sidebar_section_content"
            :aria-label="section.title || 'Utilidades'"
        >

            <!--recorremos el array de páginas de cada sección, :is: selecciona qué componente utilizar según el tipo de páginaa-->
            <component
                :is="section.itemVariant === 'utility' ? SidebarUtilityItem : UiPageItem"
                v-for="item in section.items"
                :key="item.id"
                :item="item"
            />

        </nav>

    </section>
</template>
