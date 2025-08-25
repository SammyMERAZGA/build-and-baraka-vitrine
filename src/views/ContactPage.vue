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
                  <label class="form-label">Email</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="Votre email"
                    class="form-input"
                    required
                  />
                  <div v-if="emailError" class="form-error">
                    {{ emailError }}
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Sujet</label>
                  <select
                    v-model="formData.subject"
                    class="form-select"
                    required
                  >
                    <option value="" disabled>Choisir un sujet</option>
                    <option value="GENERAL_FEEDBACK">
                      Commentaires généraux
                    </option>
                    <option value="SUGGESTION">Suggestion</option>
                    <option value="BUG_REPORT">Rapport de bug</option>
                    <option value="IMPROVEMENT">Amélioration</option>
                    <option value="PARTNERSHIP_REQUEST">
                      Demande de partenariat
                    </option>
                    <option value="CONTENT_SUGGESTION">
                      Suggestion de contenu
                    </option>
                    <option value="OTHER">Autre</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Message</label>
                  <textarea
                    v-model="formData.message"
                    placeholder="Votre message"
                    class="form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="submit-button"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? "Envoi en cours..." : "Envoyer" }}
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
        <v-btn variant="text" @click="showSuccessModal = false">
          {{ $t("contact.closeButton") }}
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const emailError = ref("");

const formData = ref({
  email: "",
  subject: "",
  message: "",
});

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
  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(email)) {
    emailError.value = "Email invalide";
    return false;
  }
  
  emailError.value = "";
  return true;
};

const submitContactForm = () => {
  if (
    !formData.value.email ||
    !formData.value.subject ||
    !formData.value.message
  ) {
    return;
  }

  if (!validateEmail(formData.value.email)) {
    return;
  }

  if (formData.value.message.length < 10) {
    alert("Le message doit faire au moins 10 caractères");
    return;
  }

  isSubmitting.value = true;

  fetch("https://core.buildbaraka.com/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  })
    .then(() => {
      showSuccessModal.value = true;
      formData.value = { email: "", subject: "", message: "" };
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      isSubmitting.value = false;
    });
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

.contact {
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
  color: #00a1a7 !important;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 30px;
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
  background: rgba(255, 255, 255, 0.9);
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
  background: rgba(255, 255, 255, 0.98);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.15);
  border: 1px solid rgba(0, 161, 167, 0.2);
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
  background: #00a1a7;
}

.form-header {
  margin-bottom: 40px;
}

.form-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.form-description {
  color: #666;
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
  color: #333;
  font-size: 0.95rem;
}

.form-error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
}

.form-select {
  width: 100%;
  padding: 15px;
  border: 2px solid #00a1a7;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: #333;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
}

.form-select:focus {
  outline: none;
  border-color: #00a1a7;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1);
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
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.12);
  border: 1px solid rgba(0, 161, 167, 0.2);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 161, 167, 0.12);
  border-color: #00a1a7;
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.info-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.info-description {
  color: #666;
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
  border: 2px solid #00a1a7 !important;
  border-radius: 12px !important;
  background: white !important;
  font-family: "Poppins", sans-serif;
}

.custom-text-field :deep(.v-field__input) {
  padding: 15px 50px 15px 50px !important;
  font-size: 1rem !important;
  color: #333 !important;
  min-height: 50px !important;
}

.custom-text-field :deep(.v-field--focused) {
  border-color: #00a1a7 !important;
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
  border: 2px solid #00a1a7 !important;
  border-radius: 12px !important;
  background: white !important;
  font-family: "Poppins", sans-serif;
}

.custom-select :deep(.v-field__input) {
  padding: 15px 50px 15px 50px !important;
  font-size: 1rem !important;
  color: #333 !important;
  min-height: 50px !important;
}

.custom-select :deep(.v-field--focused) {
  border-color: #00a1a7 !important;
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
  border: 2px solid #00a1a7 !important;
  border-radius: 12px !important;
  background: white !important;
  font-family: "Poppins", sans-serif;
}

.custom-textarea :deep(.v-field__input) {
  padding: 15px 50px 15px 50px !important;
  font-size: 1rem !important;
  color: #333 !important;
}

.custom-textarea :deep(.v-field--focused) {
  border-color: #00a1a7 !important;
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

/* Native HTML Form Elements */
.form-input,
.form-select,
.form-textarea {
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

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #00a1a7;
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1);
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
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
  margin-top: 20px;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: #008a8f;
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
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
