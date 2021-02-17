import React from 'react';
const styles = require("./Backdrop.module.css");

const backdrop = (props)=>(
    props.show?<div className={styles.Backdrop} onClick={props.clicked}></div>:null
);

export default backdrop