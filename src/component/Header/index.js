import styles from "./Header.module.css";

function Header(){
    return(
        <header className="conteiner2">
            
            <nav>
                <ul className="nav-list nav-list-larger">
                    <li className="nav-item search-hiden">
                      
                        <input className="nav-link nav-link-searchbar" type="text" 
                            placeholder="&#xF002; Search apple.com" 
                            style={{fontFamily:"Arial, FontAwesome"}} />
                      
                    </li>
                    {/*abas das paginas com o link já criado no Navlink*/}
                    <li className="nav-item nav-item-hidden">
                        <a href="/" className="nav-link nav-link-apple"></a>
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
                        <a href="#" className="nav-link nav-link-search"></a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                  
                </ul> 
            </nav>
        </header>
    )
}

export default Header;