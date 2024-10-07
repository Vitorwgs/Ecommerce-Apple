import React from 'react';
import styles from "../Header/Header.module.css";


function Header(){
    return(
        <header className={styles.header}>

            <div className={styles.logo}>
            <img src='\Images\icons\apple.png'></img>
            </div>
            <nav>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">TV</a>
            <a href="#">Music</a>
            <a href="#">Support</a>
            </nav>
            <div className={styles.icons}>
            <img src='\Images\icons\search.png'></img>
            <img src='\Images\icons\bag.png'></img>
            </div>
        </header>
    )
}
export default Header;