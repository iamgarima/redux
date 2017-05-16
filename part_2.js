const initialState = {
  nextNoteId: 1,
  notes: {}
};

const ADD_NOTE = "ADD_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      /********** Using object spread operator **********/
      // return {
      //   ...state,
      //   nextNoteId: state.nextNoteId + 1,
      //   notes: {
      //     ...state.notes,
      //     action.note.id: action.note
      //   }
      // };
      return Object.assign({}, state, { nextNoteId: state.nextNoteId + 1 }, { notes: Object.assign({}, state.notes, { [action.note.id]: action.note }) });
    case UPDATE_NOTE:
      /********** Using object spread operator **********/
      // return {
      //   ...state,
      //   notes: {
      //     ...state.notes,
      //     action.note.id: action.note
      //   }
      // };
      return Object.assign({}, state, { notes: Object.assign({}, state.notes, { [action.note.id]: action.note }) });
    default:
      return state;
  }
};

const action1 = {
  type: ADD_NOTE,
  note: {
    id: 1,
    content: "Hello world!"
  }
};

const action2 = {
  type: UPDATE_NOTE,
  note: {
    id: 1,
    content: "Hello Garima!"
  }
};

const state0 = reducer(undefined, action1);
const state1 = reducer(state0, action2);

console.log('This is state0', JSON.stringify(state0, null, 2));
console.log('This is state1', JSON.stringify(state1, null, 2));