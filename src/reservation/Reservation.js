import React from 'react';

const reservation = (props) => {
    return <p>{props.id} -- {props.bookedBy} -- {props.phone}</p>;
};

export default reservation;