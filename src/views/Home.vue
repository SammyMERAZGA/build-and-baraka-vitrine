<template>
  <div class="home">
    <!-- Language Selector -->
    <LanguageSelector />

    <!-- Floating Navbar -->
    <NavbarComponent />

    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Floating Shapes Animation -->
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
        <div class="shape shape-6"></div>
        <div class="shape shape-7"></div>
        <div class="shape shape-8"></div>
      </div>

      <div class="hero-content">
        <img
          src="@/assets/logo3D.png"
          alt="Build and Baraka Logo"
          class="hero-logo"
        />
        <h1 class="hero-title">{{ $t("hero.title") }}</h1>
        <p class="hero-subtitle">{{ $t("hero.subtitle") }}</p>
        <p class="hero-description">
          {{ $t("hero.description") }}
        </p>

        <div class="download-section">
          <p class="download-title">{{ $t("hero.downloadTitle") }}</p>
          <div class="store-buttons">
            <a
              href="#"
              class="custom-store-button"
              @click.prevent="showSnackbar"
            >
              <img
                src="@/assets/images/googleplay.png"
                alt="Google Play"
                class="store-icon"
              />
              <span class="store-text">{{ $t("hero.googlePlay") }}</span>
            </a>
            <a
              href="#"
              class="custom-store-button"
              @click.prevent="showSnackbar"
            >
              <img
                src="@/assets/images/applestore.png"
                alt="App Store"
                class="store-icon"
              />
              <span class="store-text">{{ $t("hero.appStore") }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">{{ $t("features.title") }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🕌</div>
            <h3>{{ $t("features.prayer.title") }}</h3>
            <p>{{ $t("features.prayer.description") }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>{{ $t("features.stories.title") }}</h3>
            <p>{{ $t("features.stories.description") }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤲</div>
            <h3>{{ $t("features.duas.title") }}</h3>
            <p>{{ $t("features.duas.description") }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📿</div>
            <h3>{{ $t("features.tasbih.title") }}</h3>
            <p>{{ $t("features.tasbih.description") }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✅</div>
            <h3>{{ $t("features.goals.title") }}</h3>
            <p>{{ $t("features.goals.description") }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>{{ $t("features.business.title") }}</h3>
            <p>{{ $t("features.business.description") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Section -->
    <section class="business-section">
      <div class="container">
        <div class="business-content">
          <div class="business-header">
            <h2 class="section-title">{{ $t("business.title") }}</h2>
            <p class="business-description">
              {{ $t("business.description") }}
            </p>
          </div>

          <div class="business-grid">
            <div class="business-card">
              <div class="business-icon">💰</div>
              <h3>{{ $t("business.strategies.title") }}</h3>
              <p>{{ $t("business.strategies.description") }}</p>
            </div>
            <div class="business-card">
              <div class="business-icon">📈</div>
              <h3>{{ $t("business.growth.title") }}</h3>
              <p>{{ $t("business.growth.description") }}</p>
            </div>
            <div class="business-card">
              <div class="business-icon">🤝</div>
              <h3>{{ $t("business.community.title") }}</h3>
              <p>{{ $t("business.community.description") }}</p>
            </div>
          </div>

          <div class="ebook-section">
            <h3 class="ebook-title">{{ $t("business.ebookTitle") }}</h3>
            <p class="ebook-description">
              {{ $t("business.ebookDescription") }}
            </p>
            <button class="ebook-button" @click="showEbookModal = true">
              {{ $t("business.ebookButton") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Ebook Modal - Ultra Simple -->
      <div
        v-if="showEbookModal"
        class="modal-overlay"
        @click="closeModal"
      >
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">×</button>
          <div class="ebook-preview">
            <img
              src="@/assets/images/cover-ebook.jpg"
              alt="Build and Baraka - Guide Entrepreneuriat Halal"
              class="ebook-cover"
            />
            <div class="ebook-info">
              <h3>Guide Entrepreneuriat Halal</h3>
              <p>Découvrez les clés pour entreprendre dans le respect des valeurs islamiques</p>

              <div class="email-form">
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Votre email"
                    class="form-input"
                    id="ebookEmail"
                    required
                  />
                  <div class="form-error" id="emailError" style="display: none;">
                    Email requis
                  </div>
                </div>

                <button
                  type="button"
                  class="submit-button"
                  id="submitBtn"
                  onclick="submitEbook()"
                >
                  Télécharger gratuitement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scroll to Top Button -->
    <button
      v-if="showScrollToTop"
      @click="scrollToTop"
      class="scroll-to-top"
      :aria-label="$t('scrollToTop')"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 14l5-5 5 5z" />
      </svg>
    </button>

    <!-- Footer -->
    <FooterComponent />

    <!-- Success Snackbar -->
    <v-snackbar
      v-model="showSuccessModal"
      timeout="6000"
      location="top"
      color="success"
      class="custom-snackbar"
    >
      <div class="snackbar-content">
        <v-icon class="snackbar-icon">mdi-check-circle</v-icon>
        <div class="snackbar-text">
          <div class="snackbar-title">{{ $t("modal.success") }}</div>
          <div class="snackbar-message">{{ $t("modal.success") }}</div>
        </div>
      </div>
      <template v-slot:actions>
        <v-btn variant="text" @click="showSuccessModal = false">
          {{ $t("contact.closeButton") }}
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Snackbar -->
    <SnackbarComponent
      :visible="snackbarVisible"
      :message="snackbarMessage"
      :type="snackbarType"
      @close="closeSnackbar"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
// Vuetify components for success snackbar only
import { VSnackbar, VIcon, VBtn } from 'vuetify/components';

const { t } = useI18n();

const showEbookModal = ref(false);
const showScrollToTop = ref(false);
const showSuccessModal = ref(false);

// Ces variables ne sont plus utilisées car le formulaire utilise du JavaScript pur
// const isSubmitting = ref(false);
// const emailError = ref("");
// const formData = ref({ email: "" });

// Snackbar state
const snackbarVisible = ref(false);
const snackbarMessage = ref(
  "En cours de développement, bientôt disponible insh'Allah"
);
const snackbarType = ref<"info" | "success" | "warning" | "error">("info");

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Ces fonctions ne sont plus utilisées car le formulaire utilise du JavaScript pur
// const clearEmailError = () => { emailError.value = ""; };
// const validateEmail = (email: string): boolean => { ... }

const closeModal = () => {
  showEbookModal.value = false;
};

// Fonction JavaScript pure pour le submit avec types corrects
(window as any).submitEbook = () => {
  const emailInput = document.getElementById('ebookEmail') as HTMLInputElement;
  const errorDiv = document.getElementById('emailError') as HTMLDivElement;
  const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
  
  if (!emailInput || !errorDiv || !submitBtn) return;
  
  const email = emailInput.value.trim();
  
  // Reset error
  errorDiv.style.display = 'none';
  
  if (!email) {
    errorDiv.textContent = 'Email requis';
    errorDiv.style.display = 'block';
    return;
  }
  
  if (!email.includes('@') || !email.includes('.')) {
    errorDiv.textContent = 'Email invalide';
    errorDiv.style.display = 'block';
    return;
  }
  
  // Loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  
  fetch("https://core.buildbaraka.com/api/ebook-download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.toLowerCase(),
    }),
  })
  .then(response => {
    if (response.ok) {
      showSuccessModal.value = true;
      emailInput.value = '';
      setTimeout(() => {
        showEbookModal.value = false;
      }, 2000);
    } else {
      throw new Error('Erreur réseau');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showSnackbarWithMessage('Erreur lors de l\'envoi', 'error');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Télécharger gratuitement';
  });
};

// Snackbar functions
const showSnackbar = () => {
  snackbarVisible.value = true;
};

const showSnackbarWithMessage = (
  message: string,
  type: "info" | "success" | "warning" | "error" = "info"
) => {
  snackbarMessage.value = message;
  snackbarType.value = type;
  snackbarVisible.value = true;
};

const closeSnackbar = () => {
  snackbarVisible.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

.home {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.home::before {
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
      rgba(245, 194, 48, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(0, 161, 167, 0.05) 0%,
      transparent 50%
    );
  pointer-events: none;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Hero Section */
.hero-section {
  padding: 120px 20px 80px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Floating Shapes Animation */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.shape {
  position: absolute;
  background: rgba(245, 194, 48, 0.12);
  border-radius: 50%;
  animation: floatUp infinite ease-in-out;
}

.shape-1 {
  width: 20px;
  height: 20px;
  left: 5%;
  animation-duration: 45s;
  animation-delay: 0s;
}

.shape-2 {
  width: 30px;
  height: 30px;
  left: 95%;
  animation-duration: 50s;
  animation-delay: -10s;
  border-radius: 8px;
}

.shape-3 {
  width: 15px;
  height: 15px;
  left: 2%;
  animation-duration: 40s;
  animation-delay: -20s;
}

.shape-4 {
  width: 25px;
  height: 25px;
  left: 98%;
  animation-duration: 55s;
  animation-delay: -15s;
  border-radius: 6px;
}

.shape-5 {
  width: 18px;
  height: 18px;
  left: 8%;
  animation-duration: 42s;
  animation-delay: -25s;
  border-radius: 9px;
}

.shape-6 {
  width: 22px;
  height: 22px;
  left: 92%;
  animation-duration: 48s;
  animation-delay: -5s;
}

.shape-7 {
  width: 16px;
  height: 16px;
  left: 3%;
  animation-duration: 52s;
  animation-delay: -30s;
  border-radius: 4px;
}

.shape-8 {
  width: 28px;
  height: 28px;
  left: 97%;
  animation-duration: 46s;
  animation-delay: -12s;
  border-radius: 14px;
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

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-logo {
  height: 120px;
  width: auto;
  margin-bottom: 20px;
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 20px;
  animation: slideInUp 1s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: #00a1a7;
  margin-bottom: 30px;
}

.hero-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.download-section {
  margin-top: 40px;
}

.download-title {
  color: #00a1a7;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 25px;
  text-align: center;
}

.store-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.custom-store-button {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 2px solid #00a1a7;
  border-radius: 15px;
  padding: 12px 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.1);
  min-width: 160px;
}

.custom-store-button:hover {
  background: #00a1a7;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.3);
}

.store-icon {
  height: 24px;
  width: 24px;
  object-fit: contain;
}

.store-text {
  color: #00a1a7;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.custom-store-button:hover .store-text {
  color: white;
}

/* Features Section */
.features-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #00a1a7;
  text-align: center;
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.feature-card {
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid rgba(0, 161, 167, 0.2);
  background: white;
  color: #333;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 161, 167, 0.1);
  border-color: #00a1a7;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #00a1a7;
  margin-bottom: 15px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Business Section */
.business-section {
  padding: 100px 20px;
  color: #333;
}

.business-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.business-section .section-title {
  color: #00a1a7;
}

.business-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #666;
}

.business-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.business-header {
  text-align: center;
  margin-bottom: 50px;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.business-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(0, 161, 167, 0.2);
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.1);
}

.business-card:hover {
  transform: translateY(-5px);
  border-color: #00a1a7;
  box-shadow: 0 15px 40px rgba(0, 161, 167, 0.15);
}

.business-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.business-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #00a1a7;
}

.business-card p {
  color: #666;
  line-height: 1.6;
}

.ebook-section {
  background: white;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  border: 2px solid #00a1a7;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.15);
}

.ebook-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 161, 167, 0.1),
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.ebook-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  color: #00a1a7;
}

.ebook-description {
  margin-bottom: 25px;
  color: #666;
  position: relative;
  z-index: 2;
}

.ebook-button {
  background: #00a1a7;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.3);
}

.ebook-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 161, 167, 0.5);
  background: #008a8f;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 20px;
  max-width: 800px;
  width: 90%;
  position: relative;
  animation: slideInScale 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 161, 167, 0.15);
  border: 2px solid #00a1a7;
}

@keyframes slideInScale {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #00a1a7;
}

.modal-content h3 {
  color: #00a1a7;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.modal-content p {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.ebook-preview {
  display: flex;
  gap: 30px;
  align-items: center;
}

.ebook-cover {
  width: 200px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.ebook-cover:hover {
  transform: scale(1.05);
}

.ebook-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ebook-info h3 {
  font-size: 1.8rem;
  color: #00a1a7;
  margin: 0;
}

.ebook-info p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.download-button {
  background: linear-gradient(135deg, #00a1a7, #008a8f);
  color: white;
  padding: 15px 25px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.3);
}

.download-button:hover {
  background: linear-gradient(135deg, #008a8f, #006f75);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.4);
}

.download-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.download-button:disabled:hover {
  background: linear-gradient(135deg, #00a1a7, #008a8f);
  transform: none;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.3);
}

/* Email Form Styles */
.email-form {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.form-input {
  width: 100%;
  padding: 15px;
  border: 2px solid #00a1a7;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: #333;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #00a1a7;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1);
}

.form-error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
}

.submit-button {
  background: #00a1a7;
  color: white;
  border: none;
  padding: 18px 30px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: #008a8f;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}


/* Custom Snackbar Styling */
.custom-snackbar :deep(.v-snackbar__wrapper) {
  border-radius: 15px !important;
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.2) !important;
  font-family: "Poppins", sans-serif !important;
}

.snackbar-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.snackbar-icon {
  font-size: 1.5rem !important;
  color: white !important;
}

.snackbar-text {
  flex: 1;
}

.snackbar-title {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

.snackbar-message {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
}

.custom-snackbar :deep(.v-btn) {
  font-family: "Poppins", sans-serif !important;
  font-weight: 500 !important;
}

/* Responsive Design for Ebook Modal */
@media (max-width: 768px) {
  .ebook-preview {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .ebook-cover {
    width: 150px;
  }

  .ebook-info h3 {
    font-size: 1.5rem;
  }

  .download-button {
    padding: 12px 20px;
    font-size: 1rem;
  }
}


.privacy-note {
  font-size: 0.9rem;
  color: #999;
  margin-top: 15px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 15px 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-logo {
    height: 80px;
  }

  .shape {
    transform: scale(0.8);
  }

  .shape-7,
  .shape-8 {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 15px 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-logo {
    height: 80px;
  }

  .shape {
    transform: scale(0.6);
  }

  .shape-4,
  .shape-5,
  .shape-6,
  .shape-7,
  .shape-8 {
    display: none;
  }

  .store-buttons {
    flex-direction: column;
    align-items: center;
  }

  .custom-store-button {
    min-width: 200px;
  }

  .ebook-section {
    padding: 30px 20px;
  }

  .business-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .business-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* FAQ Section */
.faq-section {
  padding: 100px 20px;
  background: #f8fdfe;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.faq-item:hover {
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.15);
  transform: translateY(-2px);
}

.faq-item.active {
  border: 2px solid #00a1a7;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  background: white;
  transition: background 0.3s ease;
}

.faq-item.active .faq-question {
  background: #f8fdfe;
}

.faq-question h3 {
  color: #00a1a7;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding-right: 20px;
}

.faq-icon {
  color: #00a1a7;
  font-size: 1.5rem;
  font-weight: bold;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 161, 167, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.faq-item.active .faq-icon {
  background: #00a1a7;
  color: white;
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 30px 25px 30px;
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

.faq-answer p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* FAQ Responsive */
@media (max-width: 768px) {
  .faq-section {
    padding: 80px 20px;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question h3 {
    font-size: 1rem;
  }

  .faq-answer {
    padding: 0 20px 20px 20px;
  }
}

/* Scroll to Top Button */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #00a1a7;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 161, 167, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-to-top:hover {
  background: #008a8f;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.4);
}

.scroll-to-top svg {
  transition: transform 0.3s ease;
}

.scroll-to-top:hover svg {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}
</style>
