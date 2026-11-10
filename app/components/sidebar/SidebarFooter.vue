
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
</script>

<template>
  <footer class="shrink-0 border-t border-neutral-400/25 p-3">

    <button
      type="button"
      disabled
      title="Creación de páginas pendiente"
      class="flex w-full items-center justify-center gap-2 rounded-full bg-sidebar-active px-4 py-3 text-label-medium opacity-70"
    >
      <UiIcon name="plus" :size="18" />
      <span>New</span>
    </button>

  </footer>
</template>
