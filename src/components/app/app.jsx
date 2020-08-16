import React from 'react';
import PropTypes from "prop-types";
import MainPage from '../main-page/main-page';
import {film as filmPropTypes} from "../../types";

const App = ({films}) => {
  return (
    <MainPage films={films} />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired
};

export default App;
