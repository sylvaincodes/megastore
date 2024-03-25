import React, { Fragment } from 'react'
import { NumericFormat } from 'react-number-format';

export const SmartNumber = ({value}: {value: any}) => {
  return (
    <div  className='w-[50px]' >
      <NumericFormat className='w-10' displayType="text" prefix={'$'} decimalScale={2} decimalSeparator="," value={value} allowLeadingZeros thousandSeparator="." />
    </div>
  );
}
