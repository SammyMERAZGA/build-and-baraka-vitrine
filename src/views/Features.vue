<template>
  <div class="features">
    <!-- Language Selector -->
    <LanguageSelector />

    <!-- Floating Navbar -->
    <NavbarComponent />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>

      <!-- Animated Shapes -->
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">✨</span>
          <span>{{ $t("featuresPage.heroBadge") }}</span>
        </div>
        <h1 class="hero-title">{{ $t("featuresPage.title") }}</h1>
        <p class="hero-subtitle">{{ $t("featuresPage.subtitle") }}</p>

        <!-- Interactive Feature Preview -->
        <div class="feature-preview">
          <div
            class="preview-card"
            data-feature="prayer"
            @click="scrollToFeatures"
          >
            <div class="preview-icon">🕌</div>
            <div class="preview-pulse"></div>
          </div>
          <div
            class="preview-card"
            data-feature="stories"
            @click="scrollToFeatures"
          >
            <div class="preview-icon">📖</div>
            <div class="preview-pulse"></div>
          </div>
          <div
            class="preview-card"
            data-feature="duas"
            @click="scrollToFeatures"
          >
            <div class="preview-icon">🤲</div>
            <div class="preview-pulse"></div>
          </div>
        </div>

        <div class="hero-cta">
          <div class="cta-text">{{ $t("featuresPage.heroCallToAction") }}</div>
          <div class="scroll-indicator">
            <div class="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid Section -->
    <section class="features-grid-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t("featuresPage.coreTitle") }}</h2>
          <p class="section-description">
            {{ $t("featuresPage.coreDescription") }}
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="bento-grid">
          <!-- Hero Feature - Prayer Times -->
          <div class="bento-item hero-item">
            <div class="item-glow prayer-glow"></div>
            <div class="mosque-silhouette">
              <svg viewBox="0 0 200 120" class="mosque-svg">
                <path
                  d="M40 100 Q60 80 80 100 L80 120 L40 120 Z"
                  fill="currentColor"
                  opacity="0.1"
                />
                <path
                  d="M120 100 Q140 80 160 100 L160 120 L120 120 Z"
                  fill="currentColor"
                  opacity="0.1"
                />
                <circle
                  cx="100"
                  cy="60"
                  r="30"
                  fill="currentColor"
                  opacity="0.05"
                />
              </svg>
            </div>
            <div class="item-content">
              <div class="feature-icon mosque-icon">🕌</div>
              <h3>{{ $t("featuresPage.prayerTimes.title") }}</h3>
              <p>{{ $t("featuresPage.prayerTimes.description") }}</p>
              <div class="prayer-times-preview">
                <div class="time-item">
                  <span class="prayer-name">{{ $t("featuresPage.prayerNames.fajr") }}</span>
                  <span class="prayer-time">05:32</span>
                </div>
                <div class="time-item active">
                  <span class="prayer-name">{{ $t("featuresPage.prayerNames.dhuhr") }}</span>
                  <span class="prayer-time">13:15</span>
                </div>
                <div class="time-item">
                  <span class="prayer-name">{{ $t("featuresPage.prayerNames.asr") }}</span>
                  <span class="prayer-time">16:45</span>
                </div>
                <div class="time-item">
                  <span class="prayer-name">{{ $t("featuresPage.prayerNames.maghrib") }}</span>
                  <span class="prayer-time">18:52</span>
                </div>
                <div class="time-item">
                  <span class="prayer-name">{{ $t("featuresPage.prayerNames.isha") }}</span>
                  <span class="prayer-time">20:28</span>
                </div>
              </div>
              <div class="prayer-note">
                <span class="note-text"
                  >{{ $t("featuresPage.prayerNote") }}</span
                >
              </div>
            </div>
          </div>

          <!-- Stories Feature -->
          <div class="bento-item stories-item">
            <div class="item-content">
              <div class="feature-icon">📖</div>
              <h3>{{ $t("featuresPage.prophetsStories.title") }}</h3>
              <p>{{ $t("featuresPage.prophetsStories.description") }}</p>
              <div class="stories-showcase">
                <div class="story-preview prophet-main">{{ $t("featuresPage.prophetsNames.muhammad") }}</div>
                <div class="story-preview">{{ $t("featuresPage.prophetsNames.ibrahim") }}</div>
                <div class="story-preview">{{ $t("featuresPage.prophetsNames.moussa") }}</div>
                <div class="story-preview">{{ $t("featuresPage.prophetsNames.isa") }}</div>
                <div class="story-count">{{ $t("featuresPage.prophetsNames.others") }}</div>
              </div>
            </div>
          </div>

          <!-- Duas Feature -->
          <div class="bento-item duas-item">
            <div class="duas-pattern"></div>
            <div class="item-content">
              <div class="feature-icon">🤲</div>
              <h3>{{ $t("featuresPage.duas.title") }}</h3>
              <p>{{ $t("featuresPage.duas.description") }}</p>
              <div class="dua-preview">
                <div class="arabic-sample">بِسْمِ اللَّهِ</div>
                <div class="dua-category">{{ $t("featuresPage.duaCategory") }}</div>
              </div>
            </div>
          </div>

          <!-- Todo Feature -->
          <div class="bento-item todo-item">
            <div class="checklist-bg">
              <div class="check-item completed">✓</div>
              <div class="check-item completed">✓</div>
              <div class="check-item pending">○</div>
            </div>
            <div class="item-content">
              <div class="feature-icon">📝</div>
              <h3>{{ $t("featuresPage.todoList.title") }}</h3>
              <p>{{ $t("featuresPage.todoList.description") }}</p>
            </div>
          </div>

          <!-- 99 Names Feature -->
          <div class="bento-item names-item">
            <div class="names-circle">
              <div class="name-ring">
              </div>
              <div class="center-number">99</div>
            </div>
            <div class="item-content">
              <div class="feature-icon">✨</div>
              <h3>{{ $t("featuresPage.names.title") }}</h3>
              <p>{{ $t("featuresPage.names.description") }}</p>
            </div>
          </div>

          <!-- Tasbih Feature -->
          <div class="bento-item tasbih-item">
            <div class="tasbih-beads">
              <div class="bead"></div>
              <div class="bead"></div>
              <div class="bead active"></div>
              <div class="bead"></div>
              <div class="bead"></div>
            </div>
            <div class="item-content">
              <div class="feature-icon">📿</div>
              <h3>{{ $t("featuresPage.tasbih.title") }}</h3>
              <p>{{ $t("featuresPage.tasbih.description") }}</p>
              <div class="tasbih-counter">
                <span class="counter">33</span>
                <span class="counter-label">{{ $t("featuresPage.tasbihCounter") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Features -->
    <section class="additional-section">
      <div class="container">
        <div class="additional-header">
          <h2 class="section-title">{{ $t("featuresPage.moreFeatures") }}</h2>
          <p class="section-description">
            {{ $t("featuresPage.additionalDescription") }}
          </p>
        </div>

        <div class="additional-grid">
          <div class="additional-card live-card">
            <div class="live-stream-bg">
              <div class="stream-waves"></div>
              <div class="stream-waves"></div>
              <div class="stream-waves"></div>
            </div>
            <div class="live-indicator">
              <div class="live-dot"></div>
              <span>{{ $t("featuresPage.liveIndicator") }}</span>
            </div>
            <div class="card-content">
              <div class="feature-icon">📹</div>
              <h3>{{ $t("featuresPage.live.title") }}</h3>
              <p>{{ $t("featuresPage.live.description") }}</p>
            </div>
          </div>

          <div class="additional-card recipes-card">
            <div class="card-content">
              <div class="feature-icon">🍯</div>
              <h3>{{ $t("featuresPage.recipes.title") }}</h3>
              <p>{{ $t("featuresPage.recipes.description") }}</p>
            </div>
          </div>

          <div class="additional-card fundamentals-card">
            <div class="book-stack">
              <div class="mini-book"></div>
              <div class="mini-book"></div>
              <div class="mini-book"></div>
            </div>
            <div class="card-content">
              <div class="feature-icon">📚</div>
              <h3>{{ $t("featuresPage.fundamentals.title") }}</h3>
              <p>{{ $t("featuresPage.fundamentals.description") }}</p>
            </div>
          </div>

          <div class="additional-card coming-soon-card special-coming-soon">
            <div class="cosmic-background">
              <div class="star star-1">✦</div>
              <div class="star star-2">✦</div>
              <div class="star star-3">✧</div>
            </div>
            <div class="coming-badge-new">
              <span>{{ $t("featuresPage.comingSoonBadge") }}</span>
            </div>
            <div class="card-content">
              <div class="feature-icon rocket-icon">🚀</div>
              <h3>{{ $t("featuresPage.newFeaturesTitle") }}</h3>
              <p>
                D'autres surprises arrivent pour enrichir votre expérience
                spirituelle
              </p>
              <div class="progress-ring">
                <svg class="progress-svg" width="60" height="60">
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    stroke="rgba(245, 194, 48, 0.2)"
                    stroke-width="2"
                    fill="none"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    stroke="var(--color-secondary)"
                    stroke-width="2"
                    fill="none"
                    stroke-dasharray="157"
                    stroke-dashoffset="39"
                    transform="rotate(-90 30 30)"
                  />
                </svg>
                <span class="progress-text">75%</span>
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
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";


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

const scrollToFeatures = () => {
  // Add a nice transition effect
  const previewCards = document.querySelectorAll('.preview-card') as NodeListOf<HTMLElement>;
  previewCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    }, index * 50);
  });
  
  // Scroll to features section
  const featuresSection = document.querySelector(".features-grid-section");
  if (featuresSection) {
    featuresSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

.features {
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: var(--color-bg-primary);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 120px 20px 80px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(0, 161, 167, 0.1) 0%,
    transparent 70%
  );
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(245, 194, 48, 0.08) 0%,
    transparent 70%
  );
  top: 40%;
  right: 15%;
  animation-delay: -10s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(0, 161, 167, 0.06) 0%,
    transparent 70%
  );
  bottom: 30%;
  left: 60%;
  animation-delay: -5s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(10px, -20px) scale(1.1);
  }
  50% {
    transform: translate(-15px, 10px) scale(0.9);
  }
  75% {
    transform: translate(5px, 15px) scale(1.05);
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-primary);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease-out;
}

