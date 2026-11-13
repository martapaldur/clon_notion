<script setup>
import UiPageItem from '~/components/ui/UiPageItem.vue'
import { breadcrumbs } from '~/data/breadcrumbs.js'
</script>

<template>

    <nav class="header_breadcrumbs" aria-label="Ruta de navegación">

        <ol class="header_breadcrumbs_list">

            <!-- pintamos las paginas de los breadcrumbs desde el array -->
            <li
                v-for="(item, index) in breadcrumbs"
                :key="item.id"
                class="header_breadcrumbs_item"
                :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
            >

                <!-- SEPARADOR  -->
                <span
                    v-if="index > 0"
                    class="header_breadcrumbs_separator"
                    aria-hidden="true"
                >
                    /
                </span>

                <!-- page item -->
                <UiPageItem
                    :item="item"
                    variant="breadcrumb"
                />

            </li>

        </ol>

    </nav>
</template>
