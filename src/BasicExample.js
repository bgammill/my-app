import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './BasicExample.css';

const Home = () => (
  <div>
    <h2>home - 1a4.xyz</h2>
    <div className="container">
      <div className="row">
        <div className="col-lg">
          you
        </div>
        <div className="col-lg">
          have
        </div>
        <div className="col-lg">
          arrived
        </div>
      </div>
    </div>
  </div>
)

const Wello = () => (
  <div>
    <h2>wello - 1a4.xyz</h2>
  </div>
)

const About = () => (
  <div>
    <h2>about - 1a4.xyz</h2>
  </div>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul className="BasicExample">
        <li className="BasicExample"><Link to="/">Home</Link></li>
        <li className="BasicExample"><Link to="/about">About</Link></li>
        <li className="BasicExample"><Link to="/wello">Wello</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/wello" component={Wello}/>
    </div>
  </Router>
)
export default BasicExample
