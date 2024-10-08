import React, { useState } from 'react';
import styles from "./Header.module.css";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
    
            <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/Images/icons/apple.png"/>
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
                <img src="/Images/icons/search.png"/>
                <img src="/Images/icons/bag.png"/>
                <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                    <img src="/Images/icons/menu.png"/>
                </button>
            </div>
        </header>
    );
}


export default Header;