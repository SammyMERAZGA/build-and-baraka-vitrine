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

/* Mobile menu button - Hidden by default */
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
  z-index: 1002;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: #00a1a7;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile breakpoint - hide entire navbar, show only floating button */
@media (max-width: 600px) {
  .floating-navbar {
    background: none;
    backdrop-filter: none;
    border: none;
    box-shadow: none;
    padding: 0;
    width: auto;
    top: 20px;
    left: 20px;
    right: auto;
    transform: none;
  }
  
  .navbar-content {
    position: relative;
    justify-content: flex-start;
  }
  
  .navbar-logo {
    display: none;
  }
  
  .navbar-links {
    display: none !important;
  }
  
  .mobile-menu-btn {
    display: flex;
    position: static;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 8px 32px rgba(0, 161, 167, 0.2);
    border: 2px solid #00a1a7;
    align-items: center;
    justify-content: center;
  }
  
  /* Mobile dropdown menu */
  .navbar-links.mobile-open {
    display: flex !important;
    position: fixed;
    top: 80px;
    left: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 25px 20px;
    box-shadow: 0 10px 40px rgba(0, 161, 167, 0.2);
    border: 2px solid #00a1a7;
    flex-direction: column;
    gap: 20px;
    animation: slideDown 0.3s ease-out;
    z-index: 1001;
  }
  
  .navbar-links.mobile-open .nav-link {
    width: 100%;
    text-align: center;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.2s ease;
  }
  
  .navbar-links.mobile-open .nav-link:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 161, 167, 0.2);
  }
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
</style>