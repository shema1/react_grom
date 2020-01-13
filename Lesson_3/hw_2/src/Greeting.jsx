import React from 'react';
import moment from 'moment'

const formatDate = date => moment(date).format("DD MMM YYYY");

const Greeting = (props) =>{
    return(
    <div>{` ${props.user.firstName} ${props.user.lastName}. Was born ${formatDate(props.user.birthDate)} in ${props.user.birthPlace}`} </div>
    )
}

export default Greeting