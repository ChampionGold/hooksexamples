import React ,{useEffect,useState}from 'react';

function NewButton(){
    const [buttonText,setText] = useState("Click it now, bro!");
    const btnTrigger = () => setText("Button clicked, thanks dude!");
    return(<button className="btn btn-lg btn-primary" onClick={btnTrigger}>{buttonText}</button>);
}

export default NewButton;
