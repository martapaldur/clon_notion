
<script setup>

defineProps({
    text: {
        type: String,
        required: true
    },
    shortcut: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: 'bottom'
    }
})
</script>

<template>
    <span class="ui_tooltip"> 

        <!-- Coloca el elemento sobre el que aparece el tooltip -->
        <slot />

        <!-- CONTENIDO DEL TOOLTIP -->
        <span
            role="tooltip"
            class="ui_tooltip_content"
            :class="`is_${position}`"
        >

            <!-- TEXTO DEL TOOLTIP -->
            {{ text }}

            <!-- ATAJO DE TECLADO DEL TOOLTIP, SI EXISTE -->
            <span v-if="shortcut">
                {{ shortcut }}
            </span>

        </span>

    </span>
</template>
