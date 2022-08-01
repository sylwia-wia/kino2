import './App.css';
import AppLayout from "./AppLayout"
import {useContext, useEffect } from "react";
import {getMovieByID, getRoomByID} from "./utils/Selectors";
import React from "react";
import moment from "moment/moment";
import {Context} from "./context/Context";

function App() {
    const {database, setDatabase} = useContext(Context);

    useEffect(() => {
        localStorage.setItem('database', JSON.stringify(database));
    }, [database.rooms, database.movies, database.shows]);

    const addRoom = (roomData) => {
        const rooms = {...database.rooms};
        let id = 1;

        if (Object.keys(rooms).length > 0) {
            const ids = Object.keys(rooms).map(id => parseInt(id))
            id = Math.max(...ids) + 1
        }

        roomData.roomID = id;
        rooms[roomData.roomID] = roomData;

        setDatabase({
            ...database,
            rooms: {...rooms},
        });
    }

    const removeRoom = (roomID) => {
        delete database.rooms[roomID];
        setDatabase({
            ...database
        });
    }

    const removeShow = (showID) => {
        delete database.shows[showID];
        setDatabase({
            ...database
        });
    }

    const updateRoom = (roomID, data) => {
        setDatabase({
            ...database,
            rooms: {
                ...database.rooms,
                [roomID]: {...data}
            }
        });
    }

    const updateMovie = (movieID, data) => {
        setDatabase({
            ...database,
            movies: {
                ...database.movies,
                [movieID]: {...data}
            }
            });
    }

    const updateShow = (showID, data) => {
        const show = {
            ...data,
            movie: {...getMovieByID(database, data.movieID)},
            room: {...getRoomByID(database, data.roomID)}
        }

        setDatabase({
            ...database,
            shows: {
                ...database.shows,
                [showID]: {...show}
            }
        });
    }

    const addTicket = (showID, seatID) => {
        const chooseShow = {...database.shows[showID]};
        const ticketID = Math.random().toString(36).substring(7);
         chooseShow.seats[seatID] = ticketID;

         setDatabase({
             ...database,
             shows: {
                 ...database.shows,
                 [showID]: {...chooseShow}
             }
         })
    }

    const addMovie = (movieData) => {
        const movies = {...database.movies};
        let id = 1;

        if (Object.keys(movies).length > 0) {
            const ids = Object.keys(movies).map(id => parseInt(id))
            id = Math.max(...ids) + 1
        }

        movieData.movieID = id;
        movies[movieData.movieID] = movieData;

        setDatabase({
            ...database,
            movies: {...movies}
        });
    }

    const removeMovie = (movieID) => {
        delete database.movies[movieID];
        setDatabase({
            ...database,
        });
    }

    const addShow = (showData) => {
        const shows = {...database.shows};
        let id = 1;
        if (Object.keys(shows).length > 0) {
            const ids = Object.keys(shows).map(id => parseInt(id))
            id = Math.max(...ids) + 1
        }

        showData.movie = getMovieByID(database, showData.movieID);
        showData.room = getRoomByID(database, showData.roomID);

        showData.seats = {};
        for (let i = 1; i <= showData.room.capacity; i++) {
                showData.seats[i] = null;
            }

        showData.startTime =  moment(showData.showDate).format('YYYY-MM-DD HH:mm:ss');
        showData.endTime = moment(showData.showDate).add(showData.movie.movieTime, 'minutes').format('YYYY-MM-DD HH:mm:ss');

        showData.showID = id;
        shows[showData.showID] = showData;

        setDatabase({
            ...database,
            shows: {...shows},
        });

    }

     return (
        <>
            <AppLayout
                database={database}
                addRoom={addRoom}
                addMovie={addMovie}
                addShow={addShow}
                removeRoom={removeRoom}
                updateRoom={updateRoom}
                removeMovie={removeMovie}
                updateMovie={updateMovie}
                removeShow={removeShow}
                updateShow={updateShow}
                addTicket={addTicket}
            />
        </>
    );
}

export default App;
