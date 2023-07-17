import { createApp } from "vue";
import App from "@/app/app.vue";
import router from "@/app/router";
import store from "@/app/store";
import commonComponentsIterable from "@/app/components/common";
import "@/app/scss/style.scss";

const app = createApp(App);

for (const component of commonComponentsIterable) {
	app.component(component.nameComponent, component);
}

app.use(store).use(router).mount("#app");
