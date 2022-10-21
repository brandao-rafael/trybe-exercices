import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

export default function PersonalData() {
  const { data } = useContext(FormContext);
  return (
    <div>
      <ul>
        {data.map((person, i) => (
          <li key={ i }>
            <p>{`Name: ${person.name}`}</p>
            <p>{`Age: ${person.age}`}</p>
            <p>{`City: ${person.city}`}</p>
            <p>{`Module: ${person.module}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
