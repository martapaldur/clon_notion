
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

// Recibimos los datos de cada página.
defineProps({
    item: {
        type: Object,
        required: true
    },
    variant: {
        type: String,
        default: 'sidebar'
    }
})
</script>

<template>
    <!-- CONTENEDOR DE LA PÁGINA
        utilizamos la clase is_active si la página está seleccionada (por defecto está seleccionado clon de notion) 
        utilizamos las clases is_sidebar e is_breadcrumb para saber si el componente se usa en la sidebar o en lso breadcrumps-->
    <div
        class="ui_page_item"
        :class="{
            is_sidebar: variant === 'sidebar',
            is_breadcrumb: variant === 'breadcrumb',
            is_active: item.active === true && variant === 'sidebar'
        }"
    >

        <!-- ICONO CHEVRON -->
        <span
            v-if="variant === 'sidebar'"
            class="ui_page_item_chevron"
            aria-hidden="true"
        >
            <UiIcon name="chevron-right" :size="14" />
        </span>

        <div class="ui_page_item_content"> <!-- CONTENIDO DEL LABEL DE LA PÁGINA -->

            <!-- aparece si la página tiene un emoji definido -->
            <span
                v-if="item.emoji"
                class="ui_page_item_emoji"
            >
                {{ item.emoji }}
            </span>

            <!-- aparece si la página no tiene emoji defindio -->
            <span
                v-else
                class="ui_page_item_icon"
            >
                <UiIcon
                    :name="item.icon || 'file'"
                    :size="18"
                />
            </span>

            <!-- NOMBRE DE LA PÁGINA -->
            <span class="ui_page_item_label">
                {{ item.label }}
            </span>

        </div>

        <div
            v-if="variant === 'sidebar'"
            class="ui_page_item_actions"
        > <!-- BOTONES DE ACCIÓN DE LOS ITEMS -->

            <!-- + -->
            <button
                type="button"
                class="ui_page_item_action"
                aria-label="Añadir página"
                disabled
            >
                <UiIcon name="plus" :size="16" />
            </button>

            <!-- ... -->
            <button
                type="button"
                class="ui_page_item_action"
                aria-label="Más opciones"
                disabled
            >
                <UiIcon name="ellipsis" :size="16" />
            </button>

        </div>

    </div>
</template>
