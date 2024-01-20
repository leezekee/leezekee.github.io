---
date: 2023-12-21
category:
 - 开发
 - 前端
 - 博客建站
tag:
 - Vue.js
 - 前端
 - Javascript
 - Vuepress
title: Vuepress表格点击复制组件
description: Vuepress表格点击复制组件
---

在收集Markdown表情时突发奇想想搞个点击复制的组件，刚好可以用来熟悉vuepress

<!-- more -->

首先是Vuepress插件的使用，这个很简单，在.vuepress目录下创建components文件夹（当然，位置无所谓，方便管理罢了），然后在`client.ts`文件中导入即可，例如我的`TableClick2Copy.vue`组件，在`client.ts`中做如下声明即可：

```typescript
import { defineClientConfig } from "@vuepress/client";
import TableClick2Copy from "./components/TableClick2Copy.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("TableClick2Copy", TableClick2Copy);
    },
});
```

然后在对应文章中直接使用就好，这点Vuepress官方文档都有写

这个功能实现很简单，就是监听表格点击事件，然后将表格内容放到剪切板即可

基本代码如下：

```javascript
import { ref, onMounted } from 'vue';
// 控制popup的显示和显示内容
const visible = ref(false);
const content = ref('');

onMounted(() => {
    const tables = document.querySelectorAll('table');
    if (!tables) return;
    tables.forEach((table) => {
        table.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            // 点击的对象如果是对应的表格
            if (target.nodeName === 'TD' || target.nodeName === 'CODE') {
                const text = target.innerText;
                // 内容写进剪贴板
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
```

这里的popup随便实现一下就好

给个例子

```vue
<template>
    <Teleport to="#app">
        <Transition name="popup">
            <div class="popup" v-if="visible">
                {{ content }} - 已复制
            </div>
        </Transition>
    </Teleport>
</template>

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
```

目前我也想不到有什么更好的想法，如果有就麻烦佬们给个点子:kissing_closed_eyes: