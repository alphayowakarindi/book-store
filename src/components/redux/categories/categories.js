// Action
const CHECK_STATUS = 'CHECK_STATUS ';

// Reducer
export default function categoriesReducer(state = { categories: [] }, action = {}) {
  switch (action.type) {
    case 'CHECK_STATUS':
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
