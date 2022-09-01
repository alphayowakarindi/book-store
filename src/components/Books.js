import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddBookForm from './addBookForm';
import Book from './Book';
import { fetchBooksThunk } from './redux/books/books';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  // Execute function that will return action. Redux will scan all the...
  // action types and return implementedoutput if the type is present.
  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, []);
  return (
    <div className="books">
      {books.map((book) => (
        <Book
          itemId={book.item_id}
          title={book.title}
          author={book.author}
          key={book.item_id}
        />
      ))}
      <AddBookForm />
    </div>
  );
}

export default Books;
