import React, {Component} from 'react'
class SignUpform extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
              <h1>Contact Me!</h1>
              <h2></h2>

              <form action="">
                  <fieldset>
                      <legend>Complete the form below and I will respond as soon as possible.</legend>

                      <label htmlFor="">Email</label>
                      <input type="email" name= "email" onChange = {this.handleChange} value={this.state.userEmail}/>

                      <label htmlFor="">First Name</label>
                      <input type="text" name="name" id="name" onChange= {this.handleChange} value = {this.state.firstName}/>

                      <label htmlFor=""></label>
                    
                  </fieldset>
              </form>
            </div>
        );
    }
}
 
export default SignUpform;