.badge-icon {
  font-size: 1rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 24px;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}


.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
  font-weight: 400;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 161, 167, 0.3),
    transparent
  );
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Interactive Feature Preview */
.feature-preview {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin: 60px 0 40px;
}

.preview-card {
  position: relative;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease;
  animation: fadeInUp 0.8s ease-out;
}

.preview-card:nth-child(2) {
  animation-delay: 0.1s;
}

.preview-card:nth-child(3) {
  animation-delay: 0.2s;
}

.preview-card:hover {
  transform: translateY(-8px) scale(1.05);
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--color-primary);
  box-shadow: 0 20px 40px rgba(0, 161, 167, 0.2);
}

.preview-icon {
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.preview-card:hover .preview-icon {
  transform: scale(1.1);
}

.preview-pulse {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: var(--color-secondary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
}

/* Hero CTA */
.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.cta-text {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.scroll-indicator {
  width: 24px;
  height: 40px;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  position: relative;
  opacity: 0.7;
}

.scroll-arrow {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 2px;
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) translateY(16px);
    opacity: 0.3;
  }
}

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.shape {
  position: absolute;
  background: var(--shape-color);
  border-radius: 50%;
  animation: floatShapes 15s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 25%;
  right: 12%;
  animation-delay: -3s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 45%;
  left: 5%;
  animation-delay: -6s;
}

.shape-4 {
  width: 40px;
  height: 40px;
  top: 35%;
  right: 25%;
  animation-delay: -9s;
}

.shape-5 {
  width: 70px;
  height: 70px;
  bottom: 30%;
  right: 8%;
  animation-delay: -12s;
}

@keyframes floatShapes {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -30px) rotate(90deg);
  }
  50% {
    transform: translate(-15px, -20px) rotate(180deg);
  }
  75% {
    transform: translate(10px, 25px) rotate(270deg);
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 16px;
  text-align: center;
  line-height: 1.2;
}

