import React, {useEffect, useState} from "react";
import {environment} from "../../environment/environment";
import axios from "axios";
import {MangaGallery} from "../../shared/components/mangaGallery/MangaGallery";
import {Buscador} from "../../shared/components/buscador/Buscador";

export function Manga() {
    const [manga, setManga]=useState([]);
    const [filterValues, setFilterValues]=useState({name:'',categoria:''})
    useEffect(()=>{
        axios.get(environment.url + 'anime?page[limit]=19').then(res=>{
            const mangaLocal= res.data.data;
            setManga(mangaLocal);

        })
    },[])

    const filterManga=(filterValues)=>{
        setFilterValues(filterValues);
        axios.get(environment.url+'anime?page[limit]=19&filter[text]='+filterValueURL(filterValues)).then(res=>{
            const mangaLocal=res.data.data;
            setManga(mangaLocal);
        })
    }

    const filterValueURL= (filterValues)=>{
        let filterUrl= filterValues.name.length?'&filter[text]='+ filterValues.name:'';
            filterUrl += filterValues.categoria.length ? '&filter[categories]=' + filterValues.categoria : '';
        return filterUrl;
    }

    return(
        <div>
            <h1 className="title">Series Anime</h1>
            <Buscador mangaFilter={filterManga}/>
            <MangaGallery manga={manga} />
        </div>

    )
}