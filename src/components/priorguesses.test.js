import React from 'react';
import { shallow } from 'enzyme';
import PriorGuess from './priorguesses';

describe('<PriorGuess /> component testing',()=>{

    // smoke test
    it('should render',()=>{
        let guessList = [10, 20];
        shallow(<PriorGuess priorguesses={guessList}/>);
    })

    // props and state
    it('should render div with prior guesses', () =>{
        let guessList = [10, 20];
        let referenceReturn = ['Prior Guesses: ', "10, 20"];
        const wrapper = shallow(<PriorGuess priorguesses={guessList}/>);
        expect(wrapper.hasClass('priorGuesses')).toEqual(true);
       
    })

    it('should return expected text', () =>{
        let guessList = [10, 20];
        let referenceReturn = ['Prior Guesses: ', "10, 20"];
        const wrapper = shallow(<PriorGuess priorguesses={guessList}/>);
        expect(wrapper.props().children.props.children).toEqual(referenceReturn);
       
    })

    // callbacks and events
    // N/A

})

