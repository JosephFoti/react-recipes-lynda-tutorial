import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const testRecipes = [
  {
    id: 1,
    name: 'Test Recipe',
    category: 'Test category',
  },
  {
    id: 2,
    name: 'Test Recipe 2',
    category: 'Test category 2',
  },
];

describe('<RecipeList />', () => {
  test('Should not break withour recipe', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Render correctly', () => {
    const component = renderer.create(<RecipeList recipes={testRecipes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Render favorite correctly', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipes} favorites={[1, 2, 3]} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
