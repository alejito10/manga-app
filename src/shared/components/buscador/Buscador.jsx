import React from "react";
import {useForm} from "react-hook-form";

export function Buscador(props) {
     const { register, handleSubmit, watch, errors } = useForm();
     const onSubmit = filterValues => {
         console.log("PROPS",filterValues)
         props.mangaFilter(filterValues);
     }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="b-form">
                <label className="nombres">Name:</label>
                <input className="b-input" name="name" id="name" ref={register({ required: false })}/>
                <label className="nombres">Categorias:</label>
                <input className="b-input" name="categoria" id="categoria" ref={register({ required: false })}/>
                <input className="b-btn mt-3" type="submit"/>
            </form>
        </div>
    )
 }