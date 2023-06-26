<template>
  <div class="flex">
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
