import React from 'react';
import PropType from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;

    return (
      <div>
        <main className="px4 flex">
          <div>
            <h2 className="h2">Recipe List</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              style={{ flex: 3 }}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
            />
          </div>
          <RecipeDetail
            style={{ flex: 5 }}
            className="ml4 px4"
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  toggleFavorite: PropType.func,
  state: PropType.object,
};

export default Home;
