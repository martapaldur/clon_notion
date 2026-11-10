
<script setup>
import { ref, computed } from 'vue'
import UiIcon from '~/components/ui/UiIcon.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  depth: {
    type: Number,
    default: 0
  }
})

const route = useRoute()
const expanded = ref(false)

const hasChildren = computed(() => {
  return Boolean(props.item.children?.length)
})

const isActive = computed(() => {
  const currentPage = route.query.page || 'clon'
  return currentPage === props.item.id
})
</script>

<template>
  <div>
    <div
      class="flex items-center rounded-sm text-foreground hover:bg-sidebar-hover"
      :class="{ 'bg-sidebar-active': isActive }"
      :style="{ paddingLeft: `${depth * 12}px` }"
    >
      <!-- desplegar subpaginasS -->
      <button
        v-if="hasChildren"
        type="button"
        class="flex h-8 w-6 shrink-0 items-center justify-center"
        :aria-label="expanded ? 'Contraer subpáginas' : 'Expandir subpáginas'"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        <UiIcon
          :name="expanded ? 'chevron-down' : 'chevron-right'"
          :size="14"
        />
      </button>

      <span v-else class="w-6 shrink-0"></span>

      <!-- enlaces de navegación -->
      <NuxtLink
        :to="{ path: '/', query: { page: item.id } }"
        class="flex min-w-0 flex-1 items-center gap-2 py-2 pr-2"
        :aria-current="isActive ? 'page' : undefined"
      >
        <span v-if="item.emoji" class="text-base">
          {{ item.emoji }}
        </span>

        <UiIcon
          v-else
          :name="item.icon || 'file'"
          :size="17"
        />

        <span class="min-w-0 truncate text-label-regular">
          {{ item.label }}
        </span>
      </NuxtLink>
    </div>

    <!-- Subpáginas-->
    <div v-if="hasChildren && expanded">
      <SidebarPageItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>
