import React from "react";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";
import {useContext} from "react";
import {Context} from "../context/Context";

export default function MovieCreate(props) {
    const navigate = useNavigate();
    const {database} = useContext(Context);
    const {movies} = database;

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