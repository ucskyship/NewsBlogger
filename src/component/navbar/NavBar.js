import React from "react";
import logo from '../../assets/logo.svg'
import './Navbar.css'
import icon from "../../assets/searchIcon.svg";
import './SearchBar.css'
import '../newsCard/NewsList'

function NavBar() {
    return (
        <div className={'navBar'}>
                <img className={'logo'} src={logo} alt={logo}/>
            <div className={"container"}>
                <input className={"inputField"}
                       type={"text"}
                       placeholder={'Search here...'}
                       onChange={e=> e.setQuery(e.target.value)}
                />
                <img className={'searchIcon'} src={icon} alt={'icon'}/>
            </div>
        </div>
    );
}

export default NavBar;
