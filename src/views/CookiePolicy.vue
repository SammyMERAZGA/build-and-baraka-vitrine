<template>
  <div class="cookie-policy">
    <!-- Language Selector -->
    <LanguageSelector />

    <!-- Floating Navbar -->
    <NavbarComponent />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <img
          src="@/assets/logo3D.png"
          alt="Build and Baraka Logo"
          class="hero-logo"
        />
        <h1 class="hero-title">{{ $t("cookiePolicy.title") }}</h1>
        <p class="hero-subtitle">{{ $t("cookiePolicy.subtitle") }}</p>
      </div>
    </section>

    <!-- Cookie Content Section -->
    <section class="cookie-content-section">
      <div class="container">
        <div class="cookie-card">
          <div class="cookie-section">
            <h2>{{ $t("cookiePolicy.what.title") }}</h2>
            <p>{{ $t("cookiePolicy.what.content") }}</p>
          </div>

          <div class="cookie-section">
            <h2>{{ $t("cookiePolicy.usage.title") }}</h2>
            <p>{{ $t("cookiePolicy.usage.content") }}</p>
          </div>

          <div class="cookie-section">
            <h2>{{ $t("cookiePolicy.types.title") }}</h2>
            <div class="cookie-types">
              <div class="cookie-type">
                <h3>{{ $t("cookiePolicy.types.essential.title") }}</h3>
                <p>{{ $t("cookiePolicy.types.essential.content") }}</p>
              </div>
              <div class="cookie-type">
                <h3>{{ $t("cookiePolicy.types.analytics.title") }}</h3>
                <p>{{ $t("cookiePolicy.types.analytics.content") }}</p>
              </div>
            </div>
          </div>

          <div class="cookie-section">
            <h2>{{ $t("cookiePolicy.control.title") }}</h2>
            <p>{{ $t("cookiePolicy.control.content") }}</p>
          </div>

          <div class="cookie-section">
            <h2>{{ $t("cookiePolicy.updates.title") }}</h2>
            <p>{{ $t("cookiePolicy.updates.content") }}</p>
          </div>

          <div class="cookie-section">
            <h2>{{ $t("cookiePolicy.contact.title") }}</h2>
            <p>{{ $t("cookiePolicy.contact.content") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

.cookie-policy {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #f8f9fa;
}

/* Hero Section */
.hero-section {
  padding: 120px 20px 60px;
  text-align: center;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-logo {
  height: 80px;
  width: auto;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 30px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Cookie Content Section */
.cookie-content-section {
  padding: 80px 20px;
  position: relative;
  z-index: 1;
}

.cookie-card {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.15);
  border: 1px solid rgba(0, 161, 167, 0.2);
  position: relative;
  overflow: hidden;
}

.cookie-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #00a1a7;
}

.cookie-section {
  margin-bottom: 40px;
}

.cookie-section:last-child {
  margin-bottom: 0;
}

.cookie-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00a1a7;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 161, 167, 0.2);
}

.cookie-section p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 15px;
}

.cookie-section p:last-child {
  margin-bottom: 0;
}

.cookie-types {
  display: grid;
  gap: 25px;
  margin-top: 20px;
}

.cookie-type {
  background: rgba(0, 161, 167, 0.05);
  padding: 25px;
  border-radius: 15px;
  border-left: 4px solid #00a1a7;
}

.cookie-type h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #00a1a7;
  margin-bottom: 15px;
}

.cookie-type p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .cookie-card {
    padding: 30px;
  }

  .cookie-section h2 {
    font-size: 1.3rem;
  }

  .cookie-type {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 15px 40px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-logo {
    height: 60px;
  }

  .cookie-content-section {
    padding: 60px 15px;
  }

  .cookie-card {
    padding: 20px;
  }

  .cookie-section h2 {
    font-size: 1.2rem;
  }

  .cookie-section p {
    font-size: 0.95rem;
  }

  .cookie-type {
    padding: 15px;
  }

  .cookie-type h3 {
    font-size: 1.1rem;
  }
}
</style>
