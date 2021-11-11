import { useState } from "react"

export const AchievmentCard = ({category, title}) => {

    const [ frontFace, setFrontFace ] = useState(true);

    return (
        <div
        onMouseEnter={()=>setFrontFace(false)}
        onMouseLeave={()=>setFrontFace(true)}
        >
            { frontFace ? (
                <h3>{category}</h3>
            ):(
                <h3>{title}</h3>
            )}

        </div>
    )
}