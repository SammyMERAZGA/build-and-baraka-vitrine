<template>
  <div class="language-selector">
    <select 
      v-model="selectedLanguage" 
      @change="changeLanguage"
      class="language-select"
    >
      <option value="fr">🇫🇷 Français</option>
      <option value="en">🇬🇧 English</option>
      <option value="ar">🇸🇦 العربية</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const selectedLanguage = ref(locale.value)

const changeLanguage = () => {
  locale.value = selectedLanguage.value
  localStorage.setItem('language', selectedLanguage.value)
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    selectedLanguage.value = savedLanguage
    locale.value = savedLanguage
  }
})
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.language-select {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid var(--color-primary);
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.1);
}

.language-select:hover {
  border-color: var(--color-primary);
  box-shadow: 0 6px 20px rgba(0, 161, 167, 0.2);
}

.language-select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.2);
}

@media (max-width: 768px) {
  .language-selector {
    top: 15px;
    right: 15px;
  }
  
  .language-select {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>