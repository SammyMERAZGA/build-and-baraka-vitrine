<template>
  <nav class="floating-navbar">
    <div class="navbar-content">
      <img src="@/assets/logo3D.png" alt="Build and Baraka Logo" class="navbar-logo">
      <div class="navbar-links" :class="{ 'mobile-open': mobileMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link>
        <router-link to="/features" class="nav-link" @click="closeMobileMenu">{{ $t('nav.features') }}</router-link>
        <router-link to="/faq" class="nav-link" @click="closeMobileMenu">{{ $t('nav.faq') }}</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMobileMenu">{{ $t('nav.contact') }}</router-link>
      </div>
      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Menu">
        <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.floating-navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  max-width: 800px;
  min-width: 320px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 15px 30px;
  box-shadow: 0 8px 32px rgba(0, 161, 167, 0.1);
  z-index: 1000;
  border: 2px solid #00a1a7;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.navbar-logo {
  height: 40px;
  width: auto;
  position: absolute;
  left: 0;
}

.navbar-links {
  display: flex;
  gap: 10px;
  align-items: center;
}

.nav-link {
  color: #00a1a7;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-align: center;
}

.nav-link:hover {
  color: white;
  background: #00a1a7;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .floating-navbar {
    width: 70%;
    padding: 12px 20px;
  }
  
  .navbar-links {
    gap: 5px;
  }
  
  .nav-link {
    font-size: 14px;
    padding: 6px 12px;
  }
  
  .navbar-logo {
    height: 35px;
  }
}

@media (max-width: 600px) {
  .floating-navbar {
    width: 80%;
    padding: 10px 15px;
  }
  
  .navbar-links {
    gap: 3px;
  }
  
  .nav-link {
    font-size: 13px;
    padding: 5px 8px;
  }
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  right: 0;
  padding: 8px;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: #00a1a7;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

@media (max-width: 480px) {
  .floating-navbar {
    width: 95%;
    padding: 10px 15px;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .navbar-links {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 8px 32px rgba(0, 161, 167, 0.15);
    border: 2px solid #00a1a7;
    flex-direction: column;
    gap: 15px;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
  }
  
  .navbar-links.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .navbar-links .nav-link {
    width: 100%;
    text-align: center;
    padding: 12px 16px;
    font-size: 16px;
  }
}
</style>