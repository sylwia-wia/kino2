import React from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getMovies} from "../utils/Selectors";
import {Pencil, Trash3} from "react-bootstrap-icons";


export default function Movie(props) {
    const {database, removeMovie} = props;

    function onClickRemoveHandler(movieID) {
        removeMovie(movieID);
    }


    const rekordyTabeli = getMovies(database).map((movie, index) => (
        <tr key={index}>
            <td>
                {index + 1}
            </td>
            <td>
                {movie.movieTitle}
            </td>
            <td>
                {movie.movieTime}
            </td>
            <td>
                <button className="btn btn-btn-dark px-2 float-end">
                    <Link to={`update/${movie.movieID}`} key={movie.movieID} className={'me-2 link-dark'}><Pencil/>
                    </Link>
                </button>
                <button onClick={() => onClickRemoveHandler(movie.movieID)} className="btn btn-btn-dark px-2 float-end">
                    <Trash3 />
                </button>
            </td>
        </tr>
    ));
    console.log(database);
    return (
        <>
            <h2 className="px-3">Repertuar</h2>
            <Link to="/movie/create">
                <button className="btn btn-dark mb-3 px-3 float-end">
                    Dodaj nowy film
                </button>
            </Link>
            <Table striped bordered>
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Tytuł</th>
                    <th>Czas trwania (min)</th>

                </tr>

                </thead>
                <tbody>
                {rekordyTabeli}
                </tbody>

            </Table>

        </>
    );
}