<script setup>
import { ref } from "vue"

const emit = defineEmits(["add-task"])

const newTask = ref("")

function añadirTarea() {
    if (newTask.value.trim() === "") return
    emit("add-task", newTask.value.trim())
    newTask.value = ""
}
</script>

<template>

    <form @submit.prevent="añadirTarea" class="card p-4 shadow-sm">
    <div class="mb-3">

        <label for="nueva-tarea" class="form-label fw-semibold">Nueva tarea</label>
        <input
        id="nueva-tarea"
        v-model="newTask"
        type="text"
        class="form-control"
        placeholder="Ej: Comprar leche, estudiar Vue..."
        autocomplete="off"
        maxlength="200"
        />
    </div>

    <button type="submit" class="btn btn-primary">
        Agregar
    </button>
    </form>
</template>