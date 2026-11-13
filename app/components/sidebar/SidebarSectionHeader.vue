<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

// Propiedades que recibimos desde SidebarSection.vue.
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

// Declaramos el evento para desplegar o contraer la sección
defineEmits(['toggle'])
</script>

<template>
    <div
        class="sidebar_section_header"
        :class="`is_${variant}`"
    > <!-- CONTENEDOR DEL HEADER DE SECCIÓN -->

        <!-- BOTÓN DE CHEVRON HACIA ABAJO PARA DESPLEGAR O CONTRAER LA SECCIÓN -->
        <button
            type="button"
            class="sidebar_section_header_toggle"
            :aria-expanded="expanded"
            @click="$emit('toggle')"
        >

            <!-- TÍTULO DE LA SECCIÓN -->
            <span class="sidebar_section_header_title">
                {{ title }}
            </span>

            <!-- EL CHEVRON CAMBIA SEGÚN EL ESTADO DE LA SECCIÓN -->
            <span class="sidebar_section_header_chevron">
                <UiIcon
                    :name="expanded ? 'chevron-down' : 'chevron-right'"
                    :size="14"
                />
            </span>

        </button>

        <div class="sidebar_section_header_actions" aria-hidden="true"> <!-- ACCIONES EN HOVER -->

            <!-- Generamos los iconos recorriendo el array de actions -->
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
