import React, {Component} from 'react';
import SocionityApp from './component/socionity/SocionityApp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <SocionityApp/>
      </div>
    );
  }
}

export default App;
