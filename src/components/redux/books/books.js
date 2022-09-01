// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const api =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XkIXtwdQN2As1Hyi39G5/books';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return [...state, action.payload];
    case 'bookstore/books/REMOVE_BOOK/fulfilled':
      return [...state.filter((books) => books.id !== action.payload.id)];
    case 'bookstore/books/GET_BOOKS/fulfilled':
      return action.payload;
    default:
      return state;
  }
}

// Redux thunks
export const fetchBooksThunk = createAsyncThunk(GET_BOOKS, async () => {
  const data = await fetch(api);
  const response = await data.json();

  const arr = [];
  const keys = Object.keys(response);
  keys.map((key) =>
    arr.push({
      item_id: key,
      title: response[key][0].title,
      author: response[key][0].author,
      category: response[key][0].category,
    })
  );
  return ([] = arr);
});

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
