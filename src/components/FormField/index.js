import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${StyledLabel.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type='color']) + ${StyledLabel.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}

  &:focus:not([type='color']) + span {
    transform: scale(0.7) translateY(-10px);
  }
  ${({ hasValue }) =>
    // eslint-disable-next-line
    hasValue &&
    css`
      &:not([type='color']) + span {
        transform: scale(0.7) translateY(-10px);
      }
    `}
`;

const StyledWrapperFormField = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 56px;
  }
`;

StyledLabel.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

export default function Index({
  label,
  inputName,
  inputType,
  value,
  propOnChange,
  suggestions,
}) {
  function generateId(text) {
    return `id_${text}${Math.ceil(Math.random() * 1000)}`.replace(' ', '_');
  }
  const id = generateId(label);
  const suggestionId = generateId('suggestionIdFor');
  const optionId = generateId('optionFor');
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  function renderInput() {
    const isTextarea = inputType === 'textarea';
    if (isTextarea) {
      return (
        <StyledInput
          as="textarea"
          name={inputName}
          id={id}
          value={value}
          hasValue={hasValue}
          onChange={propOnChange}
        />
      );
    }

    return (
      <StyledInput
        name={inputName}
        id={id}
        type={inputType}
        value={value}
        hasValue={hasValue}
        onChange={propOnChange}
        list={hasSuggestions ? suggestionId : 'on'}
        autoComplete={hasSuggestions ? 'off' : undefined}
      />
    );
  }
  return (
    <StyledWrapperFormField>
      <StyledLabel htmlFor={id}>
        {renderInput()}
        <StyledLabel.Text>{label}</StyledLabel.Text>
        {hasSuggestions && (
          <datalist id={suggestionId}>
            {suggestions.map((suggestion) => (
              <option
                key={generateId(`${optionId}${suggestion}`)}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </StyledLabel>
    </StyledWrapperFormField>
  );
}

Index.defaultProps = {
  inputType: 'text',
  value: '',
  propOnChange: () => {},
  suggestions: [],
};

Index.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  value: PropTypes.string,
  propOnChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