.section-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 80px;
  line-height: 1.6;
  font-weight: 400;
}

.section-header {
  margin-bottom: 80px;
}

/* Features Grid Section */
.features-grid-section {
  padding: 120px 24px;
  background: var(--color-bg-secondary);
}

/* Bento Grid Layout */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  margin-top: 60px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* Bento Items Base Styles */
.bento-item {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 40px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
}

.bento-item:hover {
  transform: translateY(-12px);
  box-shadow: 0 40px 80px rgba(0, 161, 167, 0.2);
  border-color: var(--color-primary);
}

/* Hero Prayer Item */
.hero-item {
  grid-column: span 8;
  grid-row: span 2;
  background: linear-gradient(
    135deg,
    rgba(0, 161, 167, 0.1),
    rgba(0, 161, 167, 0.05)
  );
  min-height: 400px;
}

.item-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 161, 167, 0.1), transparent 60%);
  animation: rotate 15s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hero-item:hover .item-glow {
  opacity: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.mosque-silhouette {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: 80px;
  opacity: 0.6;
}

.mosque-svg {
  width: 100%;
  height: 100%;
  color: var(--color-primary);
}

.prayer-times-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}

.time-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: rgba(0, 161, 167, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 161, 167, 0.2);
  transition: all 0.3s ease;
}

