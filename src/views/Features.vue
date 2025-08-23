<template>
  <div class="features">
    <!-- Theme Toggle -->
    <ThemeToggle />

    <!-- Language Switcher -->
    <LanguageSwitcher />

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
        <h1 class="hero-title">{{ $t("featuresPage.title") }}</h1>
        <p class="hero-subtitle">{{ $t("featuresPage.subtitle") }}</p>
      </div>
    </section>

    <!-- Core Features Section -->
    <section class="core-features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("featuresPage.coreTitle") }}</h2>
          <p class="section-description">{{ $t("featuresPage.coreDescription") }}</p>
        </div>

        <!-- Feature Timeline -->
        <div class="features-timeline">
          <!-- Todo List Feature -->
          <div class="feature-item left">
            <div class="feature-content">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">📝</div>
              </div>
              <h3>{{ $t("featuresPage.todoList.title") }}</h3>
              <p>{{ $t("featuresPage.todoList.description") }}</p>
              <div class="feature-tags">
                <span class="tag">{{ $t("featuresPage.todoList.tag1") }}</span>
                <span class="tag">{{ $t("featuresPage.todoList.tag2") }}</span>
                <span class="tag">{{ $t("featuresPage.todoList.tag3") }}</span>
              </div>
            </div>
          </div>

          <!-- Prayer Times Feature -->
          <div class="feature-item right">
            <div class="feature-content">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🕌</div>
              </div>
              <h3>{{ $t("featuresPage.prayerTimes.title") }}</h3>
              <p>{{ $t("featuresPage.prayerTimes.description") }}</p>
              <div class="feature-highlight">
                <span class="highlight-text">{{ $t("featuresPage.prayerTimes.highlight") }}</span>
              </div>
            </div>
          </div>

          <!-- Prophets Stories Feature -->
          <div class="feature-item left">
            <div class="feature-content">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">📖</div>
              </div>
              <h3>{{ $t("featuresPage.prophetsStories.title") }}</h3>
              <p>{{ $t("featuresPage.prophetsStories.description") }}</p>
              <div class="feature-number">
                <span class="big-number">25</span>
                <span class="number-label">{{ $t("featuresPage.prophetsStories.numberLabel") }}</span>
              </div>
            </div>
          </div>

          <!-- Duas Collection Feature -->
          <div class="feature-item right">
            <div class="feature-content">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🤲</div>
              </div>
              <h3>{{ $t("featuresPage.duas.title") }}</h3>
              <p>{{ $t("featuresPage.duas.description") }}</p>
              <div class="feature-extra">
                <span class="extra-icon">⭐</span>
                <span>{{ $t("featuresPage.duas.favorite") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Features Grid -->
    <section class="special-features-section">
      <div class="container">
        <h2 class="section-title">{{ $t("featuresPage.specialTitle") }}</h2>
        
        <div class="special-grid">
          <!-- Prophetic Recipes -->
          <div class="special-item recipes">
            <div class="special-bg"></div>
            <div class="special-content">
              <div class="special-icon">🍯</div>
              <h3>{{ $t("featuresPage.recipes.title") }}</h3>
              <p>{{ $t("featuresPage.recipes.description") }}</p>
            </div>
          </div>

          <!-- Live Mecca/Medina -->
          <div class="special-item live">
            <div class="special-bg"></div>
            <div class="special-content">
              <div class="special-icon">📹</div>
              <div class="live-indicator">
                <span class="live-dot"></span>
                {{ $t("featuresPage.live.indicator") }}
              </div>
              <h3>{{ $t("featuresPage.live.title") }}</h3>
              <p>{{ $t("featuresPage.live.description") }}</p>
            </div>
          </div>

          <!-- 99 Names of Allah -->
          <div class="special-item names">
            <div class="special-bg"></div>
            <div class="special-content">
              <div class="special-icon">✨</div>
              <div class="names-number">99</div>
              <h3>{{ $t("featuresPage.names.title") }}</h3>
              <p>{{ $t("featuresPage.names.description") }}</p>
            </div>
          </div>

          <!-- Fundamentals -->
          <div class="special-item fundamentals">
            <div class="special-bg"></div>
            <div class="special-content">
              <div class="special-icon">📚</div>
              <h3>{{ $t("featuresPage.fundamentals.title") }}</h3>
              <p>{{ $t("featuresPage.fundamentals.description") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Features -->
    <section class="additional-features-section">
      <div class="container">
        <div class="additional-content">
          <div class="additional-left">
            <h2 class="section-title">{{ $t("featuresPage.additionalTitle") }}</h2>
            <div class="additional-list">
              <div class="additional-item">
                <div class="additional-icon">📿</div>
                <div>
                  <h4>{{ $t("featuresPage.tasbih.title") }}</h4>
                  <p>{{ $t("featuresPage.tasbih.description") }}</p>
                </div>
              </div>
              <div class="additional-item">
                <div class="additional-icon">🌍</div>
                <div>
                  <h4>{{ $t("featuresPage.languages.title") }}</h4>
                  <p>{{ $t("featuresPage.languages.description") }}</p>
                </div>
              </div>
              <div class="additional-item">
                <div class="additional-icon">💾</div>
                <div>
                  <h4>{{ $t("featuresPage.offline.title") }}</h4>
                  <p>{{ $t("featuresPage.offline.description") }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="additional-right">
            <div class="coming-soon-card">
              <div class="coming-soon-header">
                <span class="coming-soon-badge">{{ $t("featuresPage.comingSoon.badge") }}</span>
              </div>
              <h3>{{ $t("featuresPage.comingSoon.title") }}</h3>
              <p>{{ $t("featuresPage.comingSoon.description") }}</p>
              <div class="feedback-cta">
                <span class="feedback-icon">💡</span>
                <span>{{ $t("featuresPage.comingSoon.feedback") }}</span>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

const { t } = useI18n();

const showScrollToTop = ref(false);

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

.features {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.features::before {
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
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
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
  font-size: 3.5rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 15px;
  animation: slideInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.4rem;
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

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #00a1a7;
  margin-bottom: 20px;
  text-align: center;
}

.section-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary, #666);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.6;
}

.section-header {
  margin-bottom: 80px;
}

/* Core Features Timeline */
.core-features-section {
  padding: 100px 20px;
  position: relative;
  z-index: 1;
}

.features-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.features-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #00a1a7, #f5c230);
  transform: translateX(-50%);
}

.feature-item {
  position: relative;
  margin: 80px 0;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #00a1a7;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #00a1a7;
  transform: translateY(-50%);
  z-index: 2;
}

.feature-item.left::before {
  right: -60px;
}

.feature-item.right::before {
  left: -60px;
}

.feature-item.left {
  padding-right: 60px;
}

.feature-item.right {
  padding-left: 60px;
  text-align: right;
}

.feature-item.left .feature-content {
  margin-right: 40px;
}

.feature-item.right .feature-content {
  margin-left: 40px;
}

.feature-content {
  background: var(--card-bg, white);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 161, 167, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 161, 167, 0.15);
}

.feature-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00a1a7, #f5c230);
}

.feature-icon-wrapper {
  display: inline-block;
  margin-bottom: 20px;
}

.feature-icon {
  font-size: 4rem;
  background: linear-gradient(135deg, #00a1a7, #f5c230);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-content h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 15px;
}

.feature-content p {
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
  margin-bottom: 20px;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: rgba(0, 161, 167, 0.1);
  color: #00a1a7;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.feature-highlight {
  background: linear-gradient(135deg, #00a1a7, #f5c230);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  display: inline-block;
  font-weight: 600;
}

.feature-number {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.big-number {
  font-size: 4rem;
  font-weight: 700;
  color: #00a1a7;
  line-height: 1;
}

.number-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary, #666);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feature-extra {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(245, 194, 48, 0.1);
  color: #f5c230;
  padding: 10px 16px;
  border-radius: 25px;
  font-weight: 500;
}

.extra-icon {
  font-size: 1.2rem;
}

/* Special Features Grid */
.special-features-section {
  padding: 100px 20px;
}

.special-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.special-item {
  position: relative;
  min-height: 280px;
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.special-item:hover {
  transform: translateY(-10px);
}

.special-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.special-item:hover .special-bg {
  opacity: 0.15;
}

.recipes .special-bg {
  background: linear-gradient(135deg, #f5c230, #e8b82e);
}

.live .special-bg {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
}

.names .special-bg {
  background: linear-gradient(135deg, #00a1a7, #008a8f);
}

.fundamentals .special-bg {
  background: linear-gradient(135deg, #4ecdc4, #45b7b8);
}

.special-content {
  position: relative;
  z-index: 2;
  padding: 40px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--card-bg, white);
}

.special-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ff6b6b;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 15px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.names-number {
  font-size: 5rem;
  font-weight: 700;
  color: #00a1a7;
  line-height: 1;
  margin-bottom: 10px;
}

.special-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 10px;
}

.special-content p {
  color: var(--color-text-secondary, #666);
  line-height: 1.5;
}

/* Additional Features */
.additional-features-section {
  padding: 100px 20px;
}

.additional-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.additional-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
}

.additional-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.additional-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #00a1a7, #f5c230);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
}

.additional-item h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 8px;
}

.additional-item p {
  color: var(--color-text-secondary, #666);
  line-height: 1.5;
}

.coming-soon-card {
  background: var(--card-bg, white);
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 161, 167, 0.1);
  position: relative;
  overflow: hidden;
}

.coming-soon-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00a1a7, #f5c230, #00a1a7);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.coming-soon-header {
  margin-bottom: 20px;
}

.coming-soon-badge {
  background: linear-gradient(135deg, #f5c230, #e8b82e);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.coming-soon-card h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-text-primary, #333);
  margin-bottom: 15px;
}

.coming-soon-card p {
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
  margin-bottom: 25px;
}

.feedback-cta {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 161, 167, 0.1);
  color: #00a1a7;
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: 500;
}

.feedback-icon {
  font-size: 1.5rem;
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
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-timeline::before {
    left: 30px;
  }

  .feature-item.left::before,
  .feature-item.right::before {
    left: 20px;
  }

  .feature-item.left,
  .feature-item.right {
    padding-left: 60px;
    padding-right: 0;
    text-align: left;
  }

  .feature-item.left .feature-content,
  .feature-item.right .feature-content {
    margin: 0;
  }

  .special-grid {
    grid-template-columns: 1fr;
  }

  .additional-content {
    grid-template-columns: 1fr;
    gap: 60px;
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

  .core-features-section,
  .special-features-section,
  .additional-features-section {
    padding: 60px 15px;
  }

  .feature-content {
    padding: 30px 25px;
  }

  .special-content {
    padding: 30px 25px;
  }

  .coming-soon-card {
    padding: 30px 25px;
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