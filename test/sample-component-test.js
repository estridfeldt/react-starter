import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import SampleComponent from '../src/sample-component';

describe('sample component', function () {
    it('renders without problems', () => {
        var sampleComponent = TestUtils.renderIntoDocument(<SampleComponent/>);
        expect(sampleComponent).toExist();
    });

    it('shallow renders with enzyme without problems', () => {
        const wrapper = shallow(<SampleComponent/>);
        expect(wrapper.find('div').length).toBe(1);
    });

    it('full renders with enzyme without problems', () => {
        const wrapper = mount(<SampleComponent/>);
        expect(wrapper.find('div').length).toBe(1);
    });
});
