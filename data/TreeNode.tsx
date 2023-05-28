export class TreeNode {
    data: NodeData;
    left: NodeSingle | null;
    right: NodeSingle | null;

    constructor (value: string, id: number, level: number) {
        this.data = {value, id, level},
        this.left = null
        this.right = null
    }
}