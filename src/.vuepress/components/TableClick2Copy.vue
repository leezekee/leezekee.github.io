<template>
    <Teleport to="#app">
        <Transition name="popup">
            <div class="popup" v-if="visible">
                {{ content }} - 已复制
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const visible = ref(false);
const content = ref('');

onMounted(() => {
    const tables = document.querySelectorAll('table');
    if (!tables) return;
    tables.forEach((table) => {
        table.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.nodeName === 'TD' || target.nodeName === 'CODE') {
                const text = target.innerText;
                navigator.clipboard.writeText(text);
                content.value = text;
                if (visible.value) return;
                visible.value = true;
                setTimeout(() => {
                    content.value = '';
                    visible.value = false;
                }, 1000);
            }
        });
        table.addEventListener('mouseover', (e) => {
            const target = e.target as HTMLElement;
            if (target.nodeName === 'TD' || target.nodeName === 'CODE') {
                target.style.cursor = 'pointer';
            }
        });
    })
})
</script>

<style lang="scss" scoped>
.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: fit-content;
    height: 40px;
    padding: 0 1%;
    border-radius: 5%;
    font-size: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, .5);
    user-select: none;
}

.popup-enter-active,
.popup-leave-active {
    transition: all .3s;
}

.popup-enter-from ,
.popup-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%)
}


</style>