
<script setup>
import HeaderBreadcrumbs from './HeaderBreadcrumbs.vue'
import UiButton from '~/components/ui/UiButton.vue'
import { headerButtons } from '~/data/header.js'
import { controlarTema } from '~/composables/theme.js'

// Importamos la variable y la función para cambiar el tema de color
const { theme, cambiarTema } = controlarTema()
</script>

<template>
    <header class="app_header"> 

        <!-- BREADCRUMBS -->
        <HeaderBreadcrumbs />

        <div class="app_header_buttons"> <!-- CONTENEDOR BOTONES DERECHOS -->

            <!-- GENERAMOS LOS BOTONES DESDE EL ARRAY -->
            <UiButton
                v-for="item in headerButtons"
                :key="item.id"
                :label="item.label"
                :icon="item.icon"
                :tooltip="item.tooltip"
                :shortcut="item.shortcut"
            />

            <!-- BOTÓN TEMPORAL PARA CAMBIAR EL TEMA DE DARK A LIGHT -->
            <button
                type="button"
                class="app_header_theme_button"
                @click="cambiarTema"
            >
                {{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}
            </button>

        </div>

    </header>
</template>
