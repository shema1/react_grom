import React from "react";
import Greeting from "./Greeting";

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};


const Profile = () =>{
    return(<Greeting user={userData}/>)
}

export default Profile