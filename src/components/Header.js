import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, showAddForm, loading, toggleAddForm, setReload }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button spinner={loading} text="Refresh" onClick={() => setReload(true)} />
      <Button color={showAddForm ? 'red' : 'green'} text={showAddForm ? 'Close' : 'Add'} onClick={toggleAddForm} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
  loading: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showAddForm: PropTypes.bool,
  loading: PropTypes.bool,
  toggleAddForm: PropTypes.func,
};

// inline styling:
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };
// <h1 style={headingStyle}>{title}</h1>

export default Header;
