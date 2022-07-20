import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";

export default function MovieCreate(props) {
    const navigate = useNavigate();
    const {database} = props;
    const {movies} = database;
    console.log(database);

    function onFormSubmitHandler(formData) {
        props.addMovie(formData);
        navigate('/movie');

    }

    return (
        <>
            <h2 className="px-3">Dodaj nowy film</h2>
            <MovieForm movies={movies} onFormSubmitHandler={onFormSubmitHandler}/>
        </>
    );
}