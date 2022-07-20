import React, {useState, useRef} from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getShows} from "../utils/Selectors";
import {Pencil, Trash3} from "react-bootstrap-icons";
import moment from "moment/moment";
import FilteredShows from "../movie/FilteredShows";

export default function Show(props) {
    const {database, removeShow, showID} = props;
    const [filteredMovies, setFilteredMovies] = useState('');
    const [filterShow, setFilterShow] = useState({});

    console.log(filteredMovies);
    let filterByMovie;

    const shows = {...database.shows};
    Object.values(shows).filter(movieTitle => console.log(movieTitle.movie.movieTitle===filteredMovies));
    if (filteredMovies) {
        const filteringMovies = Object.values(shows).filter(movieTitle => movieTitle.movie.movieTitle.toLowerCase().includes(filteredMovies.toLowerCase()));
        console.log(filteringMovies);
        if (filteringMovies) {
            filterByMovie = [<FilteredShows key={filteredMovies} filterShow={filteringMovies} removeShow={removeShow}/>];
        } else {
            filterByMovie = (
                <h3 className={'text-center text-muted mt-5'}>
                    Nie znaleziono seansu dla takiego filmu!
                </h3>
            );
        }
    }
    else
        filterByMovie = [<FilteredShows key={shows} filterShow={shows} removeShow={removeShow}/>]


     return (
        <>
            <h2 className="px-3">Seanse</h2>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Wyszukaj film"
                       aria-label="Search movie" aria-describedby="search"
                       // ref={inputValue}
                       value={filteredMovies ? props.value : ''}
                       onChange={(e) =>  setFilteredMovies(e.target.value)}
                />
                    <div className="input-group-append">
                        <button className="btn btn-dark  float-end" id="search" onClick={()=>setFilteredMovies('')}>Wyczyść</button>
                    </div >
            </div>


            <Link to="/show/create">
                <button className="btn btn-dark mb-3 px-3 float-end">
                    Dodaj nowy seans
                </button>
            </Link>
            <Table striped bordered>
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Film</th>
                    <th>Sala</th>
                    <th>Ilość miejsc</th>
                    <th>Czas trwania</th>
                    <th>Data</th>
                </tr>

                </thead>
                <tbody>
                {filterByMovie}
                </tbody>

            </Table>
            <p></p>

        </>
    );
}