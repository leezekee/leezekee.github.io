import { defineClientConfig } from "@vuepress/client";
import TableClick2Copy from "./components/TableClick2Copy.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("TableClick2Copy", TableClick2Copy);
    },
});