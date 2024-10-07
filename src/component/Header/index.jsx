import React from 'react';
import "../Header/Header.css";
import appleLogo from '../../Images/icons/apple.png';
import searchIcon from '../../Images/icons/search.png';
import bagIcon from '../../Images/icons/bag.png';

function Header() {
    return (
        <header className="container2">
            <nav>
                <ul className="nav-list nav-list-larger">
                    <li className="nav-item search-hiden">
                        <input
                            className="nav-link nav-link-searchbar"
                            type="text"
                            placeholder="&#xF002; Search apple.com"
                            style={{ fontFamily: "Arial, FontAwesome" }}
                        />
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={appleLogo} alt="Apple Logo" className="nav-link-apple" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="mac" className="nav-link">Mac</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">iPad</a>
                    </li>
                    <li className="nav-item">
                        <a href="iphone" className="nav-link">iPhone</a>
                    </li>
                    <li className="nav-item">
                        <a href="watch" className="nav-link">Watch</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">TV</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Music</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={searchIcon} alt="Search Icon" className="nav-link-search" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={bagIcon} alt="Bag Icon" className="nav-link-bag" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;