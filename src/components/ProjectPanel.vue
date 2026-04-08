<template>
  <div class="content">
    <h1 class="title">{{ title }}</h1>
    <h2 class="desc">{{ description }}</h2>
    <h3 class="date">{{ date }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  date: String,
})
</script>

<style>
.content {
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

</style>
