/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Router
import router from "./router";

// i18n
import i18n from "./i18n";

// Styles
import "unfonts.css";
import "./styles/themes.css";

const app = createApp(App);

app.use(router);
app.use(i18n);

registerPlugins(app);

app.mount("#app");
