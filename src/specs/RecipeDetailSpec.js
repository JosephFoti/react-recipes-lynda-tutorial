import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';

describe('<RecipeDetail />', () => {
  let testRecipe;

  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'Test Recipe',
      category: 'Test category',
      ingredients: ['ing1', 'ing2'],
      steps: ['stp1', 'stp2'],
    };
  });

  test('Should render zero state', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should assign ClassName', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} className="classname" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should recipe without ingredients', () => {
    delete testRecipe.ingredients;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should recipe without steps', () => {
    delete testRecipe.steps;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
