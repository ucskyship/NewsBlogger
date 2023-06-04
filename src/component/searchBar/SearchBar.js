import React from 'react';
import './SearchBar.css'
import icon from '../../assets/searchIcon.svg'

const SearchBar = () =>{
    return(
        <div className={"container"}>
            <img className={'searchIcon'} src={icon} alt={'icon'}/>
            <input className={"inputField"}
                   type={"text"}
                   placeholder={'Search here...'}/>
        </div>
    )
}

export default SearchBar;