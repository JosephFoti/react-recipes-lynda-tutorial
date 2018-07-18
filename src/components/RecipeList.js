import React from 'react';

const RecipeList = (props) => (

    <div style={props.style}>
      <h2>Recipe List</h2>
        <ul>

          <li>
          <span>Fresh and Wild Mushroom Stew</span>
          <span>Main Course</span>
          </li>
          <li>
          <span>Rice Crispy Treat</span>
          <span>Desert</span>
          </li>
          <li>
          <span>Ham Sammy</span>
          <span>Sammy</span>
          </li>
          <li>
          <span>Margarita</span>
          <span>Drink</span>
          </li>

        </ul>
    </div>

)

export default RecipeList;
