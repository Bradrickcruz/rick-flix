import React from 'react';
import PropTypes from 'prop-types';

export default function Index({
  label,
  inputName,
  inputType,
  value,
  propOnChange,
}) {
  function generateId(text) {
    return `id_${text}`.replace(' ', '_');
  }
  const id = generateId(label);

  function renderInput() {
    const isTextarea = inputType === 'textarea';
    if (isTextarea) {
      return (
        <textarea
          name={inputName}
          id={id}
          value={value}
          onChange={propOnChange}
        />
      );
    }

    return (
      <input
        name={inputName}
        id={id}
        type={inputType}
        value={value}
        onChange={propOnChange}
      />
    );
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {renderInput()}
    </div>
  );
}

Index.defaultProps = {
  inputType: 'text',
  value: '',
  propOnChange: () => {},
};

Index.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  value: PropTypes.string,
  propOnChange: PropTypes.string,
};
