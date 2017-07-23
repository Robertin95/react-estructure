import {createStore}  from 'redux'
import reducer        from './reducers.js'
//You must create the store
let store =  createStore(reducer)

export default store;
