<template>
  <Transition name="snackbar">
    <div v-if="visible" class="snackbar" :class="type">
      <div class="snackbar-content">
        <span class="snackbar-text">{{ message }}</span>
        <button @click="close" class="snackbar-close" aria-label="Fermer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
export interface Props {
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  visible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 5000
})

const emit = defineEmits<{
  close: []
}>()

const close = () => {
  emit('close')
}

// Auto close après la durée spécifiée
watchEffect(() => {
  if (props.visible) {
    const timer = setTimeout(() => {
      close()
    }, props.duration)
    
    return () => clearTimeout(timer)
  }
})
</script>

<script lang="ts">
import { watchEffect } from 'vue'
export default {
  name: 'SnackbarComponent'
}
</script>

<style scoped>
.snackbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 161, 167, 0.95);
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 161, 167, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 9999;
  max-width: 90vw;
  min-width: 320px;
}

.snackbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.snackbar-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.snackbar-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  flex-shrink: 0;
}

.snackbar-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Variants */
.snackbar.success {
  background: rgba(34, 197, 94, 0.95);
  box-shadow: 0 8px 32px rgba(34, 197, 94, 0.3);
}

.snackbar.warning {
  background: rgba(251, 191, 36, 0.95);
  box-shadow: 0 8px 32px rgba(251, 191, 36, 0.3);
  color: #1a1a1a;
}

.snackbar.error {
  background: rgba(239, 68, 68, 0.95);
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.3);
}

/* Transitions */
.snackbar-enter-active,
.snackbar-leave-active {
  transition: all 0.3s ease;
}

.snackbar-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.snackbar-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

/* Responsive */
@media (max-width: 480px) {
  .snackbar {
    top: 15px;
    left: 15px;
    right: 15px;
    transform: none;
    min-width: auto;
  }
  
  .snackbar-text {
    font-size: 13px;
  }
}
</style>