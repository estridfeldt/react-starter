import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import SampleComponent from '../src/sample-component';

describe('root', function () {
    it('renders without problems', function () {
        var sampleComponent = TestUtils.renderIntoDocument(<SampleComponent/>);
        expect(sampleComponent).toExist();
    });
});
