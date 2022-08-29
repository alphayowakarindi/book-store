// Actions
const ADD_BOOK = 'ADD_BOOK ';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
let lastId = 0;
export default function reducer(state = { books: [] }, action = {}) {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,

        books: [
          ...state.books,
          {
            id: ++lastId,
            title: action.payload.title,
            title: action.payload.author,
          },
        ],
      };
    case 'REMOVE_BOOK':
      return {
        books: state.books.filter((books) => books.id !== action.payload.id),
      };
    default:
      return state;
  }
}

// Action Creators
export function addBook(title, author) {
  return {
    type: ADD_BOOK,
    payload: {
      title,
      author,
    },
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
