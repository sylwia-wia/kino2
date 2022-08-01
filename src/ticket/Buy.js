import React from "react";
import {getShowByID} from "../utils/Selectors";
import {useParams} from "react-router-dom";
import ShowDetail from "../show/ShowDetail";
import {useContext} from "react";
import {Context} from "../context/Context";

export default function Buy (props) {
    const {addTicket} = props;
    const {database } = useContext(Context);
    const shows = database.shows;
     const {showID} = useParams();
    const show = getShowByID(database, showID);

    function onFormSubmitHandler(formData) {
        formData.showID = show.showID;
    }

    return (
        <>
            <ShowDetail onFormSubmitHAndler={onFormSubmitHandler} shows={shows} show={show} addTicket={addTicket}/>
        </>
    );

}