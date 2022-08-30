import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <h4>{title}</h4>
      <span>{author}</span>
      <button type="button" onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
