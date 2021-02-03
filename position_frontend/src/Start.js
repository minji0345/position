import React from "react"
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom"
import Login from "./Login"
// import About from "./About"
// import NotFound from "./NotFound"

function Start() {
    return (
        <Router>
            <Link to="/">
                <button>Home</button>
            </Link>
            <hr />
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    )
}

export default Start;