
<script setup>
import AppSidebar from '~/components/sidebar/AppSidebar.vue'
import AppHeader from '~/components/header/AppHeader.vue'
</script>

<template>
  <div class="flex h-dvh overflow-hidden bg-page text-foreground">

    <!-- SIDEBAR -->
    <AppSidebar />


    <!-- CONTENEDOR DERECHO -->
    <div class="flex min-w-0 flex-1 flex-col">

      <!-- HEADER -->
      <AppHeader />


      <!-- MAIN -->
      <main class="min-h-0 flex-1 overflow-y-auto">
        <slot />
      </main>

    </div>

  </div>
</template>
