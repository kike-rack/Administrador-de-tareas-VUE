<script setup>
import FormularioTareas from "../components/FormularioTareas.vue"

defineOptions({ inheritAttrs: false })

const emit = defineEmits(["add-task", "delete-task", "toggle-task", "update-task"])
</script>

<template>
    <div>
        <h1 class="mb-4 text-primary">Nueva Tarea</h1>
        <FormularioTareas @add-task="emit('add-task', $event)" />
    </div>
</template>