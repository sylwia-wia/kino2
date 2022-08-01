import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

export default function RoomForm(props) {
    const {rooms, room, onFormSubmitHandler} = props;
    const isEditing = room !== undefined;
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({criteriaMode: "all"});

    useEffect(() => {
        if (isEditing) {
            setValue('roomNumber', room.roomNumber);
            setValue('capacity', room.capacity);
        }
    }, [])

    const onSubmit = (data) => {
        onFormSubmitHandler(data);
    };

    const isExist = (roomNumber) => {
        if (isEditing && room.roomNumber === roomNumber) {
            return true;
        }

        if (Object.values(rooms).filter(room => room.roomNumber === roomNumber).length === 0 ) {
            return true;
        }

        return 'Podana sala już istnieje';
    };

    const roomValidation = {
        roomNumber: {
            required: "Uzupełnij numer sali",
            min: {
                value: 1,
                message: "Numer sali nie może być mniejszy od 1"
            },
            max: {
                value: 80,
                message: "Numer sali nie może być większy niż 80"
            },
            validate: isExist
        },
        capacity: {
            required: "Podaj maksymalną liczbę osób",
            min: {
                value: 20,
                message: "Liczba osób nie może być mniejsza niż 20"
            },
            max: {
                value: 300,
                message: "Liczba osób nie może być większa niż 300"
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Numer sali" aria-label="roomNumber"
                           aria-describedby="basic-addon1"
                           {...register("roomNumber", roomValidation.roomNumber
                           )}
                    />
                </div>

                <ErrorMessage
                    errors={errors}
                    name="roomNumber"
                    render={({messages}) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p className="fw-bold text-danger" key={type}>{message}</p>
                        ))
                    }
                />

                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Maksymalna liczba osób"
                           aria-label="capacity"
                           aria-describedby="basic-addon1"
                           {...register("capacity", roomValidation.capacity)}
                    />
                </div>

                <ErrorMessage
                    errors={errors}
                    name="capacity"
                    render={({messages}) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p className="fw-bold text-danger" key={type}>{message}</p>
                        ))
                    }
                />

                <button type="submit" className="btn btn-dark mb-3 px-3">
                    Zatwierdź
                </button>
            </form>

        </>
    );
}