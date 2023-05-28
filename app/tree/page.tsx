"use client";

import helpers from "@/helpers";
import SAMPLE_TREE from "@/data/data";
import { useEffect, useRef, useState } from "react";
import NodeLevel from "@/Components/NodeLevel";
import { useAppStore } from "@/lib/store";
import AddNodeForm from "@/Components/AddNodeForm";
import html2canvas from "html2canvas";

export default function Playground() {
    const { tree } = useAppStore()
    const { changesToTree } = useAppStore()

    const [treeLevels, setTreeLevels] = useState<(NodeCompData | null)[][]>([])
    const [playgroundWidth, setPlaygroundWidth] = useState<number>(100)
    const [playgroundHeight, setPlaygroundHeight] = useState<number>(100)

    const playgroundRef = useRef<HTMLDivElement>(null)

    console.log(changesToTree)

    const downloadPlayground = async () => {
        if (playgroundRef.current) {
            let canvasRes = await html2canvas(playgroundRef.current)

            const canvas = canvasRes;
            const dataURL = canvas.toDataURL();

            // Construct the 'a' element
            let link: HTMLAnchorElement = document.createElement("a");
            link.download = "tree";
            link.target = "_blank";

            // Construct the URI
            link.href = dataURL;
            document.body.appendChild(link);
            link.click();

            // Cleanup the DOM
            document.body.removeChild(link);
            // delete link;
        }
    }

    useEffect(() => {
        if (tree) {
            const levels = helpers.getTreeChildrenAtEachLevel(tree)
            if (levels.length > 6) setPlaygroundHeight(200)
            if (levels.length > 4) setPlaygroundWidth(100 * (levels.length - 3))
            console.log(levels)
            setTreeLevels(levels)
        }
    }, [changesToTree])

    return (
        <div className="w-full h-screen bg-white flex">
            <section className="w-[400px] flex-none h-full px-4 py-14 bg-slate-500 border-r border-black">
                <AddNodeForm />
            </section>
            <section className="flex-1 h-full flex flex-col items-center bg-slate-200 pt-11 px-20 overflow-y-scroll">
                <div className="buttons-line py-6 px-20 mb-16 flex justify-center">
                    <button onClick={ downloadPlayground } className="px-8 py-3 text-base text-white bg-cyan-950 
                        hover:bg-green-700 transition-all duration-500 ease-in-out rounded-md"
                    >
                        Take Snapshot
                    </button>
                </div>

                <div className="playground-wrap w-[900px] h-[500px] p-6 bg-white border border-black">
                    <div className="playground-display-wrap w-full h-full overflow-scroll">
                        <div ref={playgroundRef} className="playground-display py-3" style={{width: `${playgroundWidth}%`, height: `${playgroundHeight}%`}}>
                            {treeLevels.length !== 0 ? (
                                <div className="w-full grid gap-10">
                                    {treeLevels.map((level, idx) => <NodeLevel key={`level-${idx + 1}`} nodesArray={level} />)}
                                </div>
                            ): (
                                <div className="w-full h-full grid place-items-center">
                                    <p>Use the sidebar to create a tree</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}