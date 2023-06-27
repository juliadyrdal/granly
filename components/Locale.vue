<template>
  <div class="mx-auto flex max-w-7xl py-2 px-6 lg:px-8">
    <div></div>
    <form class="ml-auto">
      <select v-model="locale">
        <option value="en">en</option>
        <option value="no">no</option>
      </select>
    </form>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
