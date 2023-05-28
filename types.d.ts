interface NodeData {
    id: number;
    level: number;
    value: string;
}

interface NodeSingle {
    data: NodeData;
    left: NodeSingle | null;
    right: NodeSingle | null;
}

interface TreeNode extends NodeSingle {}

interface TreeSingle {
    root: NodeSingle | null;
    size: number;
}

interface Tree extends TreeSingle {}

interface NodeCompData {
    data: NodeData;
    left: boolean;
    right: boolean;
}

interface NodeComponent {
    nodeData: NodeCompData | null;
    bottomLine: number;
}

interface NodeLevelComponent {
    nodesArray: (NodeCompData | null)[]
}

