import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';
import { Dimmer, Loader } from 'semantic-ui-react';

var AllRecipesList = (props) => {
  if (props.recipeList.length === 0) {
    return (
      <div className="ui segment">
        <h3>All Recipes</h3>
        <div>No recipes found.</div>
      </div>
    )
  } else {
    return (
      <div className="ui segment">
        <h3 className="allrecipes">Displaying Recipes</h3>
        <div className="ui five link cards">
          {props.recipeList.map((recipe, index) =>
            <div
              key={index}
              className="card"
              onClick = {() => props.onRecipeClick(recipe)}
            >

              <div className="image">
                <img src={recipe.image}/>
              </div>

              <div className="content">
                <div className="description">{recipe.title}</div>
              </div>

              <div className="extra content">
                <span className="right floated">
                  <i className="heart outline icon"></i>
                </span>
                <span>
                  Likes: {recipe.likes}
                </span>
              </div>

            </div>
          )}

        </div>
        <Dimmer active={props.searchLoading} inverted>
          <Loader />
        </Dimmer>
      </div>
    );
  }
}

export default AllRecipesList;
