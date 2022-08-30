// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function booksReducer(
  state = [
    { id: 1, title: 'River between', author: 'Ngugi wa Thiongo' },
    { id: 2, title: 'Born a Crime', author: 'Trevor Noah' },
  ],
  action = {},
) {
  switch (action.type) {
    case 'bookstore/books/ADD_BOOK':
      return [...state, action.payload];
    case 'bookstore/books/REMOVE_BOOK':
      console.log(action.payload.id, 'enhe');
      return [...state.filter((books) => books.id !== action.payload.id)];

    default:
      return state;
  }
}

// Action Creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  };
}
