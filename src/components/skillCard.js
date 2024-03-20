/* Bootstrap */
import Card from 'react-bootstrap/Card';

export const SkillCard = ({image, title, text}) =>{
    return (
        <Card style={{ width: '18rem', backgroundColor: '#000' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}