import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookThunk } from './redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !author.trim()) return;
    const itemId = uuidv4();
    const category = 'categories not yet implemented';
    const book = {
      item_id: itemId,
      title,
      author,
      category,
    };
    dispatch(addBookThunk(book));

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book-form">
      <div className="line" />
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBookForm;
