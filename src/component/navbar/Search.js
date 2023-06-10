import React, { useSate } from "react";
import data from "../newsCard/NewsList";

const Search = () => {
    const [filter, setFilter] = useSate("");
    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = data.filter(item => {
        return Object.keys(item).some(key => {
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        })
    })

    return(
        <div>
            <Search/>
        </div>
    )
}

export default Search;