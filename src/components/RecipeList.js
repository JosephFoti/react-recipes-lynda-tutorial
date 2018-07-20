import React from 'react';

const RecipeList = (props) => (

    <div className="" style={props.style}>
      <h2 className="h2">Recipe List</h2>
        <ul className="list-reset">

          {props.recipes.map(recipe=>(
            <li className="py2 border-bottom border-bottom-dashed border-width pointer" key={recipe.id} onClick={() => props.onClick(recipe.id)}>
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
            </li>
          ))}

        </ul>
    </div>

)

export default RecipeList;