.time-item.active {
  background: var(--color-primary);
  color: white;
  transform: scale(1.02);
}

.prayer-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

.prayer-time {
  font-family: "Courier New", monospace;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.prayer-note {
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(245, 194, 48, 0.1);
  border-radius: 12px;
  border-left: 3px solid var(--color-secondary);
}

.note-text {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-style: italic;
}

/* Stories Item */
.stories-item {
  grid-column: span 4;
  background: linear-gradient(
    135deg,
    rgba(245, 194, 48, 0.1),
    rgba(245, 194, 48, 0.05)
  );
  position: relative;
}

.books-animation {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
}

.book {
  width: 20px;
  height: 30px;
  background: linear-gradient(
    45deg,
    var(--color-primary),
    var(--color-secondary)
  );
  border-radius: 4px;
  animation: bookFloat 3s ease-in-out infinite;
}

.book-2 {
  animation-delay: 0.5s;
  background: linear-gradient(
    45deg,
    var(--color-secondary),
    var(--color-primary)
  );
}

.book-3 {
  animation-delay: 1s;
  background: linear-gradient(45deg, #4ecdc4, var(--color-primary));
}

@keyframes bookFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

.stories-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.story-preview {
  background: rgba(0, 161, 167, 0.15);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  color: #333;
  border: 1px solid rgba(0, 161, 167, 0.2);
}

.story-count {
  background: var(--color-secondary);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.prophet-main {
  background: linear-gradient(135deg, var(--color-secondary), #e8b82e);
  color: white;
  font-weight: 600;
  border: 2px solid rgba(245, 194, 48, 0.3);
}

/* Duas Item */
.duas-item {
  grid-column: span 4;
  background: linear-gradient(
    135deg,
    rgba(76, 205, 196, 0.1),
    rgba(76, 205, 196, 0.05)
  );
}

.duas-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(
    circle,
    rgba(76, 205, 196, 0.2) 2px,
    transparent 2px
  );
  background-size: 20px 20px;
  opacity: 0.5;
}

.dua-preview {
  margin-top: 20px;
}

.arabic-sample {
  font-size: 1.8rem;
  color: var(--color-primary);
  font-weight: bold;
  margin-bottom: 8px;
  text-align: right;
}

.dua-category {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  display: inline-block;
}

/* Todo Item */
.todo-item {
  grid-column: span 3;
}

.checklist-bg {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.check-item {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
}

.check-item.completed {
  background: var(--color-secondary);
  animation: checkPop 0.3s ease-out;
}

.check-item.pending {
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-text-muted);
}

@keyframes checkPop {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Names Item */
.names-item {
  grid-column: span 5;
  background: white;
}

.names-circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
}

.name-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(0, 161, 167, 0.2);
}

.name-text {
  position: absolute;
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 600;
  transform-origin: center;
}

.name-text:nth-child(1) {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.name-text:nth-child(2) {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.name-text:nth-child(3) {
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.name-text:nth-child(4) {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.center-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-secondary);
  line-height: 1;
}

/* Tasbih Item */
.tasbih-item {
  grid-column: span 4;
}

.tasbih-beads {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 6px;
}

.bead {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.bead.active {
  background: var(--color-secondary);
  animation: beadGlow 1.5s ease-in-out infinite;
}

@keyframes beadGlow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(245, 194, 48, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(245, 194, 48, 0);
  }
}

.tasbih-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.counter {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-secondary);
  line-height: 1;
}

.counter-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-top: 4px;
}

/* Base Content Styles */
.item-content {
  position: relative;
  z-index: 2;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.bento-item h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
}

.bento-item p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
}

/* Additional Section */
.additional-section {
  padding: 120px 24px;
  background: var(--color-bg-primary);
}

.additional-header {
  text-align: center;
  margin-bottom: 80px;
}

.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Special Coming Soon Card */
.special-coming-soon {
  grid-column: 1 / -1;
  max-width: 500px;
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgba(245, 194, 48, 0.15),
    rgba(0, 161, 167, 0.1)
  );
  border: 2px solid var(--color-secondary);
  position: relative;
  overflow: hidden;
}

