import React, { useState } from "react";


const Tabs = (props) => {
    // manage the state of the content window.
    const [content, setContent] = useState("");

    // create an array of objects that have a label and content pair.
    const tabArr = [
        {label: "Tab 1", content: "Tab 1 content is showing here"},
        {label: "Tab 2", content: "Tab 2 content is showing here"},
        {label: "Tab 3", content: "Tab 3 content is showing here"}
    ];

    const handleContentChange = (contentFromTab) => {
        setContent(contentFromTab);
        console.log(contentFromTab)
    }
    

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center",}}>
                {tabArr.map((tab, index) => (
                    <div>
                        <button 
                        style={{ 
                            margin: "10px", 
                            border: "2px solid black", 
                            padding: "5px" 
                            }}
                        onClick={ () => handleContentChange(tab.content) }
                            >
                            {tab.label}</button>
                    </div>
                ))}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Tabs;
