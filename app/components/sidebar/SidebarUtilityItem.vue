<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

// Recibimos los datos del elemento desde SidebarSection.vue.
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="sidebar_utility_item"> 

        <!-- ICONo -->
        <span class="sidebar_utility_item_icon">
            <UiIcon
                :name="item.icon || 'file'"
                :size="18"
            />
        </span>

        <!-- Nombre -->
        <span class="sidebar_utility_item_label">
            {{ item.label }}
        </span>

        <!--muestra el icono de enlace únicamente si item.external es true -->
        <span
            v-if="item.external"
            class="sidebar_utility_item_external"
            aria-hidden="true"
        >
            <UiIcon name="arrow-up-right" :size="16" />
        </span>

    </div>
</template>
