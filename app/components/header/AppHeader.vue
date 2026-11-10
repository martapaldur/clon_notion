
<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('dark')

onMounted(() => {
  theme.value =
    document.documentElement.dataset.theme === 'light'
      ? 'light'
      : 'dark'
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
}
</script>

<template>
  <header
    class="flex h-12 shrink-0 items-center justify-between border-b border-neutral-400/30 bg-page px-4"
  >

    <!-- AQUÍ LOS BREADCRUMBS -->
    <nav aria-label="Ruta de navegación">
      <span class="text-label-regular">
        Breadcrumbs
      </span>
    </nav>


    <!-- AQUÍ LAS ACCIONES -->
    <div class="flex items-center gap-4">

      <span class="text-label-regular">
        Acciones
      </span>

      <!-- BOTÓN TEMPORAL DE TEMA -->
      <button
        type="button"
        class="rounded-md border border-neutral-400/30 px-3 py-1 text-label-small"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}
      </button>

    </div>

  </header>
</template>
