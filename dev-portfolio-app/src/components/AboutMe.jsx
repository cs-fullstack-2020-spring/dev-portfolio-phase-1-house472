import React, { Component } from 'react'
class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id= "container">
               

                <div id = "image">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFQd-C8snTGvw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=RGtjxdlATLTHHk8zsSatHHsqO5alTmeGK7KdNH4DcxM"  alt="" />
                </div>

                <div id = "headerQuote">

                <p class="quote">"First Solve the Problem.....Then Write the Code"</p>
                <p class="quote">---John Johnson</p>
                </div>

                <div id = "aboutMe">
                    <h1>About Me</h1>

                    <p> I am a self taught full-stack web developer. but that is only the tip of the iceberg. I am also, a
                    problem solver, team builder, motivator, planner, teacher, trainer, compliance specialist and seasoned
                professional. I am certain that all of these skills will add value to any organization</p>
                    <p>We all can imagine how planning and problem solving are required attributes of a developer. But how can
                teaching, training, team building, and compliance add value to the developer role? Let's explore!</p>
                </div>

                <div id= "footerQuote">
                    <p>

                    “If your ship doesn’t come in, swim out to meet it!” – Jonathan Winters
                </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;