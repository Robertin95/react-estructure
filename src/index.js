import React     from 'react';
import ReactDOM  from 'react-dom';
//Style
import './css/index.css';
//Redux
import {Provider, connect} from 'react-redux'
import store  from './js/core/store.js'
//Components
import Com    from './js/modules/crud/components/getAll.jsx'
import Form   from './js/modules/crud/components/form.jsx'
//import registerServiceWorker from './registerServiceWorker';
//redux
import {crudAddText} from './js/modules/crud/actions/Actions.js'
import {crudReducers} from './js/modules/crud/reducers/Crud.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.props = props
    this.handleClick = this.handleClick.bind(this);
    this.props.addText('fgdfg')
  }
  handleClick(evt){
    this.props.addText('Esto es otro texto')
  }
  render(){
    const list = this.props.texts.map((text, key)=><li key={key}>{text}</li>)
    //const list = this.props.texts.map((txt, k)=><Com key={k} name={txt}/>)
    return(
      <div>
        <ul>
          {list}
        </ul>
        <button onClick={this.handleClick}>agregar texto</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.crudApp);
  return {
    texts : state.crudApp.texts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addText : text => {
      dispatch(crudAddText(text))
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
//registerServiceWorker();
