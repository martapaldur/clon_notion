
<script setup>
import { computed } from 'vue'

import {
  House,
  Sparkles,
  Video,
  Inbox,
  Search,
  FileText,
  Folder,
  CalendarDays,
  Settings,
  Trash2,
  Plus,
  ChevronDown,
  ChevronRight,
  PanelLeftClose
} from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 18
  }
})

const icons = {
  house: House,
  sparkles: Sparkles,
  video: Video,
  inbox: Inbox,
  search: Search,
  file: FileText,
  folder: Folder,
  calendar: CalendarDays,
  settings: Settings,
  trash: Trash2,
  plus: Plus,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'panel-close': PanelLeftClose
}

const selectedIcon = computed(() => {
  return icons[props.name] || FileText
})
</script>

<template>
  <component
    :is="selectedIcon"
    :size="size"
    :stroke-width="1.8"
    aria-hidden="true"
  />
</template>
