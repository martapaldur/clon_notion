
<script setup>
import { computed } from 'vue'

/* importo los iconos de lucide vue*/
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
  PanelLeftClose,
  MessageCircle,
  FileAudio,
  ChevronsLeft,
  Ellipsis,
  ArrowUpRight,
  LibraryBig,
  SquareCheck,
  Shapes,
  CircleHelp,
  SquarePen
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

/* objeto icons */
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
  'panel-close': PanelLeftClose,
  'message-circle': MessageCircle,
  'file-audio': FileAudio,
  'chevrons-left': ChevronsLeft,
  ellipsis: Ellipsis,
  'arrow-up-right': ArrowUpRight,
  'library-big': LibraryBig,
  'square-check': SquareCheck,
  shapes: Shapes,
  'circle-help': CircleHelp,
  'square-pen': SquarePen
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
