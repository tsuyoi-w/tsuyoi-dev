<template>
  <div class="PanelContainer" v-if="projects && Object.keys(projects).length">
    <GamePanel
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :date="project.date"
    />
  </div>
  <div v-else>Aucun projet</div>
</template>

<script setup>
import GamePanel from '@/components/ProjectPanel.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const projects = ref(null)

onMounted(async () => {
  const response = await fetch('/json/project.json')
  const data = await response.json()
  projects.value = Object.values(data)
})
</script>

<style>
.PanelContainer {
  background: url('/public/bg.jpg') no-repeat center center;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.PanelContainer:hover {
  cursor: pointer;
}
</style>
