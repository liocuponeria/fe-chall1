import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';

function Button({
  children, textColor, bgColor, onClick, style,
}) {
  return (
    <styled.Button
      textColor={textColor}
      bgColor={bgColor}
      onClick={onClick}
      style={style}
    >
      {children}
    </styled.Button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  textColor: 'white',
  bgColor: 'black',
  style: {},
};
