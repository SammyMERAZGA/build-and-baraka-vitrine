<template>
  <div class="faq">
    <!-- Language Selector -->
    <LanguageSelector />

    <!-- Floating Navbar -->
    <NavbarComponent />

    <!-- Hero Section -->
    <section class="hero-section">
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
        <h1 class="hero-title">{{ $t("faqPage.title") }}</h1>
        <p class="hero-subtitle">{{ $t("faqPage.subtitle") }}</p>
      </div>
    </section>

    <!-- FAQ Content Section -->
    <section class="faq-content-section">
      <div class="container">
        <div class="faq-layout">
          <!-- FAQ Categories -->
          <div class="faq-categories">
            <h3>{{ $t("faqPage.categoriesTitle") }}</h3>
            <div class="category-list">
              <button
                v-for="(category, index) in categories"
                :key="index"
                @click="activeCategory = category.id"
                :class="[
                  'category-btn',
                  { active: activeCategory === category.id },
                ]"
              >
                <span class="category-icon">{{ category.icon }}</span>
                {{ $t(`faqPage.categories.${category.id}`) }}
              </button>
            </div>
          </div>

          <!-- FAQ Questions -->
          <div class="faq-questions">
            <div class="search-box">
              <div class="search-input-wrapper">
                <svg
                  class="search-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="$t('faqPage.searchPlaceholder')"
                  class="search-input"
                />
                <button
                  v-if="searchQuery"
                  @click="searchQuery = ''"
                  class="clear-search"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="questions-container">
              <div
                v-for="(faq, index) in filteredFAQs"
                :key="index"
                class="faq-item"
                :class="{ active: activeFaq === index }"
              >
                <button @click="toggleFaq(index)" class="faq-question">
                  <div class="question-content">
                    <span class="question-number">{{
                      String(index + 1).padStart(2, "0")
                    }}</span>
                    <h4>{{ faq.question }}</h4>
                  </div>
                  <div class="question-icon">
                    <svg
                      :class="['expand-icon', { rotated: activeFaq === index }]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </button>
                <div
                  class="faq-answer"
                  :class="{ expanded: activeFaq === index }"
                >
                  <div class="answer-content">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>

              <!-- No Results -->
              <div v-if="filteredFAQs.length === 0" class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>{{ $t("faqPage.noResults.title") }}</h3>
                <p>{{ $t("faqPage.noResults.description") }}</p>
                <button @click="searchQuery = ''" class="clear-filters-btn">
                  {{ $t("faqPage.noResults.clearButton") }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="contact-cta">
          <div class="cta-content">
            <h3>{{ $t("faqPage.contactCta.title") }}</h3>
            <p>{{ $t("faqPage.contactCta.description") }}</p>
            <router-link to="/contact" class="cta-button">
              {{ $t("faqPage.contactCta.button") }}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </router-link>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const { t, locale, messages } = useI18n();

const showScrollToTop = ref(false);
const activeFaq = ref<number | null>(null);
const activeCategory = ref("general");
const searchQuery = ref("");

const categories = [
  { id: "general", icon: "💡" },
  { id: "app", icon: "📱" },
  { id: "features", icon: "⭐" },
  { id: "technical", icon: "⚙️" },
  { id: "account", icon: "👤" },
];

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqData = computed(() => {
  try {
    // Debug: log pour vérifier ce qui est récupéré
    console.log("Current locale:", locale.value);
    
    const currentMessages = messages.value[locale.value] as any;
    console.log("Current messages:", currentMessages);
    
    if (currentMessages?.faqPage?.questions) {
      console.log("FAQ questions found:", currentMessages.faqPage.questions);
      return currentMessages.faqPage.questions as FAQItem[];
    }
    
    return [];
  } catch (error) {
    console.error("Error loading FAQ data:", error);
    return [];
  }
});

const filteredFAQs = computed(() => {
  let filtered = faqData.value;

  // Filter by category if not 'general'
  if (activeCategory.value !== "general") {
    filtered = filtered.filter(
      (faq: FAQItem) => faq.category === activeCategory.value
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (faq: FAQItem) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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

.faq {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.faq::before {
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
  color: var(--color-primary);
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

/* FAQ Content Section */
.faq-content-section {
  padding: 80px 20px;
  position: relative;
  z-index: 1;
}

.faq-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

/* FAQ Categories */
.faq-categories {
  position: sticky;
  top: 120px;
  height: fit-content;
}

.faq-categories h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 25px;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: var(--card-bg, white);
  border: 2px solid transparent;
  border-radius: 12px;
  color: var(--color-text-primary, #333);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
}

.category-btn:hover {
  border-color: var(--color-primary);
  transform: translateX(5px);
}

.category-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.category-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Search Box */
.search-box {
  margin-bottom: 40px;
}

.search-input-wrapper {
  position: relative;
  max-width: 500px;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.search-input {
  width: 100%;
  padding: 15px 50px 15px 45px;
  border: 2px solid var(--color-primary);
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: var(--color-text-primary, #333);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 161, 167, 0.1);
}

.clear-search {
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
}

.clear-search:hover {
  background: #f0f0f0;
  color: #666;
}

/* FAQ Questions */
.questions-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  background: var(--card-bg, white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 161, 167, 0.08);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.12);
  transform: translateY(-2px);
}

.faq-item.active {
  box-shadow: 0 15px 40px rgba(0, 161, 167, 0.15);
}

.faq-question {
  width: 100%;
  padding: 25px 30px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
}

.question-content {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
}

.question-number {
  background: var(--color-primary);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.faq-question h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin: 0;
}

.question-icon {
  color: var(--color-primary);
  transition: transform 0.3s ease;
}

.expand-icon {
  transition: transform 0.3s ease;
}

.expand-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: rgba(0, 161, 167, 0.02);
}

.faq-answer.expanded {
  max-height: 200px;
}

.answer-content {
  padding: 0 30px 25px;
  padding-left: 90px;
}

.answer-content p {
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
  margin: 0;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 80px 40px;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.no-results h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 10px;
}

.no-results p {
  color: var(--color-text-secondary, #666);
  margin-bottom: 25px;
}

.clear-filters-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters-btn:hover {
  background: var(--color-primary-dark, #008a8f);
  transform: translateY(-2px);
}

/* Contact CTA */
.contact-cta {
  background: var(--card-bg, white);
  padding: 50px;
  border-radius: 25px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.1);
}

.contact-cta::before {
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

.cta-content h3 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 15px;
}

.cta-content p {
  color: var(--color-text-secondary, #666);
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 161, 167, 0.3);
}

/* Scroll to Top Button */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--color-primary);
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
  background: var(--color-primary-dark, #008a8f);
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

  .faq-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .faq-categories {
    position: static;
  }

  .category-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .category-btn {
    flex: 1;
    min-width: 120px;
    justify-content: center;
    font-size: 0.9rem;
    padding: 12px 16px;
  }

  .answer-content {
    padding-left: 30px;
  }

  .contact-cta {
    padding: 40px 30px;
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

  .faq-content-section {
    padding: 60px 15px;
  }

  .category-btn {
    flex: none;
    min-width: 100px;
    font-size: 0.85rem;
    padding: 10px 12px;
  }

  .category-btn .category-icon {
    font-size: 1.2rem;
  }

  .faq-question {
    padding: 20px;
  }

  .question-content {
    gap: 15px;
  }

  .question-number {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }

  .faq-question h4 {
    font-size: 1.1rem;
  }

  .answer-content {
    padding: 0 20px 20px;
    padding-left: 20px;
  }

  .contact-cta {
    padding: 30px 20px;
  }

  .cta-content h3 {
    font-size: 1.5rem;
  }

  .shape {
    transform: scale(0.8);
  }

  .shape-5,
  .shape-6 {
    display: none;
  }
}
</style>
