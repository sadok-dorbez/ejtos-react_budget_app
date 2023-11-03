import React from 'react';

const Currency = ({ onChange }) => {
  return (
    <label>
      Currency:
      <select onChange={onChange}>
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </label>
  );
};

export default Currency;
