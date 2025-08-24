<template>
  <div class="not-found">
    <!-- Language Selector -->
    <LanguageSelector />

    <!-- Floating Shapes Animation -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
      <div class="shape shape-6"></div>
    </div>

    <div class="error-content">
      <!-- Logo animé -->
      <div class="logo-container">
        <img
          src="@/assets/logo3D.png"
          alt="Build and Baraka Logo"
          class="error-logo"
        />
      </div>

      <!-- Code erreur -->
      <div class="error-code">404</div>
      
      <!-- Message d'erreur -->
      <h1 class="error-title">{{ $t('notFound.title') }}</h1>
      <p class="error-description">{{ $t('notFound.description') }}</p>

      <!-- Boutons d'action -->
      <div class="error-actions">
        <router-link to="/" class="home-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          {{ $t('notFound.homeButton') }}
        </router-link>
        
        <button @click="goBack" class="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          {{ $t('notFound.backButton') }}
        </button>
      </div>

      <!-- Réseaux sociaux -->
      <div class="social-section">
        <p class="social-text">{{ $t('notFound.socialText') }}</p>
        <div class="social-links">
          <a href="https://www.instagram.com/buildandbaraka?igsh=MWplMXZqbHc5bXVyOQ%3D%3D&utm_source=qr" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="social-link" 
             aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a href="https://www.tiktok.com/@buildandbaraka?_t=ZN-8z8lAkjQL6F&_r=1" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="TikTok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          
          <a href="https://discord.gg/K5cYYEAV9B" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="social-link" 
             aria-label="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'

const router = useRouter()
const { t } = useI18n()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

.not-found {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%);
  overflow: hidden;
}

.not-found::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(0, 161, 167, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(0, 161, 167, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(0, 161, 167, 0.08) 0%,
      transparent 50%
    );
  pointer-events: none;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Floating Shapes Animation */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  background: var(--shape-color);
  animation: floatUp 15s linear infinite;
}

.shape-1 {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  border-radius: 4px;
}

.shape-2 {
  right: 15%;
  width: 15px;
  height: 15px;
  animation-delay: -3s;
  border-radius: 50%;
}

.shape-3 {
  left: 20%;
  width: 25px;
  height: 25px;
  animation-delay: -6s;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.shape-4 {
  right: 25%;
  width: 18px;
  height: 18px;
  animation-delay: -9s;
  border-radius: 8px;
}

.shape-5 {
  left: 5%;
  width: 22px;
  height: 22px;
  animation-delay: -12s;
  border-radius: 50%;
}

.shape-6 {
  right: 10%;
  width: 16px;
  height: 16px;
  animation-delay: -15s;
  border-radius: 2px;
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 0;
  }
}

/* Error Content */
.error-content {
  text-align: center;
  max-width: 600px;
  padding: 40px 20px;
  position: relative;
  z-index: 2;
}

.logo-container {
  margin-bottom: 30px;
}

.error-logo {
  height: 100px;
  width: auto;
  animation: logoFloat 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 161, 167, 0.2));
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0, 161, 167, 0.3);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 15px;
  animation: slideInUp 1s ease-out;
}

.error-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
  animation: slideInUp 1s ease-out 0.2s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Action Buttons */
.error-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
  animation: slideInUp 1s ease-out 0.4s both;
}

.home-button,
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.home-button {
  background: var(--color-primary);
  color: white;
  border: none;
}

.home-button:hover {
  background: #008a8f;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.3);
}

.back-button {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.back-button:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.2);
}

/* Social Section */
.social-section {
  animation: slideInUp 1s ease-out 0.6s both;
}

.social-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: var(--color-primary);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 161, 167, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-description {
    font-size: 1.1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .home-button,
  .back-button {
    width: 200px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .error-content {
    padding: 20px 15px;
  }
  
  .error-logo {
    height: 80px;
  }
  
  .error-code {
    font-size: 4.5rem;
  }
  
  .error-title {
    font-size: 1.8rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .social-links {
    gap: 15px;
  }
  
  .social-link {
    width: 45px;
    height: 45px;
  }
}
</style>