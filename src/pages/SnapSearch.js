import React, { useState } from "react";
import { apiKey } from "../api/config";
import _ from "lodash";
import 'font-awesome/css/font-awesome.min.css';
import {
    SNAPSEARCH_TITLE, SEARCH_PLACEHOLDER, SEARCH_TEXT, SEARCH_SUGGESTION1, SEARCH_SUGGESTION2,
    SEARCH_SUGGESTION3, SEARCH_SUGGESTION4, SEARCH_SUGGESTION5
} from "../Constants";

export default function SnapSearch() {
    const [imageArray, setImageArray] = useState([])
    const [img, setImg] = useState("")
    const handleImg = (e) => {
        setImg(e.target.value)
    }
    const handleSearchOption = (e) => {
        setImg(e.target.textContent);
    }
    async function handleSnapSearch() {
        const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${img}&per_page=24&format=json&nojsoncallback=1`);
        const snapSearchArray = await response.json();
        setImageArray(snapSearchArray.photos.photo)
    }

    return (
        <div style={{
            backgroundImage: 'url("https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg")'
        }}>
            <div className="page-wrap">
                <h1 className="title"><i className="fa fa-camera" aria-hidden="true"></i>{SNAPSEARCH_TITLE}</h1>
                <div className="snap-input-wrap">
                    <input className='snapSearch' value={img} onChange={handleImg} placeholder={SEARCH_PLACEHOLDER} />
                    <button className='search' value={img} onClick={handleSnapSearch} >{SEARCH_TEXT}</button>
                </div>
                <div className="search-option-wrap">
                    <p className="search-option" id="search-option" onClick={handleSearchOption}>{SEARCH_SUGGESTION1}</p>
                    <p className="search-option" id="search-option" onClick={handleSearchOption}>{SEARCH_SUGGESTION2}</p>
                    <p className="search-option" id="search-option" onClick={handleSearchOption}>{SEARCH_SUGGESTION3}</p>
                    <p className="search-option" id="search-option" onClick={handleSearchOption}>{SEARCH_SUGGESTION4}</p>
                    <p className="search-option" id="search-option" onClick={handleSearchOption}>{SEARCH_SUGGESTION5}</p>
                </div>
                <div className="snap-wrap">
                    <div className="photo-container">
                        <ul>
                            {_.map(imageArray, (image) =>
                                <li key={image.id}><img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} /></li>
                            )}
                        </ul></div>
                </div>
            </div>
        </div >
    )
}