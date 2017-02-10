import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sastre from '../lib';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{this.props.name}</div>)  
    }
};

const Wrappeado = sastre(TestComponent);


function WrappedTest() {
    return sastre(<TestComponent name="item"/>)
}

describe('react-perf-hoc', () => {
    const cSpai = sinon.spy(console, 'info');
    afterEach(()=> {
        cSpai.reset();
    }) ;
    
    it('Render and console and info if component wont update', () => { 
        
        const wrapper = mount(<Wrappeado />);
        const constructorMsg = /Initial Render: \d+ms/g;
        const iRender = constructorMsg.test(cSpai.args[0][0]);
        expect(cSpai.args.length).toBe(1);
        expect(iRender).toBe(true);
    });
    it('Render and console 2 infos if component update', () => { 
        // const cSpai = sinon.spy(console, 'info');
        const wrapper = mount(<Wrappeado />);
        wrapper.setProps({ name: 'carina' });
        const constructorMsg = /Initial Render: \d+ms/g;
        const updateMsg = /Update component in: \d+ms/g;
        
        const iRender = constructorMsg.test(cSpai.args[0][0]);
        const iUpdate = updateMsg.test(cSpai.args[1][0]);
        
        expect(cSpai.args.length).toBe(2);
        expect(iRender).toBe(true);
        expect(iUpdate).toBe(true);
         
    });
})