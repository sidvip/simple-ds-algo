/**
 * Implementation of Binary Tree Data Structure
 *
 * Author: Siddhartha Vibhu Pharswan
 * Date: Jan 06, 2022
 */

let _BinaryTreeNode = function BinaryTreeNode(value, idx) {
    this.value = value;
    this.idx = idx;
    this.left = null;
    this.right = null;
}

let _BinaryTree = function() {

    let _root = null;

    this.getTree = () => {return _root;};

    this._insertNode = function(root, node) {

        if (root. value === node.value && root.idx === node.idx) {
            root.left = node.left;
            root.right = node.right;
            return;
        }

        if (root.left) {
            this._insertNode(root.left, node);
        }

        if (root.right) {
            this._insertNode(root.right, node);
        }

    }

    this.createTree = function (treeArray) {
        for (let i = 0; i < treeArray.length; i++) {

            let val = treeArray[i];
            let left = treeArray[2 * i + 1];
            let right = treeArray[2 * i + 2];

            let _treeNode = new _BinaryTreeNode(val, i);
            _treeNode.left = left ? new _BinaryTreeNode(left, 2 * i + 1) : null;
            _treeNode.right = right ? new _BinaryTreeNode(right, 2 * i + 2) : null;

            if (i === 0) {
                _root = _treeNode;
            } else {
                this._insertNode(_root, _treeNode);
            }

            if ((2 * i + 1) === treeArray.length || (2 * i + 2) === treeArray.length) {
                break;
            }

        }

        return 0;
    }

    this.inOrderTraversal = function(root) {
        if (root === null) {
            return "Create a tree first"
        }
        if (!root) return new Error("Pass the root of the tree");

        this.inOrderTraversal(root.left);
        console.log(root.value);
        this.inOrderTraversal(root.right);
    }

    this.preOrderTraversal = function(root) {
        if (root === null) {
            return "Create a tree first"
        }
        if (!root) return new Error("Pass the root of the tree");

        console.log(root.value);
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right);
    }

    this.postOrderTraversal = function(root) {
        if (root === null) {
            return "Create a tree first"
        }
        if (!root) return new Error("Pass the root of the tree");

        this.postOrderTraversal(root.left);
        this.postOrderTraversal(root.right);
        console.log(root.value);
    }
}

module.exports = {
    BinaryTree: _BinaryTree,
    BinaryTreeNode: _BinaryTreeNode
}