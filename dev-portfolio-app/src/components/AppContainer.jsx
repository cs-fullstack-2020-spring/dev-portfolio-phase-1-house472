import React, { Component } from 'react'
import AboutMe from './AboutMe'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import SignUpform from './SignUpform';
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 id="header">Charles A. Gordon</h1>
                <Router>
                    <Link to="/home">Home</Link>
                    <Link to="/form">Contact Me!</Link>
                    <Route path="/form">

                    </Route>




                </Router>


                <SignUpform />
                <AboutMe />
            </div>
        );
    }
}

export default AppContainer;