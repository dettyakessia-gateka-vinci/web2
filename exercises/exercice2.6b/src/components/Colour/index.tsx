import { useState } from "react";
import "./colour.css";


const colours=["red","blue","green","yellow","purple"];

const Colour = () => {
    const[currentColourIndex,setcurrentColourIndex]=useState(0);
    return(
        <div className="colour-box" 
        style={{ backgroundColor: colours[currentColourIndex] }}>
            <div>
            <button className="colour-box_button"
            onClick={() => setcurrentColourIndex((currentColourIndex + 1) % colours.length)}>
                {colours[(currentColourIndex +1)%colours.length]}
            </button>
            </div>
            <p>{colours[currentColourIndex]}</p>


        </div>
    )
}
export default Colour;