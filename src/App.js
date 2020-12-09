import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue()


  return (
    <div className="app">
     {/* <h1>hello</h1> */}

      {!user ?(
        <Login />
      ) : (
        <div className="app__body">
      <Router>
      {/* sidebar */}
      <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
          {/* chat */}
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </Router>
     </div>
      )}
     
    </div>
  );
}

export default App;
