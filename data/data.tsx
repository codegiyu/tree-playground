import { Tree } from "./Tree";

const SAMPLE_TREE = new Tree();

SAMPLE_TREE.addNode("1");
SAMPLE_TREE.addNode("2", 1);
SAMPLE_TREE.addNode("3", 1, "right");
SAMPLE_TREE.addNode("4", 2);
SAMPLE_TREE.addNode("5", 2, "right");
SAMPLE_TREE.addNode("6", 3);
SAMPLE_TREE.addNode("7", 3, "right");
SAMPLE_TREE.addNode("8", 4);
console.log(SAMPLE_TREE.addNode("10", 5));
SAMPLE_TREE.addNode("12", 6);
SAMPLE_TREE.addNode("15", 7);
console.log(SAMPLE_TREE.addNode("17", 9));
console.log(SAMPLE_TREE.findNode(5))

// console.log(SAMPLE_TREE.updateNode(4, "yes"))
console.log(SAMPLE_TREE)

export default SAMPLE_TREE