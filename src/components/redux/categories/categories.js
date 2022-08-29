// Action
const CHECK_STATUS = 'CHECK_STATUS ';

// Reducer
let lastId = 0;
export default function reducer(state = { categories: [] }, action = {}) {
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
