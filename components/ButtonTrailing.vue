<template>
    <button type="button" class="inline-flex items-center gap-x-2 rounded-lg bg-theme-grey-dark px-5 py-3.5 text-sm font-sans font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {{ text }}
      <ArrowRightIcon class="-mr-0.5 h-5 w-5 text-theme-accent" aria-hidden="true" />
    </button>
  </template>
  
  <script setup>
  import { ArrowRightIcon } from '@heroicons/vue/20/solid'

  defineProps({
        text: String,
    })
  </script>