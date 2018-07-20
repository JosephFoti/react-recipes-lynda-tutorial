import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            onClick={this.onRecipeClick}
            recipes={recipes}
            style={{ flex: 3 }}
          />

          <RecipeDetail
            style={{ flex: 5 }}
            className="ml4"
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

export default Home;
