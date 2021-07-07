import React from "react";


export type collapsedType=boolean;

type AccordionPropsType = {
    titleValue: string;
    collapsed:collapsedType;
    onClick:()=>void;

}

function Accordion(props: AccordionPropsType) {
    //debugger
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}/>

            {props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onClick:()=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;