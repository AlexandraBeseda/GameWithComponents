import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import Accordion, {collapsedType} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendered");


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed,setCollapsed]=useState<collapsedType>(false);
    let [switchOn,setSwitchOn]=useState<boolean>(false);


    return (
        <div className="App">
            UncontrolledAccordion
            <UnControlledAccordion titleValue={"First Accordion"}/>

            Rating
            <Rating value={ratingValue} onClick={(value) =>setRatingValue(value)}/>
            ControlledAccordion
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={()=>setCollapsed(!accordionCollapsed)}/>


           <UnControlledOnOff onChange={setSwitchOn}/>

            <OnOff on={switchOn} onChange={setSwitchOn}/>{switchOn.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
