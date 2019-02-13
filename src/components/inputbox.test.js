import React from 'react';
import { shallow, mount } from 'enzyme';
import InputBox from './inputbox';

describe('<InputBox /> component testing',()=>{
    let guessList = [10, 20];

    // smoke test
    it('should render',()=>{
        console.log("HELLO FROM IF RENDER");
        const callback = jest.fn();
        shallow(<InputBox 
            CB={callback}
            guessNum={guessList.length} />);
    })

    it('should fire the callback on submit', ()=>{
        console.log("HELLO FROM IF CB TEST");
        const callback = jest.fn();
        const value=50;
        const wrapper=mount(<InputBox CB={callback} guessNum={guessList.length} />);

        wrapper.find('input[type="number"]').instance().value=value;
        console.log("NUMBER INPUTED BEFORE SUBMIT IS", wrapper.find('input[type="number"]').instance().value)
        wrapper.simulate('submit');
        console.log("AFTER SUBMIT")
//        expect(wrapper.find('input[type="number"]').instance().value).toEqual(value.toString());
        expect(callback).toHaveBeenCalled;    
//        expect(callback).toHaveBeenCalledWith(value.toString());    
    })

})

    // props and states
    // CB={num=>this.setGuess(num)} guessNum={this.state.guessList.length}

    // callbacks