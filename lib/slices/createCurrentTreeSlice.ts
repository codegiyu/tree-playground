import { StateCreator } from "zustand";
import { Tree } from "@/data/Tree";

export interface CurrentTreeSlice {
    tree: Tree | null;
    changesToTree: number;
    changeCurrentTree: (tree: Tree) => void;
    resetSessionStorage: () => void;
    addTreeNode: (value: string, parentID: number | null, position: "left" | "right") => void;
    updateTreeNode: (nodeID: number, newValue: string) => void;
}

const emptyTree = new Tree();

export const createCurrentTreeSlice: StateCreator<CurrentTreeSlice> = (set, get) => ({
    tree: emptyTree,
    changesToTree: 0,
    changeCurrentTree: (tree: Tree) => set(
        { tree }
    ),
    resetSessionStorage: () => {
        sessionStorage.removeItem("app-storage");
        window.location.reload();
    },
    addTreeNode: (value: string, parentID: number | null = null, position: "left" | "right" = "left") => {
        let tree: Tree | null = get().tree
        let num = get().changesToTree + 1
        console.log(tree, num, tree instanceof Tree, get().tree instanceof Tree)
        if (tree instanceof Tree !== true) {
            // console.log("I ran")
            // Object.setPrototypeOf(tree, Tree)
            get().resetSessionStorage();
            return;
            // set({ tree: emptyTree, changesToTree: num })
        }
        console.log(tree instanceof Tree)
        let newTree = tree?.addNode(value,parentID,position) 
        newTree = newTree ? newTree : tree
        console.log(newTree, newTree instanceof Tree)
        set({ tree: newTree, changesToTree: num })
    },
    updateTreeNode: (nodeID: number, newValue: string) => {
        let tree: Tree | null = get().tree
        let num = get().changesToTree + 1
        tree?.updateNode(nodeID, newValue)
        set({ tree, changesToTree: num })
    }
})