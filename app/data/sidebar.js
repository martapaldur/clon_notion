
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



/* array de secciones de la sidebar */

export const sidebarSections = [
  {
    id: "recents",
    title: "Recents",
    headerVariant: "pages",
    headerActions: ["arrow-up-right", "ellipsis"],

    items: [
      {
        id: "recent-clon",
        label: "Clon de notion",
        emoji: "👀",
        active: true
      },
      {
        id: "recent-ejercicio-js",
        label: "Ejercicio 1 J.S. Básico",
        emoji: "💥"
      },
      {
        id: "recent-programacion",
        label: "Programación para diseñadores y aavv",
        emoji: "🎂"
      },
      {
        id: "recent-master",
        label: "1S Máster",
        emoji: "👁️"
      },
      {
        id: "recent-interfaces",
        label: "Interfaces gráficas de usuario",
        emoji: "💻"
      },
      {
        id: "recent-segundo-cuatrimestre",
        label: "Segundo cuatri 4º",
        emoji: "🐁"
      },
      {
        id: "recent-tecnologia",
        label: "Tecnología 2035",
        emoji: "📗"
      },
      {
        id: "recent-interfaz-cultura",
        label: "Interface y cultura",
        emoji: "📗"
      },
      {
        id: "recent-apuntes",
        label: "Apuntes",
        emoji: "📝"
      },
      {
        id: "recent-proyectos",
        label: "Proyectos de diseño interactivo I",
        emoji: "⭐"
      }
    ]
  },

  {
    id: "workspace",
    title: "Workspace",
    headerActions: ['plus', 'ellipsis'],
    items: [
      {
        id: "workspace-transhumanismoyposthumanismo",
        label: "Transhumanismo y posthumanismo",
        emoji: "🧬",
      },
      {
        id: "workspace-proteccioncompartido",
        label: "Protección compartido",
        emoji: "⚖️"
      },
      {
        id: "workspace-proteccionentornos",
        label: "Protección del diseño gráfico en entornos de plantillas y diseños predeterminados",
        emoji: "🐈‍⬛"
      }
    ]
  },


  {
    id: "private",
    title: "Private",
    headerVariant: "pages",
    headerActions: ["arrow-up-right", "plus", "ellipsis"],

    items: [
      {
        id: "private-master",
        label: "1S Máster",
        emoji: "👁️"
      },
      {
        id: "private-recursos",
        label: "Recursos diseño gráfico",
        icon: "file"
      },
      {
        id: "private-tfg",
        label: "TFG y Prácticas",
        emoji: "😈"
      },
      {
        id: "private-segundo-cuatrimestre",
        label: "Segundo cuatri 4º",
        emoji: "🐁"
      },
      {
        id: "private-primer-cuatrimestre",
        label: "primer cuatri 4º",
        emoji: "🕷️"
      },
      {
        id: "private-segundo-cuatrimestre-3",
        label: "segundo cuatri 3º",
        emoji: "🏳️‍🌈"
      }
    ]
  },


  {
    id: 'apps',
    title: 'Notion apps',
    headerVariant: 'apps',
    itemVariant: 'utility',
    headerActions: ['ellipsis'],
    items: [
      {
        id: 'calendar',
        label: 'Notion Calendar',
        icon: 'calendar',
        external: true
      },
      {
        id: 'desktop',
        label: 'Notion Desktop',
        icon: 'file',
        external: true
      }
    ]
  },

  {
    id: "utilities",
    itemVariant: "utility",

    items: [
      {
        id: "library",
        label: "Library",
        icon: "library-big"
      },
      {
        id: "my-tasks",
        label: "My Tasks",
        icon: "square-check"
      },
      {
        id: "marketplace",
        label: "Marketplace",
        icon: "shapes"
      },
      {
        id: "help",
        label: "Help",
        icon: "circle-help"
      },
      {
        id: "trash",
        label: "Trash",
        icon: "trash"
      }
    ]
  }
]
