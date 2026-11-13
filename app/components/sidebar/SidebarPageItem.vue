
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

// Recibimos los datos de cada página desde SidebarSection.vue.
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <!-- CONTENEDOR DE LA PÁGINA 
    	utilizamos la clase is_active si la página está seleccionada (por defecto está seleccionado clon de notion) -->
    <div
        class="sidebar_page_item"
        :class="{ is_active: item.active === true }"
    >

        <!-- ICONO CHEVRON -->
        <span
            class="sidebar_page_item_chevron"
            aria-hidden="true"
        >
            <UiIcon name="chevron-right" :size="14" />
        </span>

        <div class="sidebar_page_item_content"> <!-- CONTENIDO DEL LABEL DE LA PÁGINA -->

            <!-- aparece si la página tiene un emoji definido -->
            <span
                v-if="item.emoji"
                class="sidebar_page_item_emoji"
            >
                {{ item.emoji }}
            </span>

            <!-- aparece si la página no tiene emoji defindio -->
            <span
                v-else
                class="sidebar_page_item_icon"
            >
                <UiIcon
                    :name="item.icon || 'file'"
                    :size="18"
                />
            </span>

            <!-- NOMBRE DE LA PÁGINA -->
            <span class="sidebar_page_item_label">
                {{ item.label }}
            </span>

        </div>

        <div class="sidebar_page_item_actions"> <!-- BOTONES DE ACCIÓN DE LOS ITEMS -->

            <!-- + -->
            <button
                type="button"
                class="sidebar_page_item_action"
                aria-label="Añadir página"
                disabled
            >
                <UiIcon name="plus" :size="16" />
            </button>

            <!-- ... -->
            <button
                type="button"
                class="sidebar_page_item_action"
                aria-label="Más opciones"
                disabled
            >
                <UiIcon name="ellipsis" :size="16" />
            </button>

        </div>

    </div>
</template>
