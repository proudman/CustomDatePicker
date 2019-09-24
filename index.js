import React from 'react';
import { DatePicker } from 'antd';
import styles from './CustomDatePicker.module.scss';

function CustomDatePickerHOC(Component) {
  return ({ currency, amount, ...rest }) => {
    const dateRender = current => {
      return (
        <div
          className={`ant-calendar-date ${styles.dateItem}`}
          data-testid="custom-date-picker"
        >
          <div>{current.date()}</div>
          <div>{currency}</div>
          <div>{amount}</div>
        </div>
      );
    };
    return <Component {...rest} dateRender={dateRender} />;
  };
}

export default CustomDatePickerHOC(DatePicker);

// How to use in project
// import CustomDatePicker from '~/components/CustomDatePicker';
// <CustomDatePicker currency={'AED'} amount={'1100'} />
