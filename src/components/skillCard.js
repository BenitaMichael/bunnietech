/* Bootstrap */
import Card from 'react-bootstrap/Card';

export const SkillCard = ({image, title, text}) =>{
    return (
        <Card 
        className='mb-4'
        style={{ width: '25rem', 
        height: '46rem',
        backgroundColor: '#fff', 
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
        }}>
          <Card.Img variant="top" className="skill-card-img" src={image} />
          <Card.Body>
            <Card.Title className='skill-card-title'>{title}</Card.Title>
            <Card.Text className='skill-card-text'>
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}