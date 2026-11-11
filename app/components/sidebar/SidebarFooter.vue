<script setup>
import UiIcon from '~/components/ui/UiIcon.vue'
</script>

<template>
  <footer class="sidebar_footer">

    <!-- NEW BUTTON -->
    <button
      type="button"
      class="sidebar_footer_new_button"
      aria-disabled="true"
    >

      <UiIcon
        name="square-pen"
        :size="18"
      />

      <span>New</span>

    </button>

  </footer>
</template>
