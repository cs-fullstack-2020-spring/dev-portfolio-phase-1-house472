import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
class Projects extends Component {
    state = {}


    render() {

        return (
            <div className = "projectPage">
                <div className= "marvinCard">
                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title className="cardText" >Marvin Gaye Fanpage!</Card.Title>
                            <Card.Img variant="top" src="images/Marvin.jpg" />

                            <Card.Text className="cardText" >
                                A fanpage blog that lists (arguably) his top five albums. I have my opinion. Try and change my mind!
    </Card.Text>
                            <Card.Link href="https://github.com/cs-fullstack-2020-spring/200317-react-forms-events-practice-house472.git" target="_blank" >Go There!</Card.Link>

                        </Card.Body>
                    </Card>

                </div>


<div className= "starWarsCard">
<Card style={{ width: '18rem' }}>

<Card.Body>
    <Card.Title className="cardText" >Star Wars Blog!</Card.Title>
    <Card.Img variant="top" src="images/StarWars.png" />

    <Card.Text className="cardText" >
        A fanpage listing of the characters of the Star Wars Universe! You can even create and add your own unique characters!
</Card.Text>
    <Card.Link href="https://github.com/cs-fullstack-2020-spring/200324-react-routes-cw-house472.git" target="_blank"   >Go There!</Card.Link>

</Card.Body>
</Card>
</div>










            </div>
        );
    }
}

export default Projects;