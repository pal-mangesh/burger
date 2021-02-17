import React from 'react';
const styles = require("./BuildControl.module.css");

const BuildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.label}>{props.label}</div>
        <button
            className={styles.Less}
            onClick={props.removed}
            disabled={props.disabled}>less</button>

        <button
            className={styles.More}
            onClick={props.added}
        >more</button>
    </div>
);

export default BuildControl;
