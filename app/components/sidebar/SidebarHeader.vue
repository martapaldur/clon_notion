<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

// Recibelos datos del workspace (header del header) desde AppSidebar.vue
defineProps({
    workspace: {
        type: Object,
        required: true
    }
})

// Declara el evento para cerrar la sidebar
const emit = defineEmits(['collapse'])
</script>

<template>
    <div class="sidebar_header"> <!-- CONTENEDOR PRINCIPAL DEL HEADER DE LA SIDEBAR -->

        <div class="sidebar_workspace_header">

            <!-- BOTÓN DEL WORKSPACE CON EL AVATAR Y EL BOTÓN DE COLPSAR LA SIDEBAR -->
            <button
                type="button"
                class="sidebar_workspace_button"
                aria-label="Opciones del espacio de trabajo"
            >
                <span class="sidebar_workspace_avatar">
                    {{ workspace.avatar }} <!-- avatar con la inicial del workspace -->
                    <span
                        class="sidebar_workspace_status"
                        aria-hidden="true"
                    ></span>
                </span>

                <span class="sidebar_workspace_name">
                    {{ workspace.name }}   <!-- pinta el nombre del workspace -->
                </span>

                <span class="sidebar_workspace_chevron">
                    <UiIcon name="chevron-down" :size="14" /> <!-- Icono del chevron -->
                </span>

            </button>

            <!-- BOTÓN PARA CERRAR LA SIDEBAR Y TOOLTIP DEL BOTÓN-->
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
