import React from 'react';




const Greeting = (props) =>{
    return(
    <div>{`My name is ${props.name} ${props.lastName}. I am ${props.age} years old`}</div>
    )
}

export default Greeting