.cosmic-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.star {
  position: absolute;
  color: var(--color-secondary);
  font-size: 1.5rem;
  animation: starTwinkle 3s ease-in-out infinite;
}

.star-1 {
  top: 20%;
  right: 20%;
  animation-delay: 0s;
}

.star-2 {
  top: 60%;
  right: 15%;
  animation-delay: 1s;
}

.star-3 {
  top: 40%;
  right: 5%;
  animation-delay: 2s;
}

@keyframes starTwinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.coming-badge-new {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--color-secondary), #e8b82e);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(245, 194, 48, 0.3);
  z-index: 10;
  white-space: nowrap;
  transform: rotate(12deg);
}

.rocket-icon {
  font-size: 3.5rem !important;
  animation: rocketFloat 3s ease-in-out infinite;
}

@keyframes rocketFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.progress-ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.progress-svg {
  transform: rotate(-90deg);
}

.progress-text {
  position: absolute;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-secondary);
}

.additional-card {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
}

.additional-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(0, 161, 167, 0.15);
  border-color: var(--color-primary);
}

/* Live Card */
.live-card {
  background: linear-gradient(
    135deg,
    rgba(255, 107, 107, 0.1) 0%,
    rgba(255, 107, 107, 0.05) 100%
  );
}

.live-stream-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.stream-waves {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(255, 107, 107, 0.1);
  border-radius: 50%;
  animation: streamWave 3s infinite ease-out;
}

