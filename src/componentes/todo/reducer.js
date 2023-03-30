export const initialState = {
  counter: 2,
  todos: [{
    id: 1,
    text: "One",
  }, {
    id: 2,
    text: "Two",
  }],
};

export const TodoReducer = (state, action) => {
  switch(action.type) {
    case 'remove': {
      const idx = state.todos.findIndex(t => t.id === action.id);
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1);
      return {
        counter: state.counter,
        todos,
      }
    }
    default:
      return state;
  }
}