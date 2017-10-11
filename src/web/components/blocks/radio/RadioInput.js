import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import SoftWarning from '../../../primitives/SoftWarning';
import { Radio as Input } from '../../../primitives/Input';
import { H3 } from '../../../primitives/Heading';
import { P } from '../../../primitives/Paragraphs';

export default function RadioInput({
  id,
  text,
  name,
  value,
  checked,
  onChange,
  heading,
  image,
  disabled,
  messages,
}) {
  const message = messages.length && messages[0];

  return (
    <div>
      <Input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />

      <Label htmlFor={id} warning={message.warning}>
        <div>
          <div>
            {heading ? <H3>{heading}</H3> : null}
            {message ? (
              <SoftWarning warning={message.warning}>{message.message}</SoftWarning>
            ) : null}
          </div>
          <P>{text}</P>
        </div>
        {image && image.url ? <img src={image.url} alt={image.alt} /> : null}
      </Label>
    </div>
  );
}

RadioInput.defaultProps = {
  onChange: () => {},
  heading: '',
  text: '',
  image: {},
  checked: false,
  disabled: false,
  messages: [],
};

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.object),
};
