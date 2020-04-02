import React, { Component } from 'react'

class ProfessionalBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        //TO REDO REFORMAT RESUME AND DIVIDE INTO RELEVANT/NON RELEVANT EXPERIENCE
        //040120 TODO LOOK FOR TRANSPARENT BACKGROUNDS FOR MY LOGO

        //TO GET IMAGES FROM PUBLIC FOLDER BUILD PATH FROM PUBLIC BUT DO NOT INCLUDE PUBLIC AS PART OF THE FILE PATH. EX---IF FILE IS IN PUBLIC NAMED RAY.IMG, FILE PATH IS SRC="./RAY.IMG"
        return (
            <div id="resume">


                <div id="morehouse">
                    <table>
                        <tbody>
                            <tr>
                                <td><img src= "images/Morehouse2.png"  alt="" />
                                </td>
                                <td>
                                    <img src="images/Strayer.png" alt="" />

                                </td>
                                <td>
                                    <img src="images/CodeCrew.png" height ="150" width = "150"  alt="" />
                                </td>

                            </tr>
                            <tr>
                                <td>
                                <img src="images/React.png" alt=""/>

                                </td>
                                <td>
                                <img src="images/HTML.png" height="200" alt=""/>


                                </td>
                                <td>
                                <img src="images/CSS.png" width alt=""/>
                                </td>

                            </tr>
                            <tr>
                                <td> <img src= "images/Javascript.png" width ="200" alt=""/></td>

                                <td>

                                <img src="images/Github.png"  alt=""/> 
                                </td>
                            </tr>

                        </tbody>
                    </table>



                </div>




                <div id="resumeFile">
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