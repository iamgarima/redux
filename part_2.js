const initialState = {
  nextNoteId: 1,
  notes: {}
};

const ADD_NOTE = "ADD_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, { nextNoteId: state.nextNoteId + 1 }, { notes: Object.assign({}, state.notes, { [action.note.id]: action.note }) });
    case UPDATE_NOTE:
      return Object.assign({}, state, { notes: Object.assign({}, state.notes, { [action.note.id]: action.note }) });
    default:
      return state;
  }
};

const actions = [
  {
    type: ADD_NOTE,
    note: {
      id: 1,
      content: "Hello world!"
    }
  },
  {
    type: UPDATE_NOTE,
    note: {
      id: 1,
      content: "Hello Garima!"
    }
  }
];

const state = actions.reduce(reducer, undefined);

console.log('This is the final state', JSON.stringify(state, null, 2));
