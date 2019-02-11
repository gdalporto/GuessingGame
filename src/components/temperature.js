import React from 'react';

export default function Temperature(props) {
    let message=""
    if(parseInt(props.userGuess)===parseInt(props.winningNumber)){
        message="WINNER";
    }
    else {
        if(Math.abs(props.userGuess-props.winningNumber)<=10){
            message="HOT"
        }
        else {
            message="COLD"
        };
    };
    
    return (
        <p>Heat Level: {message}</p>
    )    
}