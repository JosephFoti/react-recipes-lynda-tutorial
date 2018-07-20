import React from 'react';
import PropType from 'prop-types';
import RecipeDetail from './RecipeDetail';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe });
      });
  }

  render() {
    const { recipe } = this.state;
    return (
      <div className="px4">
        <RecipeDetail recipe={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropType.object,
};

export default Recipe;
