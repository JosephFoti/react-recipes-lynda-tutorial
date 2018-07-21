import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, favorites, recipes, ...props }) => (
  <ul className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        {...props}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  style: PropTypes.object,
  favorites: PropTypes.array,
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};

export default RecipeList;
