import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const styles = require("./Burger.module.css")

const burger = (props) =>{
    return(
        <div  className={styles.burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
};

export default burger;