import { createRouter, createWebHistory } from "vue-router"

import TareasVista      from "../views/TareasVista.vue"
import TareasCompletadas from "../views/TareasCompletadas.vue"

import AnadirTareas     from "../views/AnadirTareas.vue"

const routes = [
  {
    path: "/",
    redirect: "/tareas"     
  },
  {
    path: "/tareas",
    component: TareasVista,
    meta: { title: "Pendientes" }
  },
  {
    path: "/completed",
    component: TareasCompletadas,
    meta: { title: "Completadas" }
  },
  {
    path: "/add",
    component: AnadirTareas,
    meta: { title: "Agregar tarea" }
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/tareas"
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})