import React from 'react';
import { shallow, mount } from 'enzyme';
import sastre from '../lib';

function TestComponent(props) {
    return(
        <div>{props.name}</div>
    );
};

function WrappedTest() {
    return sastre(<TestComponent name="item"/>)
}

describe('react-perf-hoc', () => {
    it('Render', () => {     
        // console.log(testComponent({name:'max'}));
        const wrapper = mount( <sastre />            
        );
        console.log(wrapper.html());        
    });
})