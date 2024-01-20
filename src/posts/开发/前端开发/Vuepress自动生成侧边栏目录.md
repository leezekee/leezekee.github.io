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
title: Vuepress自动生成侧边栏目录
description: Vuepress自动生成侧边栏目录
---

太懒不想手动写侧边栏结构？花亿点时间就好！

<!-- more -->

基本思路很简单，就是把所有md文件拿过来，分析目录结构就好

说明一下，我的所有文章都在`src`目录下的`posts`目录中，自动生成的逻辑是文件夹为一个分类，文件名为侧边栏展示名称

这里我选择用一棵树来存放目录结构，于是我自己实现了一颗专用于维护目录的树

```js
// tree.js
class Node {
    constructor(_data, _root = false) {
        this.data = _data;
        this.children = [];
        this.isLeaf = false;
        this.isRoot = _root;
    }
    appendChild(node) {
        if (!(node instanceof Node)) {
            throw new Error('node must be a Node instance');
        }
        this.children.push(node);
    }
    setData(data) {
        if (data instanceof Node) {
            throw new Error('data can\'t be a Node instance');
        }
        this.data = data;
    }
}

class Tree {
    constructor(_root) {
        this.root = _root;
    }
    // 用于查找对应元素是否在树中，插入时使用
    find(target) {
        if (this.root === null) {
            return null;
        }
        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            if (node.data === target) {
                return node;
            }
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        return null;
    }
    // 用于将一个文件路径插入树中
    // 如 ‘posts/开发/前端开发/test.md’
    // 利用次函数可以将test.md插入到posts节点下的开发节点下的前端开发的子节点中
    insert(array) {
        if (array.length === 0) {
            return;
        }
        let parent = this.root;
        array.forEach((item, index) => {
            let node = this.find(item);
            if (node === null) {
                node = new Node(item);
                parent.appendChild(node);
            }
            parent = node;
            if (index === array.length - 1) {
                parent = this.root;
                node.isLeaf = true;
            }
        });
    }
}

export { Tree, Node };
```

当然，方法不止这一种，只是我觉得用树会比较直观

然后就是把`posts`目录下的所有md文件读出来就好了

```js
import fs from 'fs';
import path from 'path';

function readDir(dir, pattern) {
    let fileList = [];
    fs.readdirSync(path.resolve(dir)).forEach(file => {
        let filePath = `${dir}/${file}`;
        if (pattern.test(file)) {
            fileList.push(filePath);
        }
        if (fs.statSync(filePath).isDirectory()) {
            fileList.push(...readDir(filePath, pattern));
        }
    })
    return fileList;
}
```

这个函数也很好理解，就是把当前目录下内容拿过来看，是文件就放到list集合中，不是就递归下去

有了这个列表，我们只需要调用之前封装好的Tree类下的insert函数即可

插入完成后我们还需要遍历，遍历就十分简单，直接递归调用就好了

```js
function traverse(root) {
    if (root.isRoot) {
        return {text: "文章列表",prefix: "posts/",icon: 'book',collapsible: false,children: [...root.children.map(child => traverse(child))]}
    } else if (root.isLeaf) {
        return { text: root.data.replace('.md', ''), link: root.data.replace('.md', '') }
    } else {
        return { text: root.data,prefix: root.data, collapsible: true,children: [...root.children.map(child => traverse(child))]}
    }
}
```

主体函数如下

```js
function getSideBar(opt = {}) {
    let options = {
        basePath: 'src',
        postsPath: 'posts',
        pattern: /\.md$/,
        rootCollapsable: false,
        nodeCollapsable: true,
        rootName: '文章列表',
        rootIcon: 'book',
        ...opt
    };
    let files = readDir(`${options.basePath}/${options.postsPath}`, options.pattern);
    const tree = new Tree(new Node(options.postsPath, true));
    files.forEach(file => {
        tree.insert(file.replace(`${options.basePath}/${options.postsPath}/`, '').split('/'));
    })
    return traverse(tree.root);
}
```

这个是可以传一些配置文件的，你可以根据实际情况修改

结果示例：

```js
{
    text: "文章列表",
    prefix: "posts/",
    icon: 'book',
    collapsible: false,
    children: [
        {
            text: "瞎折腾",
            prefix: "瞎折腾/",
            collapsible: true,
            children: [
                {
                    text: "平板+Windows实现远程唤醒+远程桌面",
                    link: "平板+Windows实现远程唤醒+远程桌面",
                },
                {
                    text: '使用256G洋垃圾打造3合1移动硬盘',
                    link: '使用256G洋垃圾打造3合1移动硬盘',
                },
                {
                    text: 'Windows无线网络突然消失',
                    link: 'Windows无线网络突然消失'
                }
            ],
        },
        {
            text: '开发',
            prefix: "开发/",
            collapsible: true,
            children: [
                {
                    text: '前端',
                    prefix: "前端开发/",
                    collapsible: true,
                    children: [
                        {
                            text: 'Axios封装',
                            link: 'Axios封装',
                        }, {
                            text: 'Vuepress自动生成侧边栏目录',
                            link: 'Vuepress自动生成侧边栏目录',
                        }
                    ],
                },
            ],
        }, {
            text: "算法",
            prefix: "算法",
            collapsible: true,
            children: [
                {
                    text: "树",
                    prefix: "树",
                    collapsible: true,
                    children: [
                        {
                            text: "树的深度相关问题",
                            link: "树的深度相关问题",
                        }
                    ]
                }
            ]
        }
    ]
},
```

大概就是这么个样式，再完善完善就把他整成个npm包:relaxed: