import { Tree, Node } from './tree.js';
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
function traverse(root) {
    if (root.isRoot) {
        return {text: "文章列表",prefix: "posts/",icon: 'book',collapsible: false,children: [...root.children.map(child => traverse(child))]}
    } else if (root.isLeaf) {
        return { text: root.data.replace('.md', ''), link: root.data.replace('.md', '') }
    } else {
        return { text: root.data,prefix: root.data, collapsible: true,children: [...root.children.map(child => traverse(child))]}
    }
}

/**
 * 获取生成的侧边栏结构
 * @param {object} opt 配置项
 * @param {string} opt.basePath 文章目录所在目录
 * @param {string} opt.postsPath 文章目录
 * @param {RegExp} opt.pattern 文章文件匹配规则
 * @param {boolean} opt.rootCollapsable 根节点是否可折叠
 * @param {boolean} opt.nodeCollapsable 其他节点是否可折叠
 * @param {string} opt.rootName 根节点名称
 * @param {string} opt.rootIcon 根节点图标
 * @returns {object} 侧边栏结构
 * @example
 * ```js
 *  const sidebar = getSideBar({
 *      basePath: 'src',
 *      postsPath: 'posts',
 *      pattern: /\.md$/,
 *      rootCollapsable: false,
 *      nodeCollapsable: true,
 *      rootName: '文章列表',
 *      rootIcon: 'book'
 *  })
 * ```
 */
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

export default getSideBar;
