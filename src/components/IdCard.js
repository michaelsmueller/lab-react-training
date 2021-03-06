// components/IdCard.js

import React from 'react';
import { uniqueId } from 'lodash';

const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;
  const person = [
    { 'First name': firstName },
    { 'Last name': lastName },
    { 'Gender': gender },
    { 'Height': height },
    { 'Birthday': formatDate(birth)}
  ];
  return (
    <div className='id-card'>
      <img className='portrait' src={picture} alt='portrait' />
      <div className='person-info'>
        {person.map((field) => {
          return <FieldNameAndValue
            key={uniqueId()}
            fieldName={Object.keys(field)}
            fieldValue={Object.values(field)} />
        })}
      </div>
    </div>
  )
}

const FieldNameAndValue = (props) => {
  const { fieldName, fieldValue } = props;
  return (
    <div>
      <span className='field-name'>{fieldName}</span>:&nbsp;
      <span className='field-value'>{fieldValue}</span>
    </div>
  )
}

const formatDate = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options);
}

export default IdCard;
