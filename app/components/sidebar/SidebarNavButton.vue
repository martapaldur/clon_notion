<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'

// Datos que recibe el botón desde SidebarPrimaryNav.vue.
defineProps({
    item: {
        type: Object,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    showLabel: {
        type: Boolean,
        default: false
    }
})

// Declaramos el evento que comunica qué botón se ha pulsado.
defineEmits(['select'])
</script>

<template>
    <!-- TOOLTIP DEL BOTÓN -->
    <UiTooltip
        :text="item.label"
        :shortcut="item.shortcut"
        position="bottom"
    >

        <!-- BOTÓN -->
        <button
            type="button"
            class="sidebar_nav_button"
            :class="{ is_active: active }"
            :aria-label="item.label"
            :aria-pressed="item.type === 'navigation' ? active : undefined"
            @click="$emit('select', item)"
        >

            <span class="sidebar_nav_button_icon"> <!-- ICONO -->

                <UiIcon
                    :name="item.icon"
                    :size="16"
                />

                <!-- NÚMERO DE NOTIFICACIONES EN EL BADGE -->
                <span
                    v-if="item.badge"
                    class="sidebar_nav_button_badge"
                >
                    {{ item.badge }}
                </span>

            </span>

            <!-- TEXTO DEL BOTÓN -->
            <span
                v-if="showLabel && item.type === 'navigation'"
                class="sidebar_nav_button_label"
            >
                {{ item.label }}
            </span>

        </button>

    </UiTooltip>
</template>
