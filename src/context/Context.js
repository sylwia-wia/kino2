
import React, { useState } from "react";

export const Context = React.createContext({});
export const ContextProvider = ({ children }) => {
    const [database, setDatabase] = useState(() => {
        const restoredDatabase = JSON.parse(localStorage.getItem('database'));
        return restoredDatabase || {
            rooms: {},
            movies: {},
            shows: {},
        }
    });

    return (
        <Context.Provider value={{ database, setDatabase }}>
            {children}
        </Context.Provider>
    );
};