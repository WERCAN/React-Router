
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound';
import Topics from './Language/Topics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/topics' component={Topics}/>
          <Route component={NotFound}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
