import React from "react"
import Element from "./Element"
import img from "../../../public/OIP.jpg"

interface ElementsProps {}

const Elements: React.FC<ElementsProps> = () => {
    return (
        <>
            <div className="flex p-5">
                <Element image={`${img.src}`} name="Horizontal Scaling vs Vertical Scaling"/>
            </div>
        </>
    )
}
export default Elements