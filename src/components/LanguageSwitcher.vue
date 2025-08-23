<template>
  <div class="language-switcher">
    <div class="language-toggle" @click="toggleDropdown" :class="{ 'active': isOpen }">
      <div class="current-language">
        <span class="flag">{{ currentLanguage.flag }}</span>
        <span class="text">{{ currentLanguage.name }}</span>
        <svg class="arrow" :class="{ 'rotated': isOpen }" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 9L2 5h8l-4 4z"/>
        </svg>
      </div>
    </div>
    
    <div v-if="isOpen" class="language-dropdown">
      <div 
        v-for="lang in languages" 
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="language-option"
        :class="{ 'selected': lang.code === currentLocale }"
      >
        <span class="flag">{{ lang.flag }}</span>
        <span class="text">{{ lang.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

const currentLocale = computed(() => locale.value)

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === currentLocale.value) || languages[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (langCode: string) => {
  locale.value = langCode
  isOpen.value = false
  
  // Update HTML lang attribute
  document.documentElement.lang = langCode
  
  // Update HTML dir for RTL languages
  if (langCode === 'ar') {
    document.documentElement.dir = 'rtl'
  } else {
    document.documentElement.dir = 'ltr'
  }
}

const closeDropdown = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1500;
}

.language-toggle {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 161, 167, 0.2);
  border-radius: 25px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.1);
  min-width: 120px;
}

.language-toggle:hover,
.language-toggle.active {
  border-color: #00a1a7;
  box-shadow: 0 6px 20px rgba(0, 161, 167, 0.2);
  transform: translateY(-2px);
}

.current-language {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00a1a7;
  font-weight: 500;
  font-size: 14px;
}

.flag {
  font-size: 16px;
}

.text {
  flex: 1;
}

.arrow {
  transition: transform 0.3s ease;
  color: #00a1a7;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  margin-top: 5px;
  background: white;
  border: 2px solid #00a1a7;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.2);
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.language-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  color: #333;
}

.language-option:hover {
  background: #f8fdfe;
  color: #00a1a7;
}

.language-option.selected {
  background: #00a1a7;
  color: white;
}

.language-option:not(:last-child) {
  border-bottom: 1px solid rgba(0, 161, 167, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .language-switcher {
    top: 15px;
    right: 15px;
  }
  
  .language-toggle {
    padding: 8px 12px;
    min-width: 100px;
  }
  
  .current-language {
    font-size: 13px;
  }
  
  .flag {
    font-size: 14px;
  }
  
  .language-option {
    padding: 10px 12px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .language-toggle {
    min-width: 80px;
  }
  
  .text {
    display: none;
  }
  
  .language-dropdown .text {
    display: inline;
  }
}
</style>