import "../../src/App.css"
import React,{ useState } from "react";
export function Task() {
    const [text,setText]=useState('');
    const handleOnChange=(event)=>{
        setText(event.target.value);
    };
     
    return(
        <div class="word-counter-container">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea onChange={handleOnChange} value={text} cols={30} rows={10} class="words"></textarea>
            <div class="word-count">Word Count:
            <span>{text.split(" ").length-1}</span></div>
        </div>
    )
}