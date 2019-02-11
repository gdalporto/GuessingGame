import React from 'react'

export default function What(props) {



    return(
        <div className="overlay">
            <p>
                What do I do?
                This is a Hot or Cold Number Guessing Game. The game goes like this:

                1. I pick a random secret number between 1 to 100 and keep it hidden.
                2. You need to guess until you can find the hidden secret number.
                3. You will get feedback on how close ("hot") or far ("cold") your guess is.
                So, Are you ready?
            </p>
            <button onClick={()=>props.onCloseOverlayClick()} >
                    Got it! 
            </button>
        </div>
    )

}