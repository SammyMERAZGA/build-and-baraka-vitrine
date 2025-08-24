<template>
  <div class="contact">
    <!-- Language Selector -->
    <LanguageSelector />

    <!-- Floating Navbar -->
    <NavbarComponent />

    <!-- Hero Section -->
    <v-container fluid class="hero-section">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <v-img
            src="@/assets/logo3D.png"
            alt="Build and Baraka Logo"
            max-height="80"
            max-width="80"
            class="mx-auto mb-6"
          />
          <h1 class="hero-title text-primary mb-4">{{ $t("contact.title") }}</h1>
          <p class="hero-subtitle text-h6 mb-8" style="color: #666;">
            {{ $t("contact.subtitle") }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Form Section -->
    <v-container fluid class="contact-section">
      <v-container>
        <v-row>
          <!-- Form Side -->
          <v-col cols="12" lg="7">
            <v-card class="form-card pa-8" elevation="2" rounded="xl">
              <v-card-title class="text-h4 text-primary mb-2 px-0">
                {{ $t("contact.formTitle") }}
              </v-card-title>
              <v-card-text class="text-body-1 mb-6 px-0" style="color: #666;">
                {{ $t("contact.formDescription") }}
              </v-card-text>

              <v-form @submit.prevent="submitContactForm" ref="contactForm">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.email"
                      :label="$t('contact.emailLabel')"
                      :placeholder="$t('contact.emailPlaceholder')"
                      type="email"
                      variant="outlined"
                      color="primary"
                      prepend-inner-icon="mdi-email"
                      clearable
                      required
                      :rules="emailRules"
                      class="mb-2"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      v-model="formData.subject"
                      :items="subjectOptions"
                      :label="$t('contact.subjectLabel')"
                      :placeholder="$t('contact.subjectPlaceholder')"
                      variant="outlined"
                      color="primary"
                      prepend-inner-icon="mdi-tag"
                      clearable
                      required
                      :rules="requiredRules"
                      class="mb-2"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.message"
                      :label="$t('contact.messageLabel')"
                      :placeholder="$t('contact.messagePlaceholder')"
                      variant="outlined"
                      color="primary"
                      prepend-inner-icon="mdi-message-text"
                      rows="6"
                      clearable
                      required
                      :rules="requiredRules"
                      class="mb-4"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      color="primary"
                      size="large"
                      block
                      rounded="lg"
                      elevation="2"
                      :loading="isSubmitting"
                      :disabled="isSubmitting"
                      class="text-h6 py-4"
                    >
                      <v-icon start>mdi-send</v-icon>
                      {{ isSubmitting ? $t("contact.submitting") : $t("contact.submitButton") }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>

          <!-- Cards Side -->
          <v-col cols="12" lg="5">
            <v-row>
              <v-col cols="12" md="4" lg="12" v-for="(card, index) in infoCards" :key="index">
                <v-card 
                  class="info-card text-center pa-6 h-100" 
                  elevation="1" 
                  rounded="xl"
                  hover
                >
                  <div class="info-icon text-h3 mb-4">{{ card.icon }}</div>
                  <v-card-title class="text-h6 text-primary mb-3 justify-center">
                    {{ $t(card.title) }}
                  </v-card-title>
                  <v-card-text class="text-body-2" style="color: #666;">
                    {{ $t(card.description) }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Success Dialog -->
    <v-dialog v-model="showSuccessModal" max-width="400" persistent>
      <v-card class="text-center pa-6" rounded="xl">
        <div class="success-icon text-h2 mb-4">✅</div>
        <v-card-title class="text-h5 text-primary mb-3 justify-center">
          {{ $t("contact.successTitle") }}
        </v-card-title>
        <v-card-text class="text-body-1 mb-6" style="color: #666;">
          {{ $t("contact.successMessage") }}
        </v-card-text>
        <v-btn
          color="primary"
          variant="elevated"
          rounded="lg"
          @click="showSuccessModal = false"
          class="px-8"
        >
          {{ $t("contact.closeButton") }}
        </v-btn>
      </v-card>
    </v-dialog>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const { t } = useI18n();

const isSubmitting = ref(false);
const showSuccessModal = ref(false);
const contactForm = ref();

const formData = ref({
  email: '',
  subject: '',
  message: ''
});

// Form validation rules
const emailRules = [
  (v: string) => !!v || t('contact.validation.emailRequired'),
  (v: string) => /.+@.+\..+/.test(v) || t('contact.validation.emailValid')
];

const requiredRules = [
  (v: string) => !!v || t('contact.validation.required')
];

// Subject options for select
const subjectOptions = computed(() => [
  { title: t("contact.subjects.general_feedback"), value: "general_feedback" },
  { title: t("contact.subjects.suggestion"), value: "suggestion" },
  { title: t("contact.subjects.bug_report"), value: "bug_report" },
  { title: t("contact.subjects.improvement"), value: "improvement" },
  { title: t("contact.subjects.partnership_request"), value: "partnership_request" },
  { title: t("contact.subjects.content_suggestion"), value: "content_suggestion" },
  { title: t("contact.subjects.other"), value: "other" },
]);

// Info cards data
const infoCards = [
  {
    icon: "⚡",
    title: "contact.responseTime",
    description: "contact.responseTimeText"
  },
  {
    icon: "🌍",
    title: "contact.support",
    description: "contact.supportText"
  },
  {
    icon: "💬",
    title: "contact.discord",
    description: "contact.discordText"
  }
];

const submitContactForm = async () => {
  // Validate form before submission
  const { valid } = await contactForm.value.validate();
  if (!valid) return;

  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    showSuccessModal.value = true;
    formData.value = { email: '', subject: '', message: '' };
    contactForm.value.reset();
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
  padding: 120px 20px 60px !important;
  min-height: 50vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8fdfe 0%, #e8f8f9 100%);
}

.hero-title {
  font-size: 3rem !important;
  font-weight: 700 !important;
}

.hero-subtitle {
  font-size: 1.3rem !important;
}

/* Contact Section */
.contact-section {
  padding: 80px 0 !important;
  background: white;
}

/* Form Card */
.form-card {
  border: 1px solid rgba(0, 161, 167, 0.1) !important;
  box-shadow: 0 8px 32px rgba(0, 161, 167, 0.1) !important;
}

/* Info Cards */
.info-card {
  transition: all 0.3s ease !important;
  border: 1px solid rgba(0, 161, 167, 0.1) !important;
  box-shadow: 0 4px 20px rgba(0, 161, 167, 0.08) !important;
}

.info-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 12px 32px rgba(0, 161, 167, 0.15) !important;
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* Custom Vuetify theme colors */
:deep(.v-theme--light) {
  --v-theme-primary: 0, 161, 167;
  --v-theme-primary-rgb: 0, 161, 167;
}

/* Force primary color for text elements */
.text-primary {
  color: #00a1a7 !important;
}

/* Form field customization */
:deep(.v-field--variant-outlined .v-field__outline) {
  --v-field-border-color: rgb(var(--v-theme-primary));
  --v-field-border-opacity: 0.38;
}

:deep(.v-field--focused .v-field__outline) {
  --v-field-border-color: rgb(var(--v-theme-primary));
  --v-field-border-opacity: 1;
}

:deep(.v-btn--elevated) {
  box-shadow: 0 4px 16px rgba(var(--v-theme-primary-rgb), 0.3) !important;
}

:deep(.v-btn--elevated:hover) {
  box-shadow: 0 8px 24px rgba(var(--v-theme-primary-rgb), 0.4) !important;
}

/* Success icon */
.success-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem !important;
  }

  .hero-subtitle {
    font-size: 1.1rem !important;
  }

  .hero-section {
    padding: 100px 15px 60px !important;
  }

  .contact-section {
    padding: 60px 0 !important;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem !important;
  }

  .hero-section {
    padding: 80px 15px 40px !important;
  }
}
</style>