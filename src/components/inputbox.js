import React from 'react'

export default class InputBox extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state ={
    //         value: props.userGuess
    //     }
    // }
    handleChange(event) {
        console.log("NEW VALUE", event.target.value);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("INSIDE HANDLE SUBMIT");
//        const newGuess=document.getElementById("inputField").value;
        const newGuessNode=event.target.number;
        this.props.CB(newGuessNode.value);
        newGuessNode.value="";
//        document.getElementById("inputField").value='';
    };

    render () {
        console.log("HELLO FROM INPUTBOX");
        return (
            <div className="inputBoxContainer">
                <div className="formContainer" >
                    <form onSubmit={event=>this.handleSubmit(event)} >
                        <label className="formLabel">Enter your guess</label>
                        <input name="number" className="formInput" id='inputField' type="number"   />
                        <button className="formButton" type="submit">Guess</button>
                    </form>

                </div>
                <div className="countContainer">
                    <p>Guess #{this.props.guessNum}!</p>
                </div>
            </div>
        )
    }


}
 //onChange={event=>this.handleChange(event)}