import crudActionsList from '../actions/ActionTypes.js'
const initialState = {
  texts : [
    'Hello world',
    'Hola mundo'
  ]
}
function crudApp(state = initialState, action){
  switch (action.type) {
    case crudActionsList.ADD_TEXT:
      return Object.assign({}, state, {
        texts : [
          ...state.texts,
          action.text
        ]
      });
    default:
      return state

  }
}

export const crudReducers = {
  crudApp
}
