import React from 'react';
import mockAxios from 'axios';
import {
  render,
  cleanup,
  fireEvent,
  wait,
  queryByAttribute
} from '@testing-library/react';

import CustomDatePicker from '../index.js';

describe('<CustomDatePicker />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should pass smoke test', async () => {
    const { getByPlaceholderText, getAllByText } = render(
      <CustomDatePicker currency={'AED'} amount={'1100'} />
    );
    const datePickerInput = getByPlaceholderText('Select date');
    fireEvent.click(datePickerInput);
    await wait(async () => {
      expect(getAllByText('AED').length).toBeGreaterThan(1);
    });
  });
});
