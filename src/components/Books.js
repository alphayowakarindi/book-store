import { useSelector } from 'react-redux';
import AddBookForm from './addBookForm';
import Book from './Book';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="books">
      {books.map((book) => (
        <Book
          id={book.id}
          title={book.title}
          author={book.author}
          key={book.id}
        />
      ))}
      <AddBookForm />
    </div>
  );
}

export default Books;
