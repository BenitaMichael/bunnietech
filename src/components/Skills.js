/* React */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { SkillCard } from './skillCard';

/* Bootstrap */
import {Container, Row, Col} from 'react-bootstrap';

/* Icons */
import webDevelopment from '../assets/images/icons/icons8-code-48.png'
import versionControl from '../assets/images/icons/icons8-git-50.png'
import softSkills from '../assets/images/icons/icons8-soft-skills-64.png'

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
        <section className="skills-section">
            <Container>
                <Row>
                    <Col>
                        <h1>My Skills</h1>
                        <h2>Through self-learning and online courses, I've mastered a range of skills. Here are some of the skills I excel in</h2>
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
                                image={softSkills}
                                title= 'Soft Skills'
                                text= 'lorem'
                            />
                            </Carousel>;
                    </Col>
                </Row>
            </Container>
        </section>
    )
}