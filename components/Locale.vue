<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="no">no</option>
      </select>
      <p>{{ $t("welcome") }}</p>
    </form>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
