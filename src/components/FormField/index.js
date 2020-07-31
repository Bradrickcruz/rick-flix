import React from 'react';

export default function index({
  label,
  inputName,
  inputType,
  value,
  propOnChange,
}) {
  function renderInput() {
    if (inputType === 'textarea') {
      return (
        <textarea name={inputName} value={value} onChange={propOnChange} />
      );
    }
    return (
      <input
        name={inputName}
        type={inputType}
        value={value}
        onChange={propOnChange}
      />
    );
  }
  return (
    <div>
      <label>
        {label}
        {renderInput()}
      </label>
    </div>
  );
}
