import { Tree, Node } from './tree.js';
import fs from 'fs';
import path from 'path';

function getAllDirbyType(dir, pattern) {
    let dirPath = path.resolve(dir);
    let files = fs.readdirSync(dirPath); // 该文件夹下的所有文件名称 (文件夹 + 文件)
    let resultArr = [];

    files.forEach(file => {
        let filePath = dir + '/' + file; // 当前文件 | 文件夹的路径

        // 满足查询条件文件
        if (pattern.test(file)) {
            resultArr.push(filePath);
        }

        // 继续深搜文件夹
        if (fs.statSync(filePath).isDirectory()) {
            resultArr.push(...getAllDirbyType(filePath, pattern));
        }

    })

    return resultArr;
}
let files = getAllDirbyType('src/posts', /\.md$/)

const traverse = (root) => {
    if (root.isRoot) {
        return {text: "文章列表",prefix: "posts/",icon: 'book',collapsible: false,children: [...root.children.map(child => traverse(child))]}
    } else if (root.isLeaf) {
        return { text: root.data.replace('.md', ''), link: root.data.replace('.md', '') }
    } else {
        return { text: root.data,prefix: root.data, collapsible: true,children: [...root.children.map(child => traverse(child))]}
    }
};

const tree = new Tree(new Node("posts", true));

files.forEach(file => {
    const nameList = file.replace('src/posts/', '').split('/');
    tree.insert(nameList);
})

export default traverse(tree.root)
