<template>
  <h1>{{ title }}</h1>
  <h2>{{ description }}</h2>
  <h3>{{ date }}</h3>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  date: String,
})
</script>

<style>
.GamePanel {
  padding: 15px;
  margin-bottom: 50px;
  width: 400px;
  height: 400px;
  flex: 1 0 20%;
  max-width: 20%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.GamePanel h1 {
  text-align: center;
  display: flex;
  align-items: center;
  font-family: 'HyliaSerifBeta', serif;
  justify-content: center;
}

.GamePanel img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
}
</style>
