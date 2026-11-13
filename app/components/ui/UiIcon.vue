
<script setup>
import { icons } from '~/data/icons.js'

// Recibimos el nombre y el tamaño del icono
defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 18
    }
})
</script>

<template>
    <!--COMPONENTE DE ICONO
        :is selecciona el icono del objeto icons según su nombre, si no existe, utilizamos el icono file por defecto-->
    <component
        :is="icons[name] || icons.file"
        :size="size"
        :stroke-width="1.8"
        aria-hidden="true"
    />
</template>
