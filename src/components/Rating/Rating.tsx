import React from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value>0} onClick={props.onClick} value={1}/> {/* false */}
            <Star selected={props.value>1} onClick={props.onClick} value={2}/> {/* false true */}
            <Star selected={props.value>2} onClick={props.onClick} value={3}/> {/* false true true */}
            <Star selected={props.value>3} onClick={props.onClick} value={4}/> {/* false true true true */}
            <Star selected={props.value>4} onClick={props.onClick} value={5}/> {/* false true true true true */}
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    onClick: (value: RatingValueType) => void;
    value: RatingValueType
}

function Star(props: StarPropsType) {
    //debugger
    console.log("Star rendered");
    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star</b> : 'star'}
    </span>;
}