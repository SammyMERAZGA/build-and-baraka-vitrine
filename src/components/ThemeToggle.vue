<template>
  <div class="theme-toggle">
    <button 
      @click="toggleTheme" 
      class="theme-button"
      :aria-label="isDark ? $t('theme.switchToLight') : $t('theme.switchToDark')"
    >
      <div class="theme-icon">
        <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <!-- Sun icon -->
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <!-- Moon icon -->
          <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
        </svg>
      </div>
      <span class="theme-text">{{ isDark ? $t('theme.light') : $t('theme.dark') }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const applyTheme = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark-theme')
    root.classList.remove('light-theme')
  } else {
    root.classList.add('light-theme')
    root.classList.remove('dark-theme')
  }
}

onMounted(() => {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

// Watch for theme changes and apply them
watch(isDark, () => {
  applyTheme()
}, { immediate: true })
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1500;
}

.theme-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 161, 167, 0.2);
  border-radius: 25px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.1);
  color: #00a1a7;
  font-weight: 500;
  font-size: 14px;
  min-width: 100px;
  font-family: 'Poppins', sans-serif;
}

.theme-button:hover {
  border-color: #00a1a7;
  box-shadow: 0 6px 20px rgba(0, 161, 167, 0.2);
  transform: translateY(-2px);
}

.theme-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.theme-button:hover .theme-icon {
  transform: rotate(15deg);
}

.theme-text {
  transition: opacity 0.3s ease;
}

/* Dark theme styles for the toggle itself */
:global(.dark-theme) .theme-button {
  background: rgba(30, 30, 30, 0.95);
  color: #f5c230;
  border-color: rgba(245, 194, 48, 0.2);
  box-shadow: 0 4px 15px rgba(245, 194, 48, 0.1);
}

:global(.dark-theme) .theme-button:hover {
  border-color: #f5c230;
  box-shadow: 0 6px 20px rgba(245, 194, 48, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .theme-toggle {
    top: 15px;
    left: 15px;
  }
  
  .theme-button {
    padding: 8px 12px;
    min-width: 80px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .theme-button {
    min-width: 60px;
  }
  
  .theme-text {
    display: none;
  }
}
</style>