import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
              React Router
          </header>
        </div>
        <div>
          <Link to=  "/"  >Home</Link>{' '}
          <Link to=  "/about">About</Link>{' '}
          <Link to=  "/contact">Contact</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" render={() => <h1>Contactaddress</h1>}/>
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
