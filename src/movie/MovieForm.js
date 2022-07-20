import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {ErrorMessage} from "@hookform/error-message";

export default function MovieForm(props) {
    const {register, handleSubmit, formState: { errors }, setValue} = useForm({criteriaMode:"all"});
    const {movies, movie, onFormSubmitHandler} = props;
    const isEditing = movie !== undefined;

    useEffect(() => {
        if(isEditing) {
            setValue('movieTitle', movie.movieTitle);
            setValue('movieTime', movie.movieTime);
        }},[])

    const onSubmit = (data) => {
        onFormSubmitHandler(data);
    };

    console.log(movies);
    const isExist = (movieTitle)  => {
        if(isEditing && movie.movieTitle === movieTitle) {
            return true;
        }
        if(Object.values(movies).filter(movie => movie.movieTitle === movieTitle).length === 0)
            return true;
        return "Podany film już istnieje";
    }

    const validationMovieTitleTest = {
        required: "Uzupełnij tytuł filmu",
        validate: isExist
    }

    const validationMovieTimeTest= {
        required: "Uzupełnij czas trwania filmu",
        maxLength: {
            value: 4,
            message: "Maksymalna liczba znaków to 4 "
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Tytuł filmu" aria-label="movieTitle"
                       aria-describedby="basic-addon1"
                    {...register("movieTitle", validationMovieTitleTest)}
                />
            </div>
                <ErrorMessage
                    errors={errors}
                    name="movieTitle"
                    render={({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p className="fw-bold text-danger" key={type}>{message}</p>
                        ))
                    }
                />
            <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Czas trwania filmu"
                       aria-label="movieTime"
                       aria-describedby="basic-addon1"
                       {...register("movieTime", validationMovieTimeTest)}
                />
            </div>
                <ErrorMessage
                    errors={errors}
                    name="movieTime"
                    render={({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p className="fw-bold text-danger" key={type}>{message}</p>
                        ))
                    }
                />
            <button type="submit" className="btn btn-dark mb-3 px-3 float-end">
                Utwórz
            </button>
            </form>
        </>
    );
}