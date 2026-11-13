<script setup>
import AppSidebar from '~/components/sidebar/AppSidebar.vue'
import AppHeader from '~/components/header/AppHeader.vue'
import UiIcon from '~/components/ui/UiIcon.vue'
import UiTooltip from '~/components/ui/UiTooltip.vue'
import { controlarSidebar } from '~/composables/sidebar.js'

// Variables y funciones que devuelve controlarSidebar().
const {
    isSidebarOpen,
    sidebarWidth,
    cerrarSidebar,
    abrirSidebar,
    cambiarAncho
} = controlarSidebar()
</script>

<template>
    <div class="app_layout"> <!-- CONTENEDOR PRINCIPAL -->

        <!--
            SIDEBAR
            v-show: muestra u oculta la sidebar.
            :width: pasa el ancho al componente.
            @collapse: ejecuta cerrarSidebar().
            @resize: ejecuta cambiarAncho() con el nuevo ancho.
        -->
        <AppSidebar
            v-show="isSidebarOpen"
            :width="sidebarWidth"
            @collapse="cerrarSidebar"
            @resize="cambiarAncho"
        />

        <div class="app_layout_content"> <!-- CONTENEDOR DERECHO -->

            <div class="app_layout_header"> <!-- HEADER -->

                <!--
                    BOTÓN CON TOOLTIP PARA ABRIR LA SIDEBAR
                    v-if: muestra el botón solo si la sidebar está cerrada.
                    UiTooltip: muestra el tooltip al pasar el cursor.
                -->
                <UiTooltip
                    v-if="!isSidebarOpen"
                    text="Open sidebar"
                    position="bottom"
                >
                    <!-- BOTÓN PARA ABRIR LA SIDEBAR -->
                    <button
                        type="button"
                        class="app_layout_open_button"
                        aria-label="Abrir barra lateral"
                        @click="abrirSidebar"
                    >
                        <span class="app_layout_open_icon">
                            <UiIcon name="chevrons-left" :size="18" />
                        </span>
                    </button>
                </UiTooltip>

                <AppHeader /> <!-- COMPONENTE DEL HEADER -->

            </div>

            <main class="app_layout_main"> <!-- CONTENIDO PRINCIPAL DE NOTION -->

                <!-- PAGE COVER -->
                <section>

                    <!-- Imagen de portada provisional -->
                    <div class="h-44 bg-neutral-500/30"></div>

                    <!-- Icono y título de la página -->
                    <div class="mx-auto max-w-3xl px-8 py-8">

                        <span class="font-emoji text-4xl">👀</span>

                        <h1 class="mt-4">
                            Clon de notion
                        </h1>

                    </div>

                </section>

                <!-- PAGE CONTENT -->
                <section class="mx-auto max-w-3xl px-8 py-8">

                    <h2>Page Content</h2>

                    <p class="mt-4">
                        Aquí aparecerán los bloques de contenido.
                    </p>

                </section>

            </main>

        </div>

    </div>
</template>
