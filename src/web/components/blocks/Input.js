import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ErrorMessage } from '../../primitives/Errors';
import { SRLabel } from '../../primitives/Label';
import { TextInput, NumberInput } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';

export default class Input extends Component {
  static propTypes = {
    currentValue: PropTypes.any,
    disabled: PropTypes.bool,
    unit: PropTypes.string,
    errors: PropTypes.shape({
      validation: PropTypes.shape({
        error: PropTypes.bool,
        message: PropTypes.string,
      }),
    }).isRequired,
    heading: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    placeholder: PropTypes.string,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    step: PropTypes.number,
    type: PropTypes.string,
    update: PropTypes.func,
  };

  static defaultProps = {
    currentValue: '',
    disabled: false,
    unit: '',
    heading: '',
    max: Number.MAX_SAFE_INTEGER,
    min: 0,
    placeholder: '',
    step: 1,
    type: 'text',
    update: () => {},
    validation: {},
  };

  handleChange = (e) => {
    const { type, step, property, setData, update, min } = this.props;
    let value = e.target.value;

    if (type === 'number' && step >= 1) {
      value = parseInt(value, 10);
    } else if (type === 'number') {
      value = parseFloat(value);
    }

    if (type === 'number' && min === 0) {
      value = Math.abs(value);
    }

    if (type === 'number' && isNaN(value)) {
      value = undefined;
    }

    update(value);
    setData(property, value);
  };

  render() {
    const {
      currentValue,
      disabled,
      errors,
      heading,
      max,
      min,
      placeholder,
      property,
      step,
      type,
      unit,
    } = this.props;
    let inputType = type;
    if (inputType === 'Input') {
      inputType = 'text';
    }
    let label = '';
    if (heading) {
      label = <SRLabel htmlFor={property}>{heading}</SRLabel>;
    }
    let input = (
      <TextInput
        aria-invalid={errors.validation.error}
        aria-label={heading}
        disabled={disabled}
        id={property}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={inputType}
        validation={errors.validation}
        value={currentValue}
      />
    );
    if (this.props.type === 'number') {
      input = (
        <NumberInput
          aria-invalid={errors.validation.error}
          aria-label={heading}
          disabled={disabled}
          id={property}
          onChange={this.handleChange}
          placeholder={placeholder}
          type={inputType}
          validation={errors.validation}
          value={currentValue}
          min={min}
          max={max}
          step={step}
          unit={unit}
        />
      );
    }
    return (
      <div>
        {label}
        {input}

        {errors.validation.error && (
          <ErrorMessage>
            <ErrorIcon /> {errors.validation.message}
          </ErrorMessage>
        )}
      </div>
    );
  }
}
