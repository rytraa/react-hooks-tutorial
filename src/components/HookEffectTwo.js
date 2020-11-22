import React, { useEffect, useState } from 'react'

function HookEffectTwo() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouseCoord = (event) => {
        console.log("MouseEvent updated.");
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log("MouseEvent mounted.");
        window.addEventListener("mousemove",logMouseCoord)
        return () => {
            window.removeEventListener("mousemove",logMouseCoord);
            console.log("MouseEvent unmounted");
        }
    },[])

    return (
        <div>
            <h3>Hook Mouse - ({x}, {y})</h3>
        </div>
    )
}

export default HookEffectTwo
