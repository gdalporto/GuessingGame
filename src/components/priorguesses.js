import React from 'react'

export default function PriorGuess(props) {

    return(
        <div className="priorGuesses">
            <p>Prior Guesses: {props.priorguesses.join(", ")}</p>
        </div>
    )


}