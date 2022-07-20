import React from "react";
import {getShowByID} from "../utils/Selectors";
import {useParams} from "react-router-dom";
import ShowDetail from "./ShowDetail";

export default function Buy (props) {
    const {database, addTicket} = props;
    const shows = database.shows;
    console.log(database);
     const {showID} = useParams();
    const show = getShowByID(database, showID);
    console.log(show);

    function onFormSubmitHandler(formData) {
        formData.showID = show.showID;
    }
    console.log(database.shows);

     const capacity = show.room.capacity;
    console.log(capacity);

    return (
        <>
            <ShowDetail onFormSubmitHAndler={onFormSubmitHandler} shows={shows} show={show} addTicket={addTicket}/>
        </>
    );

}