<script setup>
import { ref } from "vue"
import ListaTareas  from "../components/ListaTareas.vue"
import EditarTareas from "../components/EditarTareas.vue"

defineOptions({ inheritAttrs: false })

const props = defineProps({ tasks: Array })
const emit = defineEmits(["delete-task", "toggle-task", "update-task", "add-task"])

const tareaEnEdicion = ref(null)

function abrirEditor(task) {
    tareaEnEdicion.value = task
}
function cerrarEditor() {
    tareaEnEdicion.value = null
}
</script>

<template>
<div>
    <h1 class="mb-4">Todas las tareas</h1>
    <ListaTareas
        :tasks="props.tasks"
        @delete-task="emit('delete-task', $event)"
        @toggle-task="emit('toggle-task', $event)"
        @edit-task="abrirEditor"
    />
    <EditarTareas
        :task="tareaEnEdicion"
        @update-task="emit('update-task', $event)"
        @close="cerrarEditor"
    />
</div>
</template>