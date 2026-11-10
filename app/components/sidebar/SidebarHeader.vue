
<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'

defineProps({
  workspace: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex shrink-0 items-center justify-between gap-2 px-2 py-3">

    <!-- botón workspace -->
    <div class="flex min-w-0 items-center gap-2 rounded-sm px-2 py-1.5">

      <div
        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-coral text-label-small text-white"
      >
        {{ workspace.avatar }}
      </div>

      <span class="truncate text-label-medium">
        {{ workspace.name }}
      </span>

      <UiIcon name="chevron-down" :size="14" />
    </div>

    <!-- Icono para colapsar la sidebar -->
    <span
      class="shrink-0 p-2 text-foreground/60"
      title="Colapsado pendiente"
    >
      <UiIcon name="panel-close" :size="18" />
    </span>

  </div>
</template>
