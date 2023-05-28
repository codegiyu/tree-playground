

const Node: React.FC<NodeComponent> = ({ nodeData, bottomLine }) => {
    // const {data, left, right} = nodeData

    if (!nodeData?.data) return (
        <div className="bg-transparent" style={{width: "50px", height: "35px"}}></div>
    )
    return (
        <div className={`${nodeData?.data ? "bg-green" : "bg-black"} border border-black grid place-items-center relative`} 
            style={{width: "50px", height: "35px"}}
        >
            {nodeData && nodeData.data ? nodeData.data.value : ""}
            {nodeData?.left || nodeData?.right ? (
                    <div className="absolute -bottom-5 left-[24.5px] h-5 w-[1px] bg-black"></div>
                ) : null
            }
            {nodeData?.left ? (
                    <>
                        <div className="absolute -bottom-5 right-[50%] translate-x-[0.5px] h-[1px] bg-black" style={{width: `${bottomLine/2}px`}}></div>
                        <div className="absolute -bottom-[39px] h-5 w-[1px] bg-black" style={{right: `${(bottomLine/2) + 23.5}px`}}></div>
                    </>
                ) : null
            }
            {nodeData?.right ? (
                    <>
                        <div className="absolute -bottom-5 left-[50%] -translate-x-[0.5px]  h-[1px] bg-black" style={{width: `${bottomLine/2}px`}}></div>
                        <div className="absolute -bottom-[39px] h-5 w-[1px] bg-black" style={{left: `${(bottomLine/2) + 23.5}px`}}></div>
                    </>
                ) : null
            }
        </div>
    )
}

export default Node