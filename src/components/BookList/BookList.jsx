import React from 'react';
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  
  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
