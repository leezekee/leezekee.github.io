import { defineClientConfig } from "@vuepress/client";
import TableClick2Copy from "./components/TableClick2Copy.vue";
import MobileHomeHideLogo from "./components/MobileHomeHideLogo.vue";
import PdfView from "./components/PdfView.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("TableClick2Copy", TableClick2Copy);
        app.component("MobileHomeHideLogo", MobileHomeHideLogo);
    },
});
