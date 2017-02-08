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
    it('Render', () => { 
        const cSpai = sinon.spy(console, 'info');
        // console.log(sinon.stub())
        // console.log(TestComponent({name:'max'}));
        // const wrapper = mount(<WrappedTest />);
        // const wrapper = mount(<TestComponent />);
        const wrapper = mount(<Wrappeado />);
        console.log(cSpai.args.length);

        // console.log(performance.now());
        // console.log('wrapper.props', wrapper.props);   
        // console.log(wrapper.html());        
        // console.log(stdout);
        // console.log(process.hrtime());
    });
})