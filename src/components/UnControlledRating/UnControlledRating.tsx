import React, {useState} from "react";


type UnControlledRatingPropsType = {
    //   value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UnControlledRating = (props: UnControlledRatingPropsType) => {

    let [value, setValue] = useState(4);
    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}} /> {/* false */}
            {/* нажимаем кнопку и значение value=1 1>0=>selected=true */}
            <Star selected={value > 1} setValue={()=>{setValue(2)}} /> {/* false true */}
            <Star selected={value > 2} setValue={()=>{setValue(3)}} /> {/* false true true */}
            <Star selected={value > 3} setValue={()=>{setValue(4)}} /> {/* false true true true*/}
            <Star selected={value > 4} setValue={()=>{setValue(5)}} /> {/* false true true true true */}
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    setValue: () => void;
}

function Star(props: StarPropsType) {
    //debugger
    console.log("Star rendered");
    return <span onClick={() => {
        props.setValue()
    }}>
        {props.selected ? <b>star</b> : 'star'}
    </span>;

}