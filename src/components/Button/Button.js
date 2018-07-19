import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  className = '',
  children,
}) => (
  <button className={className} onClick={onClick}>{children}</button>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
