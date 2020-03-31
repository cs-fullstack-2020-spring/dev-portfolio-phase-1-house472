import React, { Component } from 'react'

class ProfessionalBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1
        }
    }

    render() {

        return (
            <div id="resume">
                <p id="resumeHeader">PEOPLE LEADER / AUDIT SPECIALIST
RELATIONSHIP MANAGER │ COACHING AND TRAINING │ OPERATIONAL EXCELLENCE</p>
                <ul id="bullets">
                    <li>
                        Compliance/Audit Expertise - Proactively researched
                        and utilized new technologies to strengthen the overall
                        control environment by improving things such as: training
                        programs, document handling, operational processes and
                        efficiency resulting in better operational performance,
                        and communication.
</li>

                    <li>
                        Strategic Operational Planning - Performed process
                        analysis while at Xerox allowing for increased
                        productivity resulting in operational budget overages
                        reduction from 60k over budget to 10k under budget
                        over an 8-month period in my department.
</li>

                    <li>
                        Relationship Management Established internal customer
                        supplier agreements for Xerox addressing areas of
                        conflict resolution, motivation, organization, and
                        troubleshooting, resulting in improved management communication creating improved flow of work
                        between shifts and allowing for 40% increase in productivity throughout the site.
 </li>
                </ul>
                <div id="sidebar">
                    <h2>LEADERSHIP & PROFESSIONAL EXPERTISE</h2>
                    <ul >

                        <li>Collaboration</li>
                        <li>Coordination/Delegation</li>
                        <li>Critical Thinking</li>
                        <li> Short/Long-Term Planning</li>
                        <li>Multitasking</li>
                        <li>Relationship Management</li>
                    </ul>
                </div>





            </div>
        );
    }
}

export default ProfessionalBackground;