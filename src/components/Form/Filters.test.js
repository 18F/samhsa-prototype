import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from './Filters';

describe('Filters component', () => {
  it('displays correct toggle link text', () => {
    const component = shallow(<Filters />);
    const toggleBtn = component.find('.filter-link');

    expect(toggleBtn.text()).toBe('More filters');
    toggleBtn.simulate('click');
    expect(component.find('.filter-link').text()).toBe('Less filters');
  });

  it('toggle additional filter container', () => {
    const component = shallow(<Filters />);
    const toggleBtn = component.find('.filter-link');

    expect(component.find('.filter-container').length).toBe(0);
    toggleBtn.simulate('click');
    expect(component.find('.filter-container').length).toBe(1);
  });

  it('calls resetAdvancedFilters method when filters are hidden', () => {
    const mockDispatch = jest.fn();
    const component = shallow(<Filters resetAdvancedFilters={mockDispatch} />);
    const toggleBtn = component.find('.filter-link');

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(0);

    toggleBtn.simulate('click');

    expect(mockDispatch.mock.calls.length).toBe(1);
  });
});