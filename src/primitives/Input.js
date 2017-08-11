import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Checkbox = injectStyles(styled.input`
  display: none;
  + label {
    cursor: pointer;
    &:before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      width: 0.6em;
      height: 0.6em;
      background: white;
      margin-right: 10px;
      border: 0.3em solid white;
      box-shadow: 0 0 0 0.1em #666;
    }
    &:hover::before {
      background: ${({ styles }) => styles.color.primary};
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.primary};
  }
`);

export const Radio = injectStyles(styled.input.attrs({
  type: 'radio',
})`
  display: none;
  + label {
    cursor: pointer;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    transition: box-shadow 0.1s ease-in-out;
    &:hover {
      box-shadow: 0 0 5px ${({ styles }) => styles.color.secondary};
    }
    &:before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      width: 0.5em;
      height: 0.5em;
      background: white;
      margin-right: 10px;
      border-radius: 50%;
      border: 0.3em solid white;
      box-shadow: 0 0 0 0.1em #666;
      transition: background 0.1s ease-in-out;
    }
    &:hover::before {
      background: ${({ styles }) => styles.color.primary};
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.primary};
  }
`);

export const NumberInput = injectStyles(styled.input`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  width: 100px;
  border: 1px solid #666;
`);
