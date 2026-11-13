import { ref } from 'vue'

// ========================================
// CONTROLAR MODO CLARO Y OSCURO
// ========================================

export function controlarTema() {

    const theme = ref('dark') // Tema inicial oscuro

    // Función pata cambiar entre modo claro y oscuro
    function cambiarTema() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        document.documentElement.dataset.theme = theme.value
    }

    return {
        theme,
        cambiarTema
    }
}
