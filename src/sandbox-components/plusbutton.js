import React from 'react';

function Button(props){
    const functionInjecter = () => props.onClickFunction(props.increment);
    return(
        <button onClick={functionInjecter}> 
            {props.increment}
        </button>
    );
}

export default Button;