/* React */
import { TypeAnimation } from 'react-type-animation';

import image from '../assets/images/avataaars.svg'
/* Bootstrap */
import {Container, Row, Col} from 'react-bootstrap';


export const Profile = () => {
    return (
        <Container className="profile-section">
            <Row className="align-items-center">
                <Col xs={12} md={6} className="profile-text">
                    <p className='pt-4'>Hello there...</p>
                    <TypeAnimation
                        sequence={[
                            'My name is Benita Michael',
                            1000,
                            'And I am Bunnie.tech...',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2.5rem', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <h4>
                        I am a web developer with over 4 years of experience in frontend development and 2 years of experience in the MERN stack.
                        <br />
                        Reach out if you would like to learn more...
                    </h4>
                    <button className='profile-button mt-'>Contact</button>
                </Col>
                <Col xs={12} md={6}>
                    <div className='profile-container'>
                        <img src={image} alt='Profile' className='profile-img' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}