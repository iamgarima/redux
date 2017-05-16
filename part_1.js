const initialState = {
  nextNoteId: 1,
  notes: {}
};

global.state = initialState;

const stateChangeFunc = () => {
  global.state.notes[global.state.nextNoteId] = {
    id: global.state.nextNoteId,
    content: ''
  };
  global.state.nextNoteId++;
  global.state.nextNoteId === 12 ? null : renderApp();
};

const renderApp = () => {
  console.log('I am the updated state number : ' + global.state.nextNoteId, global.state);
  stateChangeFunc();
}

renderApp();