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
    <section class="contact-content-section">
      <div class="container">
        <div class="contact-layout">
          <!-- Form Side -->
          <div class="form-section">
            <div class="form-card">
              <div class="form-header">
                <h2 class="form-title">{{ $t("contact.formTitle") }}</h2>
                <p class="form-description">
                  {{ $t("contact.formDescription") }}
                </p>
              </div>

              <form @submit.prevent="submitContactForm" class="contact-form">
                <div class="form-group">
                  <label class="form-label">{{
                    $t("contact.emailLabel")
                  }}</label>
                  <div class="input-wrapper">
                    <v-icon class="input-icon">mdi-email</v-icon>
                    <input
                      v-model="formData.email"
                      type="email"
                      :placeholder="$t('contact.emailPlaceholder')"
                      class="form-input"
                      required
                    />
                    <v-icon 
                      v-if="formData.email" 
                      @click="formData.email = ''"
                      class="clear-icon"
                    >
                      mdi-close
                    </v-icon>
                  </div>
                  <div v-if="emailError" class="form-error">
                    {{ emailError }}
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">{{
                    $t("contact.subjectLabel")
                  }}</label>
                  <div class="input-wrapper">
                    <v-icon class="input-icon">mdi-tag</v-icon>
                    <select
                      v-model="formData.subject"
                      class="form-select"
                      required
                    >
                      <option value="" disabled>
                        {{ $t("contact.subjectPlaceholder") }}
                      </option>
                      <option
                        v-for="option in subjectOptions"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.title }}
                      </option>
                    </select>
                    <v-icon 
                      v-if="formData.subject" 
                      @click="formData.subject = ''"
                      class="clear-icon"
                    >
                      mdi-close
                    </v-icon>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">{{
                    $t("contact.messageLabel")
                  }}</label>
                  <div class="input-wrapper">
                    <v-icon class="input-icon textarea-icon">mdi-message-text</v-icon>
                    <textarea
                      v-model="formData.message"
                      :placeholder="$t('contact.messagePlaceholder')"
                      class="form-textarea"
                      rows="6"
                      required
                    ></textarea>
                    <v-icon 
                      v-if="formData.message" 
                      @click="formData.message = ''"
                      class="clear-icon textarea-clear"
                    >
                      mdi-close
                    </v-icon>
                  </div>
                </div>

                <button
                  type="submit"
                  class="submit-button"
                  :disabled="isSubmitting"
                  :class="{ loading: isSubmitting }"
                  style="background-color: #00a1a7 !important"
                >
                  <v-icon v-if="!isSubmitting" class="button-icon">
                    mdi-send
                  </v-icon>
                  <div v-if="isSubmitting" class="loading-spinner"></div>
                  {{
                    isSubmitting
                      ? $t("contact.submitting")
                      : $t("contact.submitButton")
                  }}
                </button>
              </form>
            </div>
          </div>

          <!-- Cards Side -->
          <div class="info-section">
            <div class="info-cards">
              <div
                v-for="(card, index) in infoCards"
                :key="index"
                class="info-card"
              >
                <div class="info-icon">{{ card.icon }}</div>
                <h3 class="info-title">{{ $t(card.title) }}</h3>
                <p class="info-description">{{ $t(card.description) }}</p>
              </div>
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
      <div class="success-modal" @click.stop>
        <div class="success-icon">✅</div>
        <h3 class="success-title">{{ $t("contact.successTitle") }}</h3>
        <p class="success-message">{{ $t("contact.successMessage") }}</p>
        <button class="modal-button" @click="showSuccessModal = false">
          {{ $t("contact.closeButton") }}
        </button>
      </div>
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const { t } = useI18n();

const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const emailError = ref("");

const formData = ref({
  email: "",
  subject: "",
  message: "",
});

// Subject options for select
const subjectOptions = computed(() => [
  { title: t("contact.subjects.general_feedback"), value: "GENERAL_FEEDBACK" },
  { title: t("contact.subjects.suggestion"), value: "SUGGESTION" },
  { title: t("contact.subjects.bug_report"), value: "BUG_REPORT" },
  { title: t("contact.subjects.improvement"), value: "IMPROVEMENT" },
  {
    title: t("contact.subjects.partnership_request"),
    value: "PARTNERSHIP_REQUEST",
  },
  {
    title: t("contact.subjects.content_suggestion"),
    value: "CONTENT_SUGGESTION",
  },
  { title: t("contact.subjects.other"), value: "OTHER" },
]);

// Info cards data
const infoCards = [
  {
    icon: "⚡",
    title: "contact.responseTime",
    description: "contact.responseTimeText",
  },
  {
    icon: "🌍",
    title: "contact.support",
    description: "contact.supportText",
  },
  {
    icon: "💬",
    title: "contact.discord",
    description: "contact.discordText",
  },
];

