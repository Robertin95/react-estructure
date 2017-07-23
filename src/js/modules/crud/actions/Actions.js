import crudActionsList from './ActionTypes.js'

export function crudAddText(text){
  return{
    type: crudActionsList.ADD_TEXT,
    text:text
  }
}
