<template>
  <div class="contact">
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
                  >
                    ✕
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
                  >
                    ✕
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
                  >
                    ✕
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
                  <span class="loading-spinner">⟳</span>
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

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const { t } = useI18n();

const isSubmitting = ref(false);
const showSuccessModal = ref(false);

const formData = ref({
  email: '',
  subject: '',
  message: ''
});

const submitContactForm = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    showSuccessModal.value = true;
    formData.value = { email: '', subject: '', message: '' };
    isSubmitting.value = false;
  }, 2000);
};
</script>

<style scoped>
.contact {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fdfe 0%, #e8f8f9 100%);
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

/* Contact Section */
.contact-section {
  padding: 80px 20px;
  position: relative;
  z-index: 1;
  background: white;
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
  color: #666;
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
  color: #333;
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
  color: #333;
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
  display: inline-block;
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
  background: white;
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
  color: #666;
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
}

.success-modal {
  background: white;
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
  color: #666;
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

}
</style>