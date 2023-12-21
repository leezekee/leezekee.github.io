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
