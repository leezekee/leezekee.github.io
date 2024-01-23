<template>
    <div class="all-pages">
        <div class="page" v-for="page in pages" :key="page">
            <VuePDF :src="props.src" :page="page" />
        </div>
    </div>
</template>

<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import { ref } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    }
});

const { pdf, pages } = usePDF(props.src);


</script>

<style lang="scss" scoped>
.all-pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
}
</style>