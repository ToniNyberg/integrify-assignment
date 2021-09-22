import React from "react";
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Users from "./components/Homepage"
import User from "./components/User"

function App() {


  return (
    <Router>
      <Route exact path="/">
        <Users />
      </Route>
      <Route path="/users/:id" children={<User />}></Route>
    </Router>
  )

}

export default App;
