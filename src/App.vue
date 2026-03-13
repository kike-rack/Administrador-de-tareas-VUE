<script setup>
import { ref } from "vue"

let nextId = 1
const tasks = ref([])

function addTask(text) {
  tasks.value.push({ id: nextId++, text, completed: false })
}
function updateTask({ id, text }) {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.text = text
}
function deleteTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
function toggleTask(id) {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.completed = !task.completed
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <span class="navbar-brand">Administrador de Tareas</span>
      <div>
        <router-link class="btn btn-outline-light me-2" to="/tareas">Pendientes</router-link>
        <router-link class="btn btn-outline-light me-2" to="/completed">Completadas</router-link>
        <router-link class="btn btn-success" to="/add">Agregar</router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component
          :is="Component"
          :key="route.path"
          :tasks="tasks"
          @add-task="addTask"
          @delete-task="deleteTask"
          @toggle-task="toggleTask"
          @update-task="updateTask"
        />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>