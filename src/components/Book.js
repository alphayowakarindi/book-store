import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div className="book">
      <h4>{title}</h4>
      <span>{author}</span>
      <button type="button">Remove</button>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
