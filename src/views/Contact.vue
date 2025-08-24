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
            <h2 class="section-title">{{ $t("contact.formTitle") }}</h2>
            <p class="form-description">{{ $t("contact.formDescription") }}</p>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="email">{{ $t("contact.emailLabel") }}</label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  :placeholder="$t('contact.emailPlaceholder')"
                  required
                />
              </div>

              <div class="form-group">
                <label for="subject">{{ $t("contact.subjectLabel") }}</label>
                <select v-model="formData.subject" id="subject" required>
                  <option value="">{{ $t("contact.subjectPlaceholder") }}</option>
                  <option value="general_feedback">{{ $t("contact.subjects.general_feedback") }}</option>
                  <option value="suggestion">{{ $t("contact.subjects.suggestion") }}</option>
                  <option value="bug_report">{{ $t("contact.subjects.bug_report") }}</option>
                  <option value="improvement">{{ $t("contact.subjects.improvement") }}</option>
                  <option value="partnership_request">{{ $t("contact.subjects.partnership_request") }}</option>
                  <option value="content_suggestion">{{ $t("contact.subjects.content_suggestion") }}</option>
                  <option value="other">{{ $t("contact.subjects.other") }}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">{{ $t("contact.messageLabel") }}</label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  :placeholder="$t('contact.messagePlaceholder')"
                  required
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? $t("contact.submitting") : $t("contact.submitButton") }}
              </button>
            </form>
          </div>

          <!-- Info Side -->
          <div class="info-side">
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
    <div v-if="showModal" class="modal-overlay" @click="showModal = false">
      <div class="modal" @click.stop>
        <div class="modal-icon">✅</div>
        <h3>{{ $t("contact.successTitle") }}</h3>
        <p>{{ $t("contact.successMessage") }}</p>
        <button @click="showModal = false">{{ $t("contact.closeButton") }}</button>
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
const showModal = ref(false);

const formData = ref({
  email: "",
  subject: "",
  message: "",
});

const submitForm = async () => {
  isSubmitting.value = true;

  setTimeout(() => {
    showModal.value = true;
    formData.value = { email: "", subject: "", message: "" };
    isSubmitting.value = false;
  }, 2000);
};
</script>

<style scoped>
.contact {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fdfe 0%, #e8f8f9 100%);
}

/* Hero Section */
.hero-section {
  padding: 120px 20px 80px;
  text-align: center;
  background: linear-gradient(135deg, #f8fdfe 0%, #e8f8f9 100%);
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-logo {
  height: 80px;
  width: auto;
  margin-bottom: 30px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* Contact Section */
.contact-section {
  padding: 80px 20px;
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
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.1);
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
  margin-bottom: 40px;
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

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 15px 20px;
  border: 2px solid #00a1a7;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: white;
  color: #333;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #008a8f;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 18px 40px;
  background: #00a1a7;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  background: #008a8f;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Info Side */
.info-side {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 161, 167, 0.08);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
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

/* Modal */
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

.modal {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.modal h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 15px;
}

.modal p {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.modal button {
  padding: 12px 30px;
  background: #00a1a7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal button:hover {
  background: #008a8f;
}

/* Responsive */
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

  .section-title {
    font-size: 2rem;
  }

  .form-side {
    padding: 30px;
  }

  .info-card {
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 15px 60px;
  }

  .contact-section {
    padding: 60px 15px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-logo {
    height: 60px;
  }

  .form-side {
    padding: 20px;
  }
}
</style>