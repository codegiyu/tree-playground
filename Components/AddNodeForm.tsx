import { useRef, useState } from "react"
import { useAppStore } from "@/lib/store"

const defaultInputs = { parentID: "", value: "", position: "" }

const AddNodeForm: React.FC = () => {
    const { addTreeNode } = useAppStore()
    const [inputValues, setInputValues] = useState(defaultInputs)

    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let name = e.target.name, value = e.target.value

        setInputValues(prevState => {
            return { ...prevState, [name]: value }
        })
    }

    const handleAddNode = (e: React.FormEvent) => {
        e.preventDefault();
        const id = inputValues.parentID ? Number(inputValues.parentID) : null
        const position = inputValues.position === "left" || inputValues.position === "right" ? inputValues.position : "left"
        console.log(inputValues.value, id, position)
        addTreeNode(inputValues.value, id, position) 

        if (formRef.current) {
            formRef.current.reset()
        }
    }

    return (
        <form ref={formRef} className="w-full bg-white rounded-xl p-5">
            <h2 className="mb-5 text-lg leading-8 font-semibold text-center">Add a new node</h2>
            <div className="inputs-wrap grid gap-4">
                <div className="w-full">
                    <label className="w-full">
                        <span className="text-sm">Parent ID</span>
                        <input type="number" onChange={handleChange} value={inputValues.parentID} name="parentID"
                            className="w-full text-base leading-6 py-3 px-4 border border-gray-600 hover:border-green-600 active:border-green-800
                            rounded-md" 
                        />
                    </label>
                </div>
                <div className="w-full">
                    <label className="w-full">
                        <span className="text-sm">Value</span>
                        <input type="text" onChange={handleChange} value={inputValues.value} name="value"
                            className="w-full text-base leading-6 py-3 px-4 border border-gray-600 hover:border-green-600 active:border-green-800
                            rounded-md" 
                        />
                    </label>
                </div>
                <div className="w-full">
                    <label className="w-full">
                        <span className="text-sm">Position</span>
                        <select onChange={handleChange} value={inputValues.position} name="position"
                            className="w-full text-base leading-6 py-3 px-4 border border-gray-600 hover:border-green-600 active:border-green-800
                            rounded-md" 
                        >
                            <option value="left" className="w-full py-2 px-4">Left</option>
                            <option value="right" className="w-full py-2 px-4">Right</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="buttons-line flex justify-center my-6">
                <button type="submit" onClick={handleAddNode} className="px-8 py-3 text-base text-white bg-cyan-950 
                    hover:bg-green-700 transition-all duration-500 ease-in-out rounded-md"
                >
                    Add node
                </button>
            </div>
        </form>
    )
}

export default AddNodeForm