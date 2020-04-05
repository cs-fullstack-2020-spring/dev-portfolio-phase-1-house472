import React, { Component } from 'react'
class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="container">



                <div id="image">
                    <img src= "images/Charles.png" width ="300" alt="" />
                </div>

                <div id="headerQuote">

                    <p class="quote">"First Solve the Problem.....Then Write the Code"</p>
                    <p class="quote">---John Johnson</p>
                </div>
                <h1 id = "abtMeHeader">Hi! I'm Charles</h1>
                <div id="aboutMe">
                    

                    <p> I am a “seasoned” professional. By seasoned, I mean, I am at a point in my career where the challenges I assume are juxtaposed against my life-work-balance choices. At this stage in my career, I found myself seeking employment, in a job market that was challenging to maneuver. It became clear to me that i must change my direction, and pursue new skill sets in order to be viable in today’s technology driven job market. This is what led me to CodeCrew.
</p>
                    <p>I know what you are thinking. It is the same thing I was thinking as I embarked on this course. What in the hell was i thinking! Trying to learn a new language (i still am not completely sure about my native language!). Even though my career experiences had been varied, nothing I had done to this point was remotely comparative to learning how to code.
</p>
                    <p>Yet, here I am. I took on this challenge like any other, piece by piece and bit by bit. Hard work, late nights ( and puzzled looks from my kids!) and perseverance I have turned myself into a self-taught, full stack web developer. But I am more than just that. I am a problem solver, team builder, motivator, planner, teacher, trainer, and “seasoned” professional. I have lived the Jonathan Winters quote “If your ship does not come in, swim out to meet it!”
</p>
                </div>

                <div id="footerQuote">
                    <p>

                        “If your ship doesn’t come in, swim out to meet it!” – Jonathan Winters
                </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;