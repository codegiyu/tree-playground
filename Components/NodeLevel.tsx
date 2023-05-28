import { useEffect, useRef, useState } from "react";
import Node from "./Node";

const NodeLevel: React.FC<NodeLevelComponent> = ({ nodesArray }) => {
    const [bottomLine, setBottomLine] = useState<number>(0)

    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lineRef.current) {
            let fullWidth = lineRef.current.clientWidth
            let lineLength = fullWidth/(nodesArray.length * 2)
            setBottomLine(lineLength)
        }
    }, [])

    return (
        <div ref={lineRef} className="w-full h-fit relative flex justify-around">
            {nodesArray.map((node, idx) => <Node key={`node-${idx}`} nodeData={node} bottomLine={bottomLine} />)}
        </div>
    )
}

export default NodeLevel