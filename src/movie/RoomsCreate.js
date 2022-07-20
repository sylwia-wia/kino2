import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import RoomForm from "./RoomForm";

export default function RoomsCreate(props) {
    const {database} = props;

    const navigate = useNavigate();

    function onFormSubmitHandler(formData) {
        props.addRoom(formData);
        navigate('/rooms');
    }

    const {rooms} = database;

    return (
        <>
            <h2 className="px-3">Dodaj salę kinową</h2>
            <RoomForm onFormSubmitHandler={onFormSubmitHandler} rooms={rooms}/>
        </>
    );
}