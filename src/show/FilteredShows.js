import moment from "moment/moment";
import {Link} from "react-router-dom";
import {Pencil, Trash3} from "react-bootstrap-icons";
import React from "react";

export default function FilteredShows(props) {
    const {removeShow, filterShow} = props;

    function onClickRemoveHandler(showID) {
        removeShow(showID);
    }

    const rekordyTabeli = Object.values(filterShow).map((show, index) => {
        const bgColor = moment().isAfter(show.startTime) && moment().isBefore(show.endTime) ? 'bg-warning' : '';

        return (
            <tr key={index} className={bgColor}>
                <td>
                    {index + 1}
                </td>
                <td>
                    {show.movie.movieTitle}
                </td>
                <td>
                    {show.room.roomNumber}
                </td>
                <td>
                    {show.room.capacity}
                </td>
                <td>

                    {show.movie.movieTime}
                </td>
                <td>
                    {moment(show.showDate).format('YYYY-MM-DD HH:mm')}
                </td>
                <td>

                    <button className="btn btn-btn-dark px-2 float-end">
                        <Link to={`update/${show.showID}`} key={show.showID} className={'me-2 link-dark'}><Pencil/>
                        </Link>
                    </button>
                    <button onClick={() => onClickRemoveHandler(show.showID)}
                            className="btn btn-btn-dark px-2 float-end">
                        <Trash3/>
                    </button>
                    <Link to={`buy/${show.showID}`} key={show.showID} className={'me-2 link-dark'}>
                        <button className="btn btn-dark px-2 float-end">
                            Kup bilet
                        </button>
                    </Link>
                </td>

            </tr>
        )

    });

    return (
      <>
          {rekordyTabeli}

      </>
    );
}