import { TreeNode } from "./TreeNode";

export class Tree {
    root: TreeNode | null;
    size: number;

    constructor() {
        this.root = null
        this.size = 0
    }

    findNode(id: number): TreeNode | null {
        if (this.size === 0) return null

        const checkNode = (node: TreeNode | null): TreeNode | null => {
            if (!node) return null;
            return node.data.id === id ? node : checkNode(node.left) || checkNode(node.right)
        }

        return checkNode(this.root)
    }

    addNode(value: string, parentID: number | null = null, position: "left" | "right" = "left") {
        if (!parentID) {
            if (this.root) return null
            this.root = new TreeNode(value, ++this.size, 1)
            return this
        }

        let parent = this.findNode(parentID)

        if (!parent) return null
        // if (value === parent.data.value) return null

        if (position === "left") {
            if (parent.left) {
                if (parent.right) {
                    alert("Parent node already has 2 children!")
                    return null
                } else {
                    let putOnRight = prompt("Parent already has a left child. Should new child be added on the right?")

                    if (putOnRight) {
                        let newNode = new TreeNode(value, ++this.size, parent.data.level + 1)
                        parent.right = newNode
                        return this
                    } else return this
                }
            } else {
                let newNode = new TreeNode(value, ++this.size, parent.data.level + 1)
                parent.left = newNode
                return this
            }
        } else {
            if (parent.right) {
                if (parent.left) {
                    alert("Parent node already has 2 children!")
                    return null
                } else {
                    let putOnLeft = prompt("Parent already has a right child. Should new child be added on the left?")

                    if (putOnLeft) {
                        let newNode = new TreeNode(value, ++this.size, parent.data.level + 1)
                        parent.right = newNode
                        return this
                    } else return this
                }
            } else {
                let newNode = new TreeNode(value, ++this.size, parent.data.level + 1)
                parent.right = newNode
                return this
            }
        }
    }

    updateNode(nodeID: number, newValue: string) {
        const node = this.findNode(nodeID)

        if(node) {
            node.data.value = newValue
        }

        return this
    }
}