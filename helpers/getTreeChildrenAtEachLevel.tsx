export default function getTreeChildrenAtEachLevel(tree: Tree) {
    const nodesArr: (NodeCompData | null)[][]  = [], root = tree.root
    let queue = [root];

    while(queue.length > 0){
        let size = queue.length;
        let levelArr: (NodeCompData | null)[] = []

        for(let i = 0; i < size; i++){
            let tempNode = queue.shift();

            let data = null

            if (tempNode) {
                data = {
                    data: tempNode.data,
                    left: !!tempNode.left,
                    right: !!tempNode.right
                }
            }

            levelArr.push(tempNode ? data : null)

            /*Enqueue left child */
            if(tempNode){
                queue.push(tempNode.left);
            } else queue.push(null);

            /*Enqueue right child */
            if(tempNode){
                queue.push(tempNode.right);
            } else queue.push(null)
        }
        
        if (levelArr.some(item => !!item !== false)) {
            nodesArr.push(levelArr)
        } else {
            queue = []
        }
    }

    return nodesArr
}
