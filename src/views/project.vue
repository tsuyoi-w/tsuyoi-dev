<template>
  <!-- <div class="PanelContainer" v-if="projects && Object.keys(projects).length">
    <GamePanel
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :date="project.date"
    />
  </div>
  <div v-else>Aucun projet</div> -->
  <h1
    style="color: red; display: flex; justify-content: center; font-size: 100px; padding-top: 180px"
  >
    WORK IN PROGRESS
  </h1>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const projects = ref(null)

onMounted(async () => {
  const response = await fetch('/tsuyoi-dev/json/project.json')
  const data = await response.json()
  projects.value = Object.values(data)
})
</script>

<style>
body {
  height: 1080px;
  background: url('/public/bg.jpg') no-repeat center center;
  background-size: cover;
}
.PanelContainer {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.PanelContainer div {
  margin: 20px;
}

.PanelContainer:hover {
  cursor: pointer;
}
</style>
