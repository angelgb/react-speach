import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import NewSpeach from "./NewSpeach";
import React, { useState } from 'react';


import db from '../assets/db'
function Panel() {
  const [speachs, setSpeachs] = useState(db.speach);
  const postSpeach = (speach) => {
    setSpeachs(speachs, speachs.push(speach))
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newSpeack">Nueva Charla</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
              <div className='speach-list'>
                  <Home speachs={speachs} />
              </div>
            
          </Route>
          <Route path="/newSpeack">
            <NewSpeach postSpeach={postSpeach}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Panel;
