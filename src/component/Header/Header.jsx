import React, { useState } from 'react';
import styles from "./Header.module.css";
import search from "../../Images/icons/search.png";
import bag from "../../Images/icons/bag.png";
import logoapple from "../../Images/icons/apple.png";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
    
            <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logoapple}/>
            </div>
            <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
                <a href="#">Mac</a>
                <a href="#">iPad</a>
                <a href="#">iPhone</a>
                <a href="#">Watch</a>
                <a href="#">TV</a>
                <a href="#">Music</a>
                <a href="#">Support</a>
            </nav>
            <div className={styles.icons}>
                <img src={search}/>
                <img src={bag}/>
                <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                    <img src=""/>
                </button>
            </div>
        </header>
    );
}


export default Header;