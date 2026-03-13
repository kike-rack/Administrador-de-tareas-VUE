<script setup>
import ListaTareas from "../components/ListaTareas.vue"

defineOptions({ inheritAttrs: false })

const props = defineProps({ tasks: Array })
const emit = defineEmits(["delete-task", "toggle-task", "update-task", "add-task"])
</script>

<template>
    <div>
    <h1 class="mb-4 text-success">Tareas Completadas</h1>
    <ListaTareas
        :tasks="props.tasks.filter(t => t.completed)"
        :solo-total="true"
        @delete-task="emit('delete-task', $event)"
        @toggle-task="emit('toggle-task', $event)"
        @update-task="emit('update-task', $event)"
    />
    </div>
</template>