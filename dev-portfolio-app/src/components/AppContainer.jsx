import React, { Component } from 'react'
import AboutMe from './AboutMe'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import SignUpform from './SignUpform';
import ProfessionalBackground from './ProfessionalBackground';

import Projects from './Projects'
import { Jumbotron } from 'react-bootstrap';



class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div >
               
                <h1 id="header">Charles A. Gordon</h1>
                
                
                <Router  >
                    <Link class="navbar"    to="/home">Home</Link> 
                    <Link  class="navbar"   to="/form">Contact Me!</Link>
                    <Link  class="navbar"   to="/projects">Projects</Link>
                   
                    <Link  class="navbar"   to="/professional">Professional Background</Link>

                    <Route path="/home">
                    <AboutMe />
                    </Route>
                   
                    <Route path="/form">
                        <SignUpform />
                    </Route>


                    <Route path="/projects">
                    <Projects />
                    </Route>

                    <Route path="/professional">
                    <ProfessionalBackground />
                    </Route>


                    
                </Router>
               
               
                

               
            </div>
        );
    }
}

export default AppContainer;