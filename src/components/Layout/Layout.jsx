import React from 'react';
import Aux from '../../hoc/Aux';
const styles=require("./layout.module.css")



const layout = (props) => (
    <Aux>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={styles.content}>
        {props.children}
    </main>
    </Aux>
); 


export default layout