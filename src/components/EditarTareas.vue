<script setup>
import { ref, watch } from "vue"

const props = defineProps({
  task: Object,    
})

const emit = defineEmits(["update-task", "close"])

const editedText = ref("")


watch(
  () => props.task,
  (newTask) => {
    editedText.value = newTask ? newTask.text : ""
  },
  { immediate: true }
)

function guardarCambios() {

  if (editedText.value.trim() === "") return

  emit("update-task", {
    id:   props.task.id,
    text: editedText.value.trim()
  })
  emit("close")
}

function cancelar() {
  emit("close")
}
</script>

<template>
  <div
    v-show="task !== null"
    class="card border-warning mt-3 p-3"
    aria-label="Panel de edición de tarea"
  >
    <h6 class="card-subtitle mb-2 text-warning fw-semibold">Editando tarea</h6>

    <div class="input-group">
      <input
        v-model="editedText"
        type="text"
        class="form-control"
        placeholder="Nuevo texto de la tarea"
        maxlength="200"
        @keyup.enter="guardarCambios"
        @keyup.escape="cancelar"
        aria-label="Texto de la tarea"
      />
      <button
        type="button"
        class="btn btn-success"
        @click="guardarCambios"
        :disabled="editedText.trim() === ''"
      >
        Guardar
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="cancelar"
      >
        Cancelar
      </button>
    </div>

    <small
      v-if="editedText.trim() === '' && task !== null"
      class="text-danger mt-1 d-block"
    >
      El texto no puede estar vacío.
    </small>
  </div>
</template>