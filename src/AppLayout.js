import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import RoomsCreate from "./movie/RoomsCreate";
import Rooms from "./routes/Rooms";
import Movie from "./routes/Movie";
import Show from "./routes/Show";
import MovieCreate from "./movie/MovieCreate";
import ShowCreate from "./movie/ShowCreate";
import RoomsUpdate from "./movie/RoomsUpdate";
import MovieUpdate from "./movie/MovieUpdate";
import ShowUpdate from "./movie/ShowUpdate";
import Buy from "./movie/Buy";
import Ticket from "./movie/Ticket";

function AppLayout(props) {
    const {
        database,
        addRoom,
        addMovie,
        addShow,
        removeRoom,
        updateRoom,
        removeMovie,
        updateMovie,
        removeShow,
        updateShow,
        addTicket
    } = props;

    return (
       <>
           <header>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
               <a className="navbar-brand" href="#">Kino</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item active">
                           <NavLink to="/rooms" className="nav-link">Sale</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink to="/show" className="nav-link">Seanse</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink to="/movie" className="nav-link">Filmy</NavLink>
                       </li>

                   </ul>
               </div>
           </nav>
           </header>
           <div className={'container-fluid'}>
               <div className={'row'}>
                   <main className={'col mt-3'}>
                           <Routes>
                               <Route path={'/'} element={<Rooms database={database} />} />
                               <Route path="/rooms" element={<Rooms database={database} removeRoom={removeRoom} updateRoom={updateRoom} />} />
                               <Route path="/rooms/create" element={<RoomsCreate database={database} addRoom={addRoom}/>} />
                                <Route path="/movie" element={<Movie database={database} removeMovie={removeMovie} />} />
                               <Route path="/movie/create" element={<MovieCreate database={database} addMovie={addMovie} />} />
                               <Route path="/show" element={<Show database={database} addShow={addShow} removeShow={removeShow} />} />
                               <Route path="/show/create" element={<ShowCreate  database={database} addShow={addShow} />} />
                               <Route path="/rooms/update/:roomID" element={<RoomsUpdate database={database} updateRoom={updateRoom} />} />
                               <Route path="/movie/update/:movieID" element={<MovieUpdate database={database} updateMovie={updateMovie} />} />
                               <Route path="/show/update/:showID" element={<ShowUpdate database={database} updateShow={updateShow} />} />
                               <Route path="show/buy/:showID" element={<Buy database={database} addTicket={addTicket}/>} />
                               <Route path="/show/:showID/ticket/:seatID" element={<Ticket database={database} addTicket={addTicket}/>} />
                               <Route path="*" element={ <main style={{ padding: "1rem", fontSize:"20px" }}>
                                   <p>Brak żądanej strony!</p>
                               </main>} />
                           </Routes>
                   </main>
               </div>
           </div>

       </>
);
}
export default AppLayout;