import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';


const styles = require("./NavigationItems.module.css");

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active >Burger Builder</NavigationItem> 
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;