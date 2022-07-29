import React, { Component } from 'react';
import PropTypes, { bool, func, node } from 'prop-types';

class Button extends Component {
  render() {
    const { className, children, disabled, onClick } = this.props;
    console.log(className, children, disabled);
    return (
      <button
        type="submit"
        className={ className }
        onClick={ onClick }
        disabled={ disabled }
      >
        { children }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: node.isRequired,
  disabled: bool,
  onClick: func.isRequired,
};

Button.defaultProps = {
  disabled: false,
};
