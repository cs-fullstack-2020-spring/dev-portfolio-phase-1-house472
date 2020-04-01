import React, { Component } from 'react'

class ProfessionalBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        //TO REDO REFORMAT RESUME AND DIVIDE INTO RELEVANT/NON RELEVANT EXPERIENCE

        return (
            <div id="resume">

               
                <div id= "morehouse">
                <header>Education</header> <br/>
                     <img src="https://lh3.googleusercontent.com/proxy/HPHlBzINi9Dpw5LOc5cogbD3nKwXOSTNXUxf1ZgojVqIOjtlKfezm3IuidsyedPS1z88eZagN-29UEBRcBPwhcNcD5td00edOOCpZOHR7A" height ="75" width= '90' alt="" />
<br/>
<p>Bachelor of Arts, Accounting, Morehouse College, Atlanta. GA.</p>
                <img src="https://www.logolynx.com/images/logolynx/s_c7/c74105e51177e4fa2c1465f63390e575.png" height ="75" width= '90' alt="" />
<br/>
<p>M.B.A, Strayer University, Memphis, Tn.</p>
<img src="http://hamidamandani.com/images/CodeSchool.png" height ="75" width= '90' alt=""/>
                 <p>Code School, Full-Stack Web Development Bootcamp</p>
                 </div>




                <div id= "resumeFile">
                    <embed src="Charles Gordon Resume.pdf" width="500" height="500"
                        type="application/pdf"></embed>
                </div>

<div>
    
</div>





            </div>



        );
    }
}

export default ProfessionalBackground;