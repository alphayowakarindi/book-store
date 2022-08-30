// Action
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
export default function categoriesReducer(state = '', action = {}) {
  switch (action.type) {
    case 'bookstore/categories/CHECK_STATUS':
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creator
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
