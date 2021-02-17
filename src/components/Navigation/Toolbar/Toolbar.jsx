import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const styles = require("./Toolbar.module.css");



const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <div className={styles.Logo}>
            <Logo />
        </div>
       
        <nav className={styles.DasktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
