import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Details = injectStyles(styled.details`
  margin-top: 40px;
  h4 {
    margin-bottom: 0;
  }
`);

export const Summary = injectStyles(styled.summary`
  cursor: pointer;
  color: ${({ styles }) => styles.color.light};
  text-decoration: underline;
`);