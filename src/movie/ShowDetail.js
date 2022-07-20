import moment from "moment/moment";
import "./ShowDetail.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {useNavigate, useParams} from "react-router-dom";
import Ticket from "./Ticket";
import React, {useState} from "react";


export default function ShowDetail(props) {
    const {show} = props;
    //const startTime = moment(show.showDate);
   // const endTime = moment(show.showDate).add(show.movie.movieTime, 'minutes');
    const navigate = useNavigate();
    const {showID} = useParams();



 function handleSeatClick(seatID) {
     console.log(show);

     if (show.seats[seatID] !== null) {
         return;
     }


// function handle() {
//     props.addTicket(showID, seatID,show);
//     navigate(`/show/${showID}/ticket/${seatID}`)
// }




     const confirm = {
         title: 'Potwierdź zakup biletu',
         message: 'Czy chcesz kupić bilet?',

         buttons: [
             {
                 label: 'Tak',
                 onClick: () => {
                     navigate(`/show/${showID}/ticket/${seatID}`)

                 }
             },
             {
                 label: 'Nie',
                 onClick: () => {
                     navigate(`/show/buy/${showID}`)
                 }
             }
         ],

     };

     confirmAlert(confirm);
 }

    console.log(show);
     const seatCards = Object.keys(show.seats).map(seatID => {
         const bgColor = show.seats[seatID] !== null ? 'bg-secondary' : 'bg-success';

         return (
             <div className="col-1" key={seatID}>
                 <div className={`${bgColor} d-inline-flex ms-4 p-4 mt-4 me-3 justify-content-center seat`}
                      onClick={() => handleSeatClick(seatID)}
                      role={`${show.seats[seatID] === null ? 'button' : ''}`}
                 >
                     {seatID}
                 </div>
             </div>
         );
     });



    return (
        <>
            <div className={"card"}>
                <div className={"card-header"}><h5>{show.movie.movieTitle}</h5></div>
                <div className={"card-body"}>

                    <h5 className={"card-title"}>{moment(show.startTime).format('DD-MM-YYYY')}</h5>
                    <h5 className={"card-title"}>{moment(show.startTime).format('HH:mm:ss')} ->  {moment(show.endTime).format('HH:mm:ss')}</h5>
                    <h5 className={"card-title"}>Czas trwania: {show.movie.movieTime} min </h5>
                    <h5 className={"card-title"}>Sala: {show.room.roomNumber}</h5>
                </div>
            </div>

            <div className={`row row-cols-8 g-10 me-4`}>
                    {seatCards}
                </div>

        </>
    )
}