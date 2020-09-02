import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../Reducers/bookReducer";

export const BookContext = createContext();

// const initialState = JSON.parse(localStorage.getItem("books"));

const BookContextProvider = ({ children }) => {
  // const [books, dispatch] = useReducer(bookReducer, initialState);
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <div>
      <BookContext.Provider value={{ books, dispatch }}>
        {children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
