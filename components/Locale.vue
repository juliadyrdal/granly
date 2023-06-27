<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto flex py-1.5 border-b border-gray-900/10">
      <div></div>
      <form class="ml-auto">
        <select
          v-model="locale"
          class="text-sm font-sans font-light uppercase text-slate-500 underline underline-offset-2"
        >
          <option value="en">en</option>
          <option value="no">no</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
