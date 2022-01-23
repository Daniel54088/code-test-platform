import React from 'react';
import {render, fireEvent,  screen, RenderResult} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Select from '../components/Select';

const correctDataFomat =[
  {
    label: "Papua New Guinea",
    pngUrl: "🇵🇬",
    value: "Papua New Guinea"
  },
  {
    label: "Lithuania",
    pngUrl: "🇱🇹",
    value: "Lithuania",
  }
];

let documentBody: RenderResult;

describe('<Select />', () => {

  beforeEach(() => {
    documentBody = render(<Select data={correctDataFomat} loading={false} />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it('Shows Select when in the begin', () => {
    const SelectContainer = screen.getByLabelText('select-container');
    expect(SelectContainer).toHaveTextContent('Select')
  });

  it('List will display none before click and display block after click', () => {
   
    const SelectContainer = screen.getByLabelText('select-container');
    const List = screen.getByLabelText('List');
    expect(List).toHaveStyle(`display: none`);
    userEvent.click(SelectContainer);
    expect(List).toHaveStyle(`display: block`);

  });

  it('Country items will render successfully', () => {
   
    const SelectContainer = screen.getByLabelText('select-container');
    userEvent.click(SelectContainer);

    const countryItems = screen.getAllByLabelText('country-name');

    expect(countryItems[0]).toHaveTextContent('Papua New Guinea');
    expect(countryItems[1]).toHaveTextContent('Lithuania');

  });

  it('Search item works fine', () => {
    //Click Select
    const SelectContainer = screen.getByLabelText('select-container');
    userEvent.click(SelectContainer);
    //Insert text in input
    const searchInput = screen.getByLabelText('country-search');
    userEvent.type(searchInput, 'Pa');
    // Only one country should be display
    const countryItems = screen.getAllByLabelText('country-name');
    expect(countryItems.length).toBe(1);
    expect(countryItems[0]).toHaveTextContent('Papua New Guinea');
  });

});