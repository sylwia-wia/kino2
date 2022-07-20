import {useParams} from "react-router-dom";
import {getShowByID} from "../utils/Selectors";
import {useEffect} from "react";


export default function Ticket(props) {
    const {showID, seatID} = useParams();
    const {database, addTicket} = props;
     const show = getShowByID(database, showID);

    //show.seats[seatID] = seatID;
    useEffect(() => {
        props.addTicket(showID, seatID);
    }, []);


    return (
        <>
            <div className={'row mt-4'}>
                <div className={'col'}>
                    <h4 className={"text-center"}>Dziękujemy za zakupy! Poniżej znajduje się Twój bilet!</h4>
                </div>
                <div className={'row justify-content-center mt-4'}>
                    <div className={'col-4'}>
                        <div className={`card`}>
                            <div className={"card-header  bg-success text-center text-white"}><h5 className={"mt-2"}>Kino Filmuś</h5></div>
                            <div className={"card-body"}>
                                <small>Numer biletu:</small>
                                <h5 className={"card-title"}> {show.seats[seatID]}</h5>
                                <small>Tytuł filmu:</small>
                                <h5 className={"card-title"}> {show.movie.movieTitle}</h5>
                                <small>Sala: </small>
                                <h5 className={"card-title"}>{show.room.roomNumber}</h5>
                                <small>Miejsce: </small>
                                <h5 className={"card-title"}>{seatID}</h5>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}