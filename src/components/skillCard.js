/* Bootstrap */
import Card from 'react-bootstrap/Card';

export const SkillCard = ({ image, title, text }) => {
    return (
        <Card
            className='mb-4 skill-card'
            style={{
                width: '100%',
                maxWidth: '30rem',
                height: '40rem',
                maxHeight: '84%',// working on this
                backgroundColor: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column', // Ensures elements stack vertically
                justifyContent: 'center',
                alignItems: 'center' // Centers elements horizontally
            }}
        >
            <Card.Img variant="top" className="skill-card-img" src={image} style={{ width: '80%', maxWidth: '200px', maxHeight: '200px' }} />
            <Card.Body>
                <Card.Title className='skill-card-title' style={{ fontSize: '2rem', fontWeight:'700', marginBottom: '1rem' }}>{title}</Card.Title>
                <Card.Text className='skill-card-text' style={{ fontSize: '1.3rem' }}>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}
