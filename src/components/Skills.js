/* React */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { SkillCard } from './skillCard';

/* Bootstrap */
import {Container, Row, Col} from 'react-bootstrap';

/* Icons */
import webDevelopment from '../assets/images/icons/icons8-code-48.png'
import versionControl from '../assets/images/icons/icons8-git-50.png'
import databaseManagement from '../assets/images/icons/icons8-database-administrator-94.png'
import softSkills from '../assets/images/icons/icons8-soft-skills-64.png'
import html from '../assets/images/icons/icons8-html-48.png'
import css from '../assets/images/icons/icons8-css-48.png'
import bootstrap from '../assets/images/icons/icons8-bootstrap-48.png'
import JS from '../assets/images/icons/icons8-javascript-48.png'
import mongoDB from '../assets/images/icons/icons8-mongodb-48.png'
import node from '../assets/images/icons/icons8-node-js-48.png'
import react from '../assets/images/icons/icons8-react-40.png'
import mySQL from '../assets/images/icons/icons8-mysql-48.png'
import python from '../assets/images/icons/icons8-python-48.png'
import php from '../assets/images/icons/icons8-php-40.png'


export const Skills = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skills-section mb-4 text-center">
            <Container>
                <Row>
                    <Col>
                        <h2>My Skills</h2>
                        <p>Through self-learning and online courses, I've 
                        mastered a range of skills. Here are some of the 
                        skills I excel in:</p>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                            <SkillCard
                                image={webDevelopment}
                                title= 'Web Development'
                                text= 'lorem'
                            />
                            <SkillCard
                                image={versionControl}
                                title= 'Version Control'
                                text= 'lorem'
                            />
                            <SkillCard
                                image={databaseManagement}
                                title= 'Database Management'
                                text= 'lorem'
                            />
                            <SkillCard
                                image={softSkills}
                                title= 'Soft Skills'
                                text= 'lorem'
                            />
                            </Carousel>

                            <div className='skills-language'>
                              <img src={html} alt="HTML" />
                              <img src={css} alt="CSS" />
                              <img src={bootstrap} alt="bootstrap" />
                              <img src={JS} alt="javascript" />
                              <img src={mongoDB} alt="mongoDB" />
                              <img src={node} alt="nodeJS" />
                              <img src={react} alt="react" />
                              <img src={mySQL} alt="mySQL" />
                              <img src={python} alt="python" />
                              <img src={php} alt="php" />
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}