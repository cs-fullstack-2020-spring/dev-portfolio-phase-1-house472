import React, {Component} from 'react'
import {Document, Page} from 'react-pdf'
class ProfessionalBackground extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numPages: null,
            pageNumber: 1
         }
    }
    onDocumentLoad = ({numPages}) => {
        this.setState({numPages})
    }
    render() { 
        const {pageNumber, numPages} = this.state
        return ( 
            <div>
                <h1>Professional Skills Resume Page</h1>
                <Document>
                    
                </Document>
            </div>
        );
    }
}
 
export default ProfessionalBackground;