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

              <div class="contact-form">
                <div class="form-group">
                  <label class="form-label">{{ $t("contact.emailLabel") }}</label>
                  <v-text-field
                    v-model="formData.email"
                    type="email"
                    :placeholder="$t('contact.emailPlaceholder')"
                    prepend-inner-icon="mdi-email"
                    clearable
                    variant="outlined"
                    density="comfortable"
                    class="custom-text-field"
                    hide-details="auto"
                    required
                  />
                  <div v-if="emailError" class="form-error">{{ emailError }}</div>
                </div>

                <div class="form-group">
                  <label class="form-label">{{ $t("contact.subjectLabel") }}</label>
                  <v-select
                    v-model="formData.subject"
                    :items="subjectOptions"
                    item-title="title"
                    item-value="value"
                    :placeholder="$t('contact.subjectPlaceholder')"
                    prepend-inner-icon="mdi-tag"
                    clearable
                    variant="outlined"
                    density="comfortable"
                    class="custom-select"
                    hide-details="auto"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">{{ $t("contact.messageLabel") }}</label>
                  <v-textarea
                    v-model="formData.message"
                    :placeholder="$t('contact.messagePlaceholder')"
                    prepend-inner-icon="mdi-message-text"
                    clearable
                    variant="outlined"
                    density="comfortable"
                    rows="6"
                    class="custom-textarea"
                    hide-details="auto"
                    required
                  />
                </div>

                <v-btn
                  @click="submitContactForm"
                  color="#00a1a7"
                  variant="elevated"
                  size="large"
                  class="custom-submit-btn"
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                  prepend-icon="mdi-send"
                  block
                >
                  {{
                    isSubmitting
                      ? $t("contact.submitting")
                      : $t("contact.submitButton")
                  }}
                </v-btn>
              </div>
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
          <div class="snackbar-title">{{ $t("contact.successTitle") }}</div>
          <div class="snackbar-message">{{ $t("contact.successMessage") }}</div>
        </div>
      </div>
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="showSuccessModal = false"
        >
          {{ $t("contact.closeButton") }}
        </v-btn>
      </template>
    </v-snackbar>

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
  { title: t("contact.subjectPlaceholder"), value: "", disabled: true },
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
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 161, 167, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 161, 167, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(0, 161, 167, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 161, 167, 0.02) 0%, transparent 100%);
  background-attachment: fixed;
  animation: backgroundFloat 25s ease-in-out infinite;
}

@keyframes backgroundFloat {
  0%, 100% {
    background-position: 0% 50%, 100% 0%, 50% 100%, 0% 0%;
  }
  25% {
    background-position: 10% 40%, 90% 10%, 40% 90%, 10% 10%;
  }
  50% {
    background-position: 20% 60%, 80% 20%, 60% 80%, 20% 20%;
  }
  75% {
    background-position: 10% 40%, 90% 10%, 40% 90%, 10% 10%;
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
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
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.15);
  border: 1px solid rgba(0, 161, 167, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
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

.form-error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
}

/* Custom Submit Button */
.custom-submit-btn {
  font-family: "Poppins", sans-serif !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
  border-radius: 12px !important;
  padding: 18px 30px !important;
  margin-top: 20px !important;
  text-transform: none !important;
  transition: all 0.3s ease !important;
}

.custom-submit-btn:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.3) !important;
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
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.12);
  border: 1px solid rgba(0, 161, 167, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
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

/* Custom Vuetify Components Styling */
.custom-text-field :deep(.v-field) {
  border: 2px solid var(--color-primary) !important;
  border-radius: 12px !important;
  background: white !important;
  font-family: "Poppins", sans-serif;
}

.custom-text-field :deep(.v-field__input) {
  padding: 15px 50px 15px 50px !important;
  font-size: 1rem !important;
  color: var(--color-text-primary, #333) !important;
  min-height: 50px !important;
}

.custom-text-field :deep(.v-field--focused) {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1) !important;
}

.custom-text-field :deep(.v-field__prepend-inner) {
  padding-left: 15px !important;
}

.custom-text-field :deep(.v-field__prepend-inner .v-icon) {
  color: #999 !important;
}

.custom-text-field :deep(.v-field__append-inner) {
  padding-right: 15px !important;
}

.custom-select :deep(.v-field) {
  border: 2px solid var(--color-primary) !important;
  border-radius: 12px !important;
  background: white !important;
  font-family: "Poppins", sans-serif;
}

.custom-select :deep(.v-field__input) {
  padding: 15px 50px 15px 50px !important;
  font-size: 1rem !important;
  color: var(--color-text-primary, #333) !important;
  min-height: 50px !important;
}

.custom-select :deep(.v-field--focused) {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1) !important;
}

.custom-select :deep(.v-field__prepend-inner) {
  padding-left: 15px !important;
}

.custom-select :deep(.v-field__prepend-inner .v-icon) {
  color: #999 !important;
}

.custom-select :deep(.v-field__append-inner) {
  padding-right: 15px !important;
}

.custom-textarea :deep(.v-field) {
  border: 2px solid var(--color-primary) !important;
  border-radius: 12px !important;
  background: white !important;
  font-family: "Poppins", sans-serif;
}

.custom-textarea :deep(.v-field__input) {
  padding: 15px 50px 15px 50px !important;
  font-size: 1rem !important;
  color: var(--color-text-primary, #333) !important;
}

.custom-textarea :deep(.v-field--focused) {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1) !important;
}

.custom-textarea :deep(.v-field__prepend-inner) {
  padding-left: 15px !important;
  padding-top: 15px !important;
}

.custom-textarea :deep(.v-field__prepend-inner .v-icon) {
  color: #999 !important;
}

.custom-textarea :deep(.v-field__append-inner) {
  padding-right: 15px !important;
  padding-top: 15px !important;
}

/* Hide default Vuetify input styles that conflict */
.custom-text-field :deep(.v-field__outline),
.custom-select :deep(.v-field__outline),
.custom-textarea :deep(.v-field__outline) {
  display: none !important;
}

.custom-text-field :deep(.v-input__details),
.custom-select :deep(.v-input__details),
.custom-textarea :deep(.v-input__details) {
  padding-top: 8px !important;
  padding-left: 0 !important;
}

.custom-text-field :deep(.v-messages__message),
.custom-select :deep(.v-messages__message),
.custom-textarea :deep(.v-messages__message) {
  color: #e74c3c !important;
  font-size: 0.85rem !important;
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
