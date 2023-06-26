<template>
  <button
    type="button"
    class="inline-flex items-center gap-x-2 rounded-lg bg-theme-grey-dark px-5 py-2 text-sm font-sans font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {{ $t(text) }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
});
</script>
