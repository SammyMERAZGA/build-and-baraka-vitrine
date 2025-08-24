<template>
  <div style="padding: 20px; background: white; color: black;">
    <h1>{{ $t("contact.title") }}</h1>
    <p>{{ $t("contact.subtitle") }}</p>
    
    <!-- Test des composants un par un -->
    <div style="border: 1px solid red; margin: 10px;">
      <h3>Test LanguageSelector:</h3>
      <LanguageSelector />
    </div>
    
    <div style="border: 1px solid blue; margin: 10px;">
      <h3>Test NavbarComponent:</h3>
      <NavbarComponent />
    </div>
    
    <div style="border: 1px solid green; margin: 10px;">
      <h3>Test FooterComponent:</h3>
      <FooterComponent />
    </div>
    
    <router-link to="/">Retour accueil</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";

const { t } = useI18n();
</script>