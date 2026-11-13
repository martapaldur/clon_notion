
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

// Propiedades del botón.
defineProps({
    label: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    tooltip: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <!-- VARIANTE 1 SOLO TEXTO SIN TOOLTIP -->
    <button
        v-if="!icon"
        type="button"
        class="ui_button"
    >
        {{ label }}
    </button>

    <!-- VARIANTES 2 Y 3 CON ICONO Y TOOLTIP -->
    <UiTooltip
        v-else
        :text="tooltip || label"
    >
        <button
            type="button"
            class="ui_button"
            :aria-label="label || tooltip"
        >
            <!-- ICONO -->
            <UiIcon :name="icon" :size="18" />

            <!-- TEXTO OPCIONAL -->
            <span v-if="label">
                {{ label }}
            </span>
        </button>
    </UiTooltip>
</template>
