import React,{ Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainComponent from './components/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';


const store = ConfigureStore();

class App extends Component {
    render() {
      return (
        <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
        </Provider>  
      );
    }
  }
  
  export default App;