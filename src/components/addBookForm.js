function AddBookForm() {
  return (
    <div className="add-book-form">
      <form action="">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBookForm;
