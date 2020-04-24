import React from 'react';

// import './form-input.styles.scss';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