// Email validation function
const validateEmail = (email: string): boolean => {
  // Basic email format validation
  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(email)) {
    emailError.value = t("contact.validation.emailValid");
    return false;
  }

  // Block yopmail domains
  const yopmailDomains = [
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
    "cool.fr.nf",
    "jetable.fr.nf",
    "nospam.ze.tc",
    "nomail.xl.cx",
    "mega.zik.dj",
    "speed.1s.fr",
    "courriel.fr.nf",
    "moncourrier.fr.nf",
    "monemail.fr.nf",
    "monmail.fr.nf",
    "hide.biz.st",
    "mymail.infos.st",
  ];

  const emailDomain = email.split("@")[1]?.toLowerCase();
  if (yopmailDomains.includes(emailDomain)) {
    emailError.value = t("contact.validation.emailBlocked");
    return false;
  }

  emailError.value = "";
  return true;
};

const submitContactForm = async () => {
  // Reset email error
  emailError.value = "";

  // Validate form
  if (
    !formData.value.email ||
    !formData.value.subject ||
    !formData.value.message
  ) {
    return;
  }

  // Validate email
  if (!validateEmail(formData.value.email)) {
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await axios.post(
      "https://core.buildbaraka.com/api/contact",
      {
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
      }
    );

    if (response.status === 200) {
      showSuccessModal.value = true;
      formData.value = { email: "", subject: "", message: "" };
    } else {
      console.error("Form submission failed");
      // Handle error - could show an error message to user
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle network error - could show an error message to user
  } finally {
    isSubmitting.value = false;
  }
};
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
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #00a1a7 !important;
  margin-bottom: 15px;
  animation: slideInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--color-text-secondary, #666);
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Contact Content Section */
.contact-content-section {
  padding: 80px 20px;
  position: relative;
  z-index: 1;
  background: var(--color-bg-secondary);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  margin-bottom: 80px;
}

/* Form Section */
.form-section {
  position: relative;
}

.form-card {
  background: var(--card-bg, white);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.1);
  border: 1px solid rgba(0, 161, 167, 0.1);
  position: relative;
  overflow: hidden;
}

.form-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-primary);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.form-header {
  margin-bottom: 40px;
}

.form-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 15px;
}

.form-description {
  color: var(--color-text-secondary, #666);
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: var(--color-text-primary, #333);
  font-size: 0.95rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  color: #999;
  z-index: 1;
}

.textarea-icon {
  top: 15px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 15px 50px 15px 45px;
  border: 2px solid var(--color-primary);
  border-radius: 12px;
  font-size: 1rem;
  background: white !important;
  color: var(--color-text-primary, #333) !important;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.form-select option {
  background: white !important;
  color: #333 !important;
  padding: 10px;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  padding-top: 15px;
}

.form-error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
}

.submit-button {
  background: #00a1a7 !important;
  color: white;
  border: none;
  padding: 18px 30px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.3);
  background: #008a8f !important;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Info Section */
.info-section {
  position: sticky;
  top: 120px;
  height: fit-content;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: var(--card-bg, white);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.08);
  border: 1px solid rgba(0, 161, 167, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 161, 167, 0.12);
  border-color: var(--color-primary);
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.info-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 15px;
}

.info-description {
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
  margin: 0;
}

/* Success Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.success-modal {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 15px;
}

.success-message {
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 12px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-button:hover {
  background: var(--color-primary-dark, #008a8f);
  transform: translateY(-2px);
}

/* Additional Select Styling */
.form-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
}

select {
  background: white !important;
  color: #333 !important;
}

select option {
  background: white !important;
  color: #333 !important;
}

.clear-icon {
  position: absolute;
  right: 15px;
  color: #999;
  cursor: pointer;
  z-index: 2;
  transition: color 0.3s ease;
}

.clear-icon:hover {
  color: #666;
}

.textarea-clear {
  top: 15px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .info-section {
    position: static;
  }

  .info-cards {
    flex-direction: row;
    overflow-x: auto;
    gap: 20px;
    padding-bottom: 10px;
  }

  .info-card {
    min-width: 250px;
  }

  .form-card {
    padding: 30px;
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

  .contact-content-section {
    padding: 60px 15px;
  }

  .form-card {
    padding: 20px;
  }

  .form-input,
  .form-select,
  .form-textarea {
    padding: 12px 40px 12px 35px;
    font-size: 0.9rem;
  }

  .info-cards {
    flex-direction: column;
  }

  .info-card {
    min-width: auto;
  }

}
</style>
