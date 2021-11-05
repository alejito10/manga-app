import React from "react";
import "./MangaGallery.scss"
import styled from "styled-components";

    export function MangaGallery(props) {


    return(
        <div className="c-manga-gallery">
            <div className="row">
                {props.manga.map((item,index)=>
                    <div className="col-4" key={index}>
                        <h3 className="title">{item.attributes.titles.en_jp}</h3>
                        <img className="c-manga-gallery__img" src={item.attributes.posterImage.original}/>
                    </div>
                )}
            </div>
        </div>
    )
}