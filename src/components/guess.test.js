import React from 'react';
import { shallow, mount } from 'enzyme';
import Guess from './guess';
import Temperature from './temperature'
import { isNull } from 'util';

describe('<Guess /> component testing',()=>{

    // smoke test
    it('should render',()=>{
        shallow(<Guess />);
    })

    it('should update state based on guess', ()=>{

        const wrapper = shallow(<Guess />);
        wrapper.setState({
            winningNumber: 50
        })

        let referenceReturn = ["Heat Level: ", "COLD"];
        wrapper.instance().setGuess(35)
        expect(wrapper.state('userGuess')).toEqual(35);
        expect(wrapper.state('guessList')).toEqual([35]);

    })

    it('should restart game on click', ()=>{

        // const wrapper = shallow(<Guess />);
        // wrapper.setState({
        //     userGuess: 63,
        //     guessList: [22, 39, 63]
        // })

        // wrapper.instance().restartGame();
        // expect(wrapper.state('userGuess')).toBe(null);
        // expect(wrapper.state('guessList')).toEqual([]);

        window.location.reload = jest.fn();
        const wrapper = shallow(<Guess />);
        wrapper.setState({
            userGuess: 63,
            guessList: [22, 39, 63]
        })

        wrapper.instance().restartGame();
        expect(window.location.reload).toHaveBeenCalled();
        window.location.reload.mockRestore();


    })

    it('should show instructions on click', ()=>{
        const wrapper = shallow(<Guess />);
        wrapper.instance().handleOverlay(true);
        expect(wrapper.state('overlay')).toEqual(true);

    })

    // simulate restart game click. test state. test render.


})

    // props and states
    // CB={num=>this.setGuess(num)} guessNum={this.state.guessList.length}

    // callbacks