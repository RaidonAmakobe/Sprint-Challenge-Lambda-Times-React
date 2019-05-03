import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import Content from './Content';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card c = {Math.random()} card = {card} />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card: PropTypes.object
};

export default Cards;