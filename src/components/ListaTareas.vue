<script setup>
const props = defineProps({
    tasks: Array,
    soloTotal: Boolean
})

const emit = defineEmits([
    "delete-task",
    "toggle-task",
    "edit-task",
])
</script>

<template>
<div v-show="tasks.length > 0" class="d-flex gap-3 mb-3">
    <p class="text-muted mb-0">Total: <strong>{{ tasks.length }}</strong></p>
    <template v-if="!soloTotal">
        <p class="text-muted mb-0">Pendientes: <strong>{{ tasks.filter(t => !t.completed).length }}</strong></p>
        <p class="text-muted mb-0">Completadas: <strong>{{ tasks.filter(t => t.completed).length }}</strong></p>
    </template>
</div>

<p v-if="tasks.length === 0" class="text-muted fst-italic">
    No hay tareas aquí todavía.
</p>

<ul v-else class="list-group">
    <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item d-flex justify-content-between align-items-center"
    >
    <div class="d-flex align-items-center gap-2">
        <input
            class="form-check-input mt-0"
            type="checkbox"
            :checked="task.completed"
            @change="emit('toggle-task', task.id)"
            :aria-label="`Marcar '${task.text}' como ${task.completed ? 'pendiente' : 'completada'}`"
        />
        <span :class="{ 'text-decoration-line-through text-muted': task.completed }">
            {{ task.text }}
        </span>
    </div>

    <div class="d-flex gap-2">
        <button
            v-if="!task.completed"
            class="btn btn-warning btn-sm"
            @click="emit('edit-task', task)"
        > Editar
        </button>
        <button
            class="btn btn-danger btn-sm"
            @click="emit('delete-task', task.id)"
            :aria-label="`Eliminar: ${task.text}`"
        > Eliminar
        </button>
      </div>
    </li>
  </ul>
</template>