<template>
  <div class="legal-notice">
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
        <h1 class="hero-title">{{ $t("legalNotice.title") }}</h1>
        <p class="hero-subtitle">{{ $t("legalNotice.subtitle") }}</p>
      </div>
    </section>

    <!-- Legal Content Section -->
    <section class="legal-content-section">
      <div class="container">
        <div class="legal-card">
          <div class="legal-section">
            <h2>{{ $t("legalNotice.editor.title") }}</h2>
            <p>{{ $t("legalNotice.editor.content") }}</p>
          </div>

          <div class="legal-section">
            <h2>{{ $t("legalNotice.hosting.title") }}</h2>
            <p>{{ $t("legalNotice.hosting.content") }}</p>
          </div>

          <div class="legal-section">
            <h2>{{ $t("legalNotice.intellectual.title") }}</h2>
            <p>{{ $t("legalNotice.intellectual.content") }}</p>
          </div>

          <div class="legal-section">
            <h2>{{ $t("legalNotice.responsibility.title") }}</h2>
            <p>{{ $t("legalNotice.responsibility.content") }}</p>
          </div>

          <div class="legal-section">
            <h2>{{ $t("legalNotice.data.title") }}</h2>
            <p>{{ $t("legalNotice.data.content") }}</p>
          </div>

          <div class="legal-section">
            <h2>{{ $t("legalNotice.contact.title") }}</h2>
            <p>{{ $t("legalNotice.contact.content") }}</p>
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

.legal-notice {
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

/* Legal Content Section */
.legal-content-section {
  padding: 80px 20px;
  position: relative;
  z-index: 1;
}

.legal-card {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.15);
  border: 1px solid rgba(0, 161, 167, 0.2);
  position: relative;
  overflow: hidden;
}

.legal-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #00a1a7;
}

.legal-section {
  margin-bottom: 40px;
}

.legal-section:last-child {
  margin-bottom: 0;
}

.legal-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00a1a7;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 161, 167, 0.2);
}

.legal-section p {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 15px;
}

.legal-section p:last-child {
  margin-bottom: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .legal-card {
    padding: 30px;
  }

  .legal-section h2 {
    font-size: 1.3rem;
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

  .legal-content-section {
    padding: 60px 15px;
  }

  .legal-card {
    padding: 20px;
  }

  .legal-section h2 {
    font-size: 1.2rem;
  }

  .legal-section p {
    font-size: 0.95rem;
  }
}
</style>
