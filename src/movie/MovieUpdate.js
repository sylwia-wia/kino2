import {useParams} from "react-router-dom";
import {getMovieByID} from "../utils/Selectors";
import MovieForm from "./MovieForm";
import {useNavigate} from "react-router-dom";

export default function MovieUpdate(props) {
    const navigate = useNavigate();
    const {database} = props;
    const {movieID} = useParams();
    const {movies} = database;

    const movie = getMovieByID(database, movieID);

    function onFormSubmitHandler(formData) {
        formData.movieID = movie.movieID;

        props.updateMovie(formData.movieID, formData);
        navigate('/movie')
    }

    return <MovieForm movie={movie} onFormSubmitHandler={onFormSubmitHandler} movies={movies}/>;

}

