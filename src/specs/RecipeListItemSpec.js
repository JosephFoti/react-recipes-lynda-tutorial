import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  category: 'Test category',
};

describe('<RecipeListItem />', () => {
  test('Should not break if no recipe passed', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should Correctly Render', () => {
    const component = renderer.create(<RecipeListItem recipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  // test('Should render favorited state', () => {
  //   const component = renderer.create(
  //     <RecipeListItem recipe={testRecipe} favorited={true} />
  //   );
  //   const tree = component.toJSON();
  //
  //   expect(tree).toMatchSnapshot();
  // });
});
