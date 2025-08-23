<template>
  <nav class="floating-navbar">
    <div class="navbar-content">
      <img src="@/assets/logo3D.png" alt="Build and Baraka Logo" class="navbar-logo">
      <div class="navbar-links">
        <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
        <router-link to="/features" class="nav-link">{{ $t('nav.features') }}</router-link>
        <router-link to="/faq" class="nav-link">{{ $t('nav.faq') }}</router-link>
        <router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navigation component logic
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
    width: 90%;
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

@media (max-width: 480px) {
  .floating-navbar {
    width: 95%;
    padding: 10px 15px;
  }
  
  .navbar-links {
    display: none;
  }
}
</style>