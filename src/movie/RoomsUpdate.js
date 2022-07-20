import {useParams} from "react-router-dom";
import {getRoomByID} from "../utils/Selectors";
import RoomForm from "./RoomForm";
import {useNavigate} from "react-router-dom";

export default function RoomsUpdate(props) {
    const navigate = useNavigate();
    const {database} = props;
    const {roomID} = useParams();

    const room = getRoomByID(database, roomID);
    const {rooms} = database;

    function onFormSubmitHandler(formData) {
        formData.roomID = room.roomID;

        props.updateRoom(formData.roomID, formData);
        navigate('/rooms')
    }

    return (
        <>
            <h2 className="px-3">Edytuj salę kinową</h2>
            <RoomForm room={room} onFormSubmitHandler={onFormSubmitHandler} rooms={rooms}/>
        </>
    )


}

