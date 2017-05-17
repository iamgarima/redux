const initialState = {
  nextNoteId: 1,
  notes: {}
};

const ADD_NOTE = "ADD_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

const actions = [
  {
    type: ADD_NOTE,
    note: {
      id: 1,
      content: "Hello world!"
    }
  },
  {
    type: ADD_NOTE,
    note: {
      id: 2,
      content: "Hello!"
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

const validateAction = action => {
  if(!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object!');
  }
  if(typeof action.type === 'undefined') {
    throw new Error('Action must have a type!');
  }
};

const createStore = reducer => {
  let state = undefined;
  let subscribers = [];
  return {
    dispatch: (action) => {
      validateAction(action);
      state = reducer(state, action);
      subscribers.forEach(handler => handler());
    },
    getState: () => state,
    subscribe: handle => {
      subscribers.push(handle);
      return () => {
        subscribers.splice(subscribers.indexOf(handle), 1);
      };
    }
  }
};

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch(actions[0]);
store.dispatch(actions[1]);

