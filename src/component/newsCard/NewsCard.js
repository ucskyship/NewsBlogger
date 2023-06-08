import React from "react";
import './NewsCard.css'

const NewsCard = ({title, description, url, urlToImage}) => {
    return(
        <div>
            <div className={'newsCards'}>
                <img className={'image'} src={urlToImage} alt={"img"}/>
                <h3 className={'header'}><a href={url}>{ title }</a></h3>
                <p className={'des'}>{description}</p>
            </div>
        </div>
    )
}

export default NewsCard;