import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  className = '',
  children,
  disabled,
  style = {},
}) => (
  <button disabled={disabled} className={className} onClick={onClick} style={style}>{children}</button>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
