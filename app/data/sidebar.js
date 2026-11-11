
/* botón */

export const workspace = {
  name: "marta's Notion",
  avatar: "M"
}


/* array navegación principal del header de la sidebar */

export const primaryNavigation = [
  {
    id: 'home',
    label: 'Home',
    icon: 'house',
    shortcut: '⌘⌥G',
    type: 'navigation'
  },
  {
    id: 'chat',
    label: 'Chat',
    icon: 'message-circle',
    shortcut: '⌘⌥K',
    type: 'navigation'
  },
  {
    id: 'meetings',
    label: 'Meetings',
    icon: 'file-audio',
    shortcut: '⌘⌥Y',
    type: 'navigation'
  },
  {
    id: 'inbox',
    label: 'Inbox',
    icon: 'inbox',
    shortcut: '⌘⌥U',
    badge: 2,
    type: 'navigation'
  },
  {
    id: 'search',
    label: 'Search',
    icon: 'search',
    shortcut: '⌘K',
    type: 'action'
  }
]



/* botones secciones de la sidebar */

export const sidebarSections = [
  {
    id: "recents",
    title: "Recents",
    items: [
      {
        id: "recent-clon",
        label: "Clon de notion",
        emoji: "👀"
      }
    ]
  },

  {
    id: "workspace",
    title: "Workspace",
    items: [
      {
        id: "general",
        label: "General",
        icon: "file"
      }
    ]
  },

  {
    id: "private",
    title: "Private",
    items: [
      {
        id: "clon",
        label: "Clon de notion",
        emoji: "👀",
        children: [
          {
            id: "subpagina",
            label: "Subpágina",
            icon: "file"
          }
        ]
      },
      {
        id: "proyectos",
        label: "Proyectos",
        icon: "folder"
      }
    ]
  },

  {
    id: "apps",
    title: "Notion apps",
    items: [
      {
        id: "calendar",
        label: "Notion Calendar",
        icon: "calendar"
      }
    ]
  },

  {
    id: "utilities",
    title: "Utilities",
    items: [
      {
        id: "settings",
        label: "Settings",
        icon: "settings"
      },
      {
        id: "trash",
        label: "Trash",
        icon: "trash"
      }
    ]
  }
]
