import React from 'react';
import PropTypes from 'prop-types';
import StyledAsideItem from '../primitives/AsideItem';

export default function AsideItem({ setPage, id, done, heading, active, index }) {
  return (
    <StyledAsideItem active={active} done={done} onClick={() => setPage(id)} tabIndex="0">
      <div>
        {index}
      </div>
      <p>
        {heading}
        <span>Endre svar</span>
      </p>
    </StyledAsideItem>
  );
}

AsideItem.defaultProps = {
  heading: 'TITLE MISSING',
  done: false,
  active: false,
};

AsideItem.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
  done: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};
