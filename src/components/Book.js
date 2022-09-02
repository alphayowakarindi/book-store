import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookThunk } from './redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function Book({ itemId, title, author }) {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 101);

  return (
    <div className="book">
      <div className="book-info">
        <span className="category">Action</span>
        <span className="title">{title}</span>
        <span className="author">{author}</span>
        <div className="update-btns">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => dispatch(removeBookThunk(itemId))}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="percentage-progress">
        <div className="circular-bar">
          <CircularProgressbar value={percentage} />
        </div>
        <div className="percentage">
          <span>
            {percentage}
            %
          </span>
          <span>Completed</span>
        </div>
      </div>
      <div className="progress-satus">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
