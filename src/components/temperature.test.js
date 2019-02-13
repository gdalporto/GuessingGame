import React from 'react';
import { shallow } from 'enzyme';
import Temperature from './temperature';

describe('<Temperatiure /> component testing',()=>{
    let winningNumber=50;

    // smoke test
    it('should render',()=>{
        let userGuess=45; 

        shallow(<Temperature userGuess winningNumber/>);
    })

    // props and state

    it('should return expected HOT', () =>{
        let userGuess=45; 
        let referenceReturn = ["Heat Level: ", "HOT"];
        const wrapper = shallow(<Temperature userGuess winningNumber />);
        expect(wrapper.props().children).toEqual(referenceReturn);
       
    })

    it('should return expected COLD', () =>{
        let userGuess=35; 
        let referenceReturn = ["Heat Level: ", "HOT"];
        const wrapper = shallow(<Temperature userGuess winningNumber />);
        expect(wrapper.props().children).toEqual(referenceReturn);
       
    })

    // callbacks and events
    // N/A

})
