import React from 'react';
const styles = require("./NavigationItem.module.css");

const navigationItem = (props) => (

    <li className={styles.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? styles.active : null}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;