import { ref } from 'vue'

// ========================================
// FUNCIONES PRINCIPALES DE LA SIDEBAR
// ========================================

// Usamos dos funciones para la sidebar para redimesnionarla y poder colapasarla, controlarSidebar y redimensionarSidebar

// Función para controla si se ve la sidebar y su ancho
export function controlarSidebar() {

    // Variables de apertura y width
    const isSidebarOpen = ref(true) 
    const sidebarWidth = ref(270)

    // Cerrar sidebar
    function cerrarSidebar() {
        isSidebarOpen.value = false
    }

    // Abrir sidebar
    function abrirSidebar() {
        isSidebarOpen.value = true
    }

    // Actualiza el ancho al arrastrar el borde de la sidebarr
    function cambiarAncho(nuevoAncho) {
        sidebarWidth.value = nuevoAncho
    }

    return {
        isSidebarOpen,
        sidebarWidth,
        cerrarSidebar,
        abrirSidebar,
        cambiarAncho
    }
}

// Función para rediemnsionar la sidebar (HE UTILIZADO CHATGPT PARA QUE ME AYUDASE CON ESTO proque no tenía ni idea de como hacerlo)
export function redimensionarSidebar(cambiarAncho) {

    // Variables para controlar el arrastre
    const isResizing = ref(false)
    let sidebarLeft = 0

    const minWidth = 270 //ancho mínimo de la sidebar
    const maxWidth = 600 //ancho máximo de la sidebar

    // Limita la anchura 
    function limitarAncho(valor) {
        return Math.min(maxWidth, Math.max(minWidth, valor))
    }

    // Comenzar a arrastrar 
    function empezarArrastre(event) {

        if (event.button !== 0) return

        isResizing.value = true

        // obtiene la posicion izquierda de la sidebar
        sidebarLeft = event.currentTarget
            .closest('.app_sidebar')
            .getBoundingClientRect().left

        // Seguir detectando el ratón aunque salga del borde
        event.currentTarget.setPointerCapture(event.pointerId)

        event.preventDefault()
    }

    // Actualiza la anchura mientras arrastras la sidebar
    function moverArrastre(event) {

        if (!isResizing.value) return

        const nuevoAncho = event.clientX - sidebarLeft

        cambiarAncho(limitarAncho(nuevoAncho))
    }

    // Terminar de arrastrar
    function terminarArrastre(event) {

        isResizing.value = false

        // Liberar el puntero
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
        }
    }

    return {
        isResizing,
        empezarArrastre,
        moverArrastre,
        terminarArrastre
    }
}


// ============================
// FUNCIONES NAV DE LA SIDEBAR
// ============================

export function controlarNavegacion(items) {

    // qué botón está seleccionado, por defecto es home
    const activeItem = ref('home')

    const navigationItems = items.filter(item => item.type === 'navigation') // Filtro elementos de navegación (Home, Chat, Meetings e Inbox)
    const actionItems = items.filter(item => item.type === 'action') // Filtro elementos de acción (el searchbar)

    // Cambiar qué botón está seleccionado al hacer clic
    function selectItem(item) {
        if (item.type === 'navigation') {
            activeItem.value = item.id
        }
    }

    return {
        activeItem,
        navigationItems,
        actionItems,
        selectItem
    }
}


// ========================================
// FUNCIONES PARTE CENTRAL DE LA SIDEBAR
// ========================================

//Función para desplegar y contraer las secciones
export function controlarSeccion() {

    const expanded = ref(true) // Variable que indica si la sección está desplegada

    // Cambiar entre desplegada y contraída
    function alternarSeccion() {
        expanded.value = !expanded.value
    }

    return {
        expanded,
        alternarSeccion
    }
}
