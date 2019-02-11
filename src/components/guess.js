import React from 'react'
import './guess.css'
import Temperature from './temperature'
import InputBox from './inputbox'
import PriorGuesses from './priorguesses'
import What from './what'

export default class Guess extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userGuess:null,
            winningNumber: Math.round(Math.random()*100),
            guessList:[],
            overlay: false

        }
    }
    setGuess(userGuess) {
        console.log("userGuess",userGuess);
        this.setState({
            userGuess,
            guessList: this.state.guessList.concat(userGuess)
//            guessList: [...this.state.guessList, userGuess]
        }, function(){console.log("newState",this.state)})
    }
    restartGame() {
        window.location.reload();
    }
    handleOverlay(overlayToggle) {
        this.setState({
            overlay: overlayToggle
        })
    }



    render() {
        const gameTitle = "HOT or COLD";
        const manual = "WHAT?";
        const newGame = "+NEWGAME"

        if(this.state.overlay){
            return(
                <What onCloseOverlayClick={()=>this.handleOverlay(false)} />
            )
        }


        console.log("userGuess", this.state.userGuess, "winningNumber", this.state.winningNumber, "guessList", this.state.guessList)
        return(
            <div className="page">
                <div className="header">
                    <div className="manual">
                        <button className="WhatLink" onClick={(event)=>{
                            event.preventDefault();
                            this.handleOverlay(true)}}>
                                {manual}
                        </button>
                    </div>
                    <div className="newGame">
                        <button className="newGameLink" onClick={()=>this.restartGame()}>{newGame}</button>
                    </div>
                </div>
                <div className='gameWrapper'>
                    <h1>{gameTitle}</h1>
                    <div className='gameBox'>
                        <div className='heatLevel'>
                            <Temperature 
                                userGuess={this.state.userGuess} 
                                winningNumber={this.state.winningNumber} />
                        </div>
                        <div className='inputBox'>
                            <InputBox CB={num=>this.setGuess(num)} guessNum={this.state.guessList.length} />
                        </div>
                        <div className='priorGuesses'>
                            <PriorGuesses priorguesses={this.state.guessList} />
                        </div>
                    </div>
                </div>
            </div>
        )
}

}


