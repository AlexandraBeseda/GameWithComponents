import React, {useState} from "react";


export type OnOffPropsType = {
    onChange:(on:boolean)=>void;
}



export const UnControlledOnOff = (props: OnOffPropsType) => {

    let[on,setOn]=useState(false);
    console.log("UnControlledOnOff rendering.On= "+on);
    const styleOn={
        width:"30px",
        height:"30px",
        border: "1px solid black",
        backgroundColor:on ? "green" : "white",
        margin:"2px",
        display:"inline-block",
     }

    const styleOff={
        width:"30px",
        height:"30px",
        border: "1px solid black",
        backgroundColor:on ? "white" : "red",
        margin:"2px",
        display:"inline-block"
    }

    const styleCircle={
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border: "1px solid black",
        backgroundColor:on ? "green" : "red",
        margin:"2px",
        display:"inline-block"
    }

    const onClicked=()=>{
    props.onChange(true)
    setOn(true)}

const offClicked=()=>{
    props.onChange(false)
    setOn(false)}


    return (
        <div>
            <div style={styleOn} onClick={onClicked}>On</div>
            <div style={styleOff} onClick={offClicked}>Off</div>
            <div style={styleCircle}></div>

        </div>
    );
}