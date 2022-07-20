export const getMovies = (database) => Object.values(database.movies);
export const getMovieByID = (database, movieID) => database.movies[movieID];
export const getRooms = (database) => Object.values(database.rooms);
export const getRoomByID = (database, roomID) => database.rooms[roomID];
export const getShows = (database) => Object.values(database.shows);
export const getShowByID = (database, showID) => database.shows[showID];
