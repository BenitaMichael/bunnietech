/* React */
import { TypeAnimation } from 'react-type-animation';


/* Bootstrap */
import {Container, Row, Col} from 'react-bootstrap';


export const Profile = () =>{
    return(
        <Container>
            <Row>
                <Col className="profile-text">
                    <p>Hello there...</p>
                    <h1>I am Benita Michael (Bunnie)</h1>
                    <h3>I am a fullstack webdeveloper</h3>

                    
                </Col>
                <Col className="profile img">
                    <img src='.../assets/images/avataaars.svg' />
                </Col>
            </Row>
    </Container>
    )
}