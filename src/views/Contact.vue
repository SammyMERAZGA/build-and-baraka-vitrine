<template>
  <div class="contact">
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
      </div>

      <div class="hero-content">
        <img
          src="@/assets/logo3D.png"
          alt="Build and Baraka Logo"
          class="hero-logo"
        />
        <h1 class="hero-title">{{ $t("contact.title") }}</h1>
        <p class="hero-subtitle">{{ $t("contact.subtitle") }}</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <!-- Form Side -->
          <div class="form-side">
            <div class="form-header">
              <h2 class="section-title">{{ $t("contact.formTitle") }}</h2>
              <p class="form-description">{{ $t("contact.formDescription") }}</p>
            </div>

            <form @submit.prevent="submitContactForm" class="contact-form">
              <div class="form-group">
                <label for="email" class="form-label">{{ $t("contact.emailLabel") }}</label>
                <div class="input-wrapper">
                  <input
                    v-model="formData.email"
                    type="email"
                    id="email"
                    :placeholder="$t('contact.emailPlaceholder')"
                    required
                    class="form-input"
                  />
                  <button
                    v-if="formData.email"
                    @click="formData.email = ''"
                    type="button"
                    class="clear-button"
                    :aria-label="$t('contact.clearField')"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">{{ $t("contact.subjectLabel") }}</label>
                <div class="input-wrapper">
                  <select
                    v-model="formData.subject"
                    id="subject"
                    required
                    class="form-select"
                  >
                    <option value="">{{ $t("contact.subjectPlaceholder") }}</option>
                    <option value="general_feedback">{{ $t("contact.subjects.general_feedback") }}</option>
                    <option value="suggestion">{{ $t("contact.subjects.suggestion") }}</option>
                    <option value="bug_report">{{ $t("contact.subjects.bug_report") }}</option>
                    <option value="improvement">{{ $t("contact.subjects.improvement") }}</option>
                    <option value="partnership_request">{{ $t("contact.subjects.partnership_request") }}</option>
                    <option value="content_suggestion">{{ $t("contact.subjects.content_suggestion") }}</option>
                    <option value="other">{{ $t("contact.subjects.other") }}</option>
                  </select>
                  <button
                    v-if="formData.subject"
                    @click="formData.subject = ''"
                    type="button"
                    class="clear-button"
                    :aria-label="$t('contact.clearField')"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">{{ $t("contact.messageLabel") }}</label>
                <div class="input-wrapper">
                  <textarea
                    v-model="formData.message"
                    id="message"
                    :placeholder="$t('contact.messagePlaceholder')"
                    required
                    rows="6"
                    class="form-textarea"
                  ></textarea>
                  <button
                    v-if="formData.message"
                    @click="formData.message = ''"
                    type="button"
                    class="clear-button textarea-clear"
                    :aria-label="$t('contact.clearField')"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="submit-button"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">{{ $t("contact.submitButton") }}</span>
                <span v-else class="submitting-content">
                  <svg class="loading-spinner" width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="2" fill="none">
                      <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                  {{ $t("contact.submitting") }}
                </span>
              </button>
            </form>
          </div>

          <!-- Cards Side -->
          <div class="cards-side">
            <div class="info-card">
              <div class="info-icon">⚡</div>
              <h3>{{ $t("contact.responseTime") }}</h3>
              <p>{{ $t("contact.responseTimeText") }}</p>
            </div>
            <div class="info-card">
              <div class="info-icon">🌍</div>
              <h3>{{ $t("contact.support") }}</h3>
              <p>{{ $t("contact.supportText") }}</p>
            </div>
            <div class="info-card">
              <div class="info-icon">💬</div>
              <h3>{{ $t("contact.discord") }}</h3>
              <p>{{ $t("contact.discordText") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="modal-overlay"
      @click="showSuccessModal = false"
    >
      <div class="modal-content success-modal" @click.stop>
        <div class="success-icon">✅</div>
        <h3>{{ $t("contact.successTitle") }}</h3>
        <p>{{ $t("contact.successMessage") }}</p>
        <button class="modal-close-btn" @click="showSuccessModal = false">
          {{ $t("contact.closeButton") }}
        </button>
      </div>
    </div>

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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const { t } = useI18n();

const showScrollToTop = ref(false);
const isSubmitting = ref(false);
const showSuccessModal = ref(false);

const formData = ref({
  email: '',
  subject: '',
  message: ''
});

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const submitContactForm = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    showSuccessModal.value = true;
    formData.value = { email: '', subject: '', message: '' };
    isSubmitting.value = false;
  }, 2000);
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

.contact {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.contact::before {
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
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
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

/* Hero Section */
.hero-section {
  padding: 120px 20px 60px;
  text-align: center;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 15px;
  animation: slideInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 30px;
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

/* Contact Section */
.contact-section {
  padding: 80px 20px;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Form Side */
.form-side {
  padding-right: 40px;
}

.form-header {
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 15px;
}

.form-description {
  font-size: 1.1rem;
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 8px;
  font-size: 1rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input,
.form-select,
.form-textarea {
  padding: 15px 45px 15px 20px;
  border: 2px solid #00a1a7;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
  color: var(--color-text-primary, #333);
  width: 100%;
}

.clear-button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1;
}

.clear-button:hover {
  background: #f0f0f0;
  color: #666;
}

.textarea-clear {
  top: 20px;
  transform: none;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #008a8f;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.2);
  transform: translateY(-2px);
}

.form-select {
  cursor: pointer;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  padding: 18px 40px;
  background: linear-gradient(135deg, #00a1a7, #008a8f);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 161, 167, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submitting-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Cards Side */
.cards-side {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 40px;
}

.info-card {
  background: var(--card-bg, white);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 161, 167, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 161, 167, 0.05), transparent);
  transition: left 0.5s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.15);
}

.info-card:hover::before {
  left: 100%;
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.info-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #00a1a7;
  margin-bottom: 15px;
}

.info-card p {
  color: var(--color-text-secondary, #666);
  line-height: 1.5;
}

/* Success Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.success-modal {
  background: var(--card-bg, white);
  padding: 50px;
  border-radius: 25px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.success-modal h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 15px;
}

.success-modal p {
  color: var(--color-text-secondary, #666);
  margin-bottom: 25px;
  line-height: 1.6;
}

.modal-close-btn {
  padding: 12px 30px;
  background: #00a1a7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close-btn:hover {
  background: #008a8f;
  transform: translateY(-2px);
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
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 161, 167, 0.3);
}

.scroll-to-top:hover {
  background: #008a8f;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 161, 167, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .form-side {
    padding-right: 0;
  }

  .cards-side {
    padding-left: 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .info-card {
    padding: 30px 20px;
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

  .contact-section {
    padding: 60px 15px;
  }

  .contact-content {
    gap: 40px;
  }

  .shape {
    transform: scale(0.8);
  }

  .shape-5,
  .shape-6 {
    display: none;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>