.stream-waves:nth-child(1) {
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.stream-waves:nth-child(2) {
  top: -100px;
  right: -100px;
  animation-delay: 1s;
}

.stream-waves:nth-child(3) {
  top: -100px;
  right: -100px;
  animation-delay: 2s;
}

@keyframes streamWave {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.live-indicator {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #ff6b6b;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Recipes Card */
.recipes-card {
  background: linear-gradient(
    135deg,
    rgba(245, 194, 48, 0.1) 0%,
    rgba(245, 194, 48, 0.05) 100%
  );
}


/* Fundamentals Card */
.fundamentals-card {
  background: linear-gradient(
    135deg,
    rgba(76, 205, 196, 0.1) 0%,
    rgba(76, 205, 196, 0.05) 100%
  );
}

.book-stack {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mini-book {
  width: 30px;
  height: 8px;
  background: linear-gradient(45deg, var(--color-primary), #4ecdc4);
  border-radius: 2px;
  animation: stackFloat 3s ease-in-out infinite;
}

.mini-book:nth-child(2) {
  animation-delay: 0.5s;
  width: 25px;
  background: linear-gradient(45deg, #4ecdc4, var(--color-secondary));
}

.mini-book:nth-child(3) {
  animation-delay: 1s;
  width: 35px;
  background: linear-gradient(
    45deg,
    var(--color-secondary),
    var(--color-primary)
  );
}

@keyframes stackFloat {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

/* Coming Soon Card */
.coming-soon-card {
  background: linear-gradient(
    135deg,
    rgba(245, 194, 48, 0.1) 0%,
    rgba(245, 194, 48, 0.05) 100%
  );
  position: relative;
}

.rocket-trail {
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  gap: 8px;
}

.trail-dot {
  width: 8px;
  height: 8px;
  background: var(--color-secondary);
  border-radius: 50%;
  animation: rocketTrail 2s infinite ease-out;
}

.trail-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.trail-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes rocketTrail {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.3) translateY(-20px);
  }
}

.coming-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--color-secondary), #e8b82e);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transform: rotate(12deg);
}

.card-content {
  position: relative;
  z-index: 2;
}

.additional-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  line-height: 1.3;
}

.additional-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
}

.enhanced-header {
  text-align: center;
  margin-bottom: 80px;
}

.enhanced-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.enhanced-card {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.enhanced-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(0, 161, 167, 0.15);
  border-color: rgba(0, 161, 167, 0.2);
}

.enhanced-card.spotlight {
  background: linear-gradient(
    135deg,
    rgba(255, 107, 107, 0.1) 0%,
    rgba(255, 107, 107, 0.05) 100%
  );
  position: relative;
}

.spotlight-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 107, 107, 0.1) 0%,
    transparent 70%
  );
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.enhanced-card.coming-soon {
  background: linear-gradient(
    135deg,
    rgba(245, 194, 48, 0.1) 0%,
    rgba(245, 194, 48, 0.05) 100%
  );
  position: relative;
}

.coming-soon-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(245, 194, 48, 0.05) 0%,
    transparent 100%
  );
  opacity: 0.5;
}

.live-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ff6b6b;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.live-dot {
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.8);
  }
}

.coming-soon-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-secondary), #e8b82e);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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

/* Responsive Design */
@media (max-width: 1200px) {
  .bento-grid {
    grid-template-columns: repeat(6, 1fr);
  }

  .hero-item {
    grid-column: span 6;
    grid-row: span 1;
    min-height: 300px;
  }

  .stories-item,
  .duas-item,
  .tasbih-item {
    grid-column: span 3;
  }

  .names-item {
    grid-column: span 6;
  }

  .todo-item {
    grid-column: span 3;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 20px 60px;
    min-height: 80vh;
  }

  .feature-preview {
    gap: 16px;
    margin: 40px 0 30px;
  }

  .preview-card {
    width: 60px;
    height: 60px;
  }

  .preview-icon {
    font-size: 1.5rem;
  }

  .features-grid-section,
  .additional-section {
    padding: 80px 20px;
  }

  .container {
    padding: 0 20px;
  }

  .bento-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .bento-item {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    min-height: auto !important;
    padding: 24px;
  }

  .hero-item {
    min-height: 250px;
  }

  .mosque-silhouette {
    width: 80px;
    height: 50px;
  }

  .names-circle {
    width: 80px;
    height: 80px;
  }

  .center-number {
    font-size: 2rem;
  }

  .additional-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .additional-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 80px 16px 40px;
  }

  .hero-badge {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  .feature-preview {
    gap: 12px;
  }

  .preview-card {
    width: 50px;
    height: 50px;
  }

  .preview-icon {
    font-size: 1.2rem;
  }

  .features-grid-section,
  .additional-section {
    padding: 60px 16px;
  }

  .container {
    padding: 0 16px;
  }

  .bento-item,
  .additional-card {
    padding: 20px;
  }

  .feature-icon {
    font-size: 2.5rem;
  }

  .hero-item {
    min-height: 200px;
  }

  .prayer-times-preview {
    gap: 8px;
  }

  .time-item {
    padding: 8px 12px;
  }

  .names-circle {
    width: 60px;
    height: 60px;
  }

  .center-number {
    font-size: 1.5rem;
  }

  .counter {
    font-size: 2rem;
  }

  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 360px) {
  .bento-item,
  .additional-card {
    padding: 16px;
  }

  .prayer-times-preview {
    gap: 6px;
  }

  .time-item {
    padding: 6px 10px;
  }

  .prayer-name,
  .prayer-time {
    font-size: 0.8rem;
  }
}
</style>
