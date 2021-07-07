import React from "react";


export type OnOffPropsType = {
    on: boolean;
    onChange:(on:boolean)=>void
}


export const OnOff = (props: OnOffPropsType) => {

    console.log("OnOff rendering.On= " + props.on);
    const styleOn = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white",
        margin: "2px",
        display: "inline-block",
    }

    const styleOff = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: props.on ? "white" : "red",
        margin: "2px",
        display: "inline-block"
    }

    const styleCircle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "red",
        margin: "2px",
        display: "inline-block"
    }

    return (
        <div>
            <div style={styleOn} onClick={()=> props.onChange(true)}>On</div>
            <div style={styleOff} onClick={()=>props.onChange(false)}>Off</div>
            <div style={styleCircle}></div>

        </div>
    );
}