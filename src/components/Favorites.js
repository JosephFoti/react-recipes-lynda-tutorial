import React from 'react';
import PropType from 'prop-types';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite }) => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorites={state.favorites}
      onFavorited={toggleFavorite}
    />
  </div>
);

Favorites.propTypes = {
  state: PropType.object,
  toggleFavorite: PropType.func,
};

export default Favorites;
