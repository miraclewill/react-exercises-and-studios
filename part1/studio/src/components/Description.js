import styles from './Description.module.css';
import React from "react";


function RecipeAuthor() {
    
    let authorLink = "https://feastandfarm.com/southern-cornbread-recipe/";
    let authorPhoto = "https://feastandfarm.com/wp-content/uploads/LR-Branding-Shots-1.jpg";
    let authorName = "Rachel Ballard";

    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Rachel Ballard posing with a dessert" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Feast and Farm</a> 
        </div>
     </div>       
    );
};

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
               <h1>Southern Cornbread Recipe</h1>
               <p>Is cornbread an issue of true debate? That depends on where you live. But for those of you who love a no-sugar, crispy skillet version this southern cornbread recipe is spot-on. </p>
            </div>
            <RecipeAuthor />
         </div>
        );
    }
};


export default RecipeDescription;