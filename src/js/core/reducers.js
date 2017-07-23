import {combineReducers} from 'redux'
import {crudReducers}    from '../modules/crud/reducers/Crud.js'
//Create an object of all reducers
let reducers = Object.assign({},
  //Object of reducersList
  crudReducers
);
//Combine all reducers
export default combineReducers(
  reducers
);
