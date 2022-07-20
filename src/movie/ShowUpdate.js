import {useNavigate, useParams} from "react-router-dom";
import {getShowByID} from "../utils/Selectors";
import ShowForm from "./ShowForm";
import React from "react";

export default function ShowUpdate(props) {
    const navigate = useNavigate();
    const {database} = props;
    const {showID} = useParams();

    const show = getShowByID(database, showID);
    const {shows} = database;

    function onFormSubmitHandler(formData) {
        formData.showID = show.showID;
        props.updateShow(formData.showID, formData);
         navigate('/show')
    }


    return (
        <>
            <h2 className="px-3">Edytuj seans</h2>
            <ShowForm show={show}  shows={shows} rooms={database.rooms} movies={database.movies} onFormSubmitHandler={onFormSubmitHandler}/>
        </>
    );
}