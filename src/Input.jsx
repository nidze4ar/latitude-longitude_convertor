import React from 'react';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

const formatChars = {
  '+': '[+-]',
  '9': '[0-9]',
  '1': '[01]',
  '5': '[0-5]',
  '8': '[0-8]'
}

export default function Input({mask, handleChange, placeholder, value}) {
  return (
    <InputMask mask={mask} formatChars={formatChars} value={value} onChange={e => handleChange(e.target.value)}>
          {(inputProps) => <MaterialInput {...inputProps} disableUnderline placeholder={placeholder} />}
    </InputMask>
  );
}