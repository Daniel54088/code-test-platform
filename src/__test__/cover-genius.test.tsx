import React from 'react';
import {render, fireEvent,  screen, RenderResult} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Items from '../components/Items';

const correctDataFomat =
    {
        "id": "TRAVEL-COVER-INS",
        "type": "travel",
        "title": "London to Paris",
        "description": "Baggage Cover; Medical Cover; Cancellation Cover",
        "status": "active",
        "premium": 106.65,
        "premium_formatted": "AUD $106.65",
        "payment_date": "2019-10-10T13:29:38.814849Z",
        "coverage_start_date": "2019-11-17",
        "coverage_end_date": "2019-11-19",
        "renewal": null,
        "partner": {
          "id": "labore",
          "name": "Labore Inc.",
          "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/labore.svg"
        }
      };

let documentBody: RenderResult;

describe('<Items />', () => {

  beforeEach(() => {
    documentBody = render(<Items data={correctDataFomat} />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it('Title area texts are showing correctly', () => {
    const titleArea = screen.getByLabelText('title-area');
    expect(titleArea).toHaveTextContent('London to Paris');
    expect(titleArea).toHaveTextContent('Baggage Cover; Medical Cover; Cancellation Cover');
    expect(titleArea).toHaveTextContent('TRAVEL-COVER-INS');
   });

   it('Dates and price detail texts are showing correctly', () => {
    const itemBlocks = screen.getAllByLabelText('item-block');

    expect(itemBlocks.length).toBe(3);

    expect(itemBlocks[0]).toHaveTextContent('10-Oct-2019');
    expect(itemBlocks[1]).toHaveTextContent('17-Nov-2019 to 19-Nov-2019');
    expect(itemBlocks[2]).toHaveTextContent('AUD $106.65Price/Premium');
   });

   it('Logo is showing correctly', () => {
    const logo = screen.getByLabelText('full-logo');
    expect(logo).toHaveStyle(` display: flex`);
   });

   

});