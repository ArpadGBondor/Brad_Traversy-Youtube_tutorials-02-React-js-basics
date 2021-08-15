import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';
const Button = ({ text, color, spinner, block, disabled, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`btn ${block ? 'btn-block' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {spinner ? <FaSpinner className="fa-spinner" /> : text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Click here',
  color: 'steelblue',
  spinner: false,
  block: false,
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  spinner: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
