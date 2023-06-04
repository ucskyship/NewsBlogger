import React from "react";

const NewsCard = (title, description, url, urlToImage) => {
    return(
        <div>
            <div className={'newsCards'}>
                <img src={urlToImage} alt={"urlToImage"}/>
               <h3><a href={url}>{ title }</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsCard;