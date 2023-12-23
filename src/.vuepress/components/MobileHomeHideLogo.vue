<template>
    
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
    if (window.innerWidth > 719) return;
    const logo: Element | null = document.querySelector('.vp-nav-logo');
    if (!logo) return;
    logo.classList.add('hide-in-pad');
});
onUnmounted(() => {
    const logo: Element | null = document.querySelector('.vp-nav-logo');
    if (!logo) return;
    logo.classList.remove('hide-in-pad');
});
</script>