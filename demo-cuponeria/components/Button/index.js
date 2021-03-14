import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';

function Button({ children, textColor, bgColor }) {
  return (
    <styled.Button textColor={textColor} bgColor={bgColor}>
      {children}
    </styled.Button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  textColor: 'white',
  bgColor: 'black',
};
