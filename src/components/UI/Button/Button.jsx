import React from 'react';

const styles = require("./Button.module.css");

const button = (props) => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}    
    </button>
);

export default button