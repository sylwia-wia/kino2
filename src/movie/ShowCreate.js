import React from "react";
import {useNavigate} from "react-router-dom";
import ShowForm from "./ShowForm";


export default function ShowCreate(props) {

    const {database, addShow} = props;
    const navigate = useNavigate();


    function onFormSubmitHandler(formData) {
        console.log(formData);
        props.addShow(formData);
        navigate('/show');
    }

    return (
        <>
            <h2 className="px-3">Dodaj seans</h2>
            <ShowForm onFormSubmitHandler={onFormSubmitHandler} movies={database.movies} rooms={database.rooms} shows={database.shows}/>
        </>
    );
}