import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card";
import {film as filmPropTypes} from '../../types';

class MovieCardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._changeActiveCard = this._changeActiveCard.bind(this);
  }

  render() {
    const {films} = this.props;

    const content = films.map((film) => {
      return <MovieCard
        key={film.id}
        film={film}
        changeActiveCard={this._changeActiveCard}
      />;
    });

    return (
      <Fragment>
        {content}
      </Fragment>
    );
  }

  _changeActiveCard(cardId) {
    this.setState({
      activeCard: cardId
    });
  }
}

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(filmPropTypes).isRequired
};

export default MovieCardList;
