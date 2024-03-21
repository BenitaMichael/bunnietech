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
          items: 1
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
                        <h2 className='fs-2 mb-4'>My Skills</h2>
                        <p className='h4 my-4 py-4'>Through self-learning and online courses, I've 
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
                                text= "Proficient in a range of web development technologies such as HTML, CSS, EJS, JavaScript, and PHP. Experienced in crafting responsive and dynamic websites that satisfies client's specifications and industry norms. Additionally, I utilize MERN stack (MongoDB, Express.js, React.js, Node.js) to develop and deploy full-stack web applications, showcasing expertise in both front-end and back-end development."
                            />
                            <SkillCard
                                image={versionControl}
                                title= 'Version Control'
                                text= 'Proficient in using Git for version control, along with platforms like GitHub for collaborative development and project management. Employ best practices in version control, such as branching, merging, and resolving conflicts, to ensure smooth workflow and codebase management.'
                            />
                            <SkillCard
                                image={databaseManagement}
                                title= 'Database Management'
                                text= 'Experienced in managing both SQL and NoSQL databases, proficiently utilizing MongoDB for document-based storage and traditional relational databases for structured data. Skilled in database design, querying, indexing, and optimization to ensure streamlined data management and retrieval. Successfully integrated databases within MERN stack applications, facilitating smooth interaction between front-end interfaces and back-end data storage.'
                            />
                            <SkillCard
                                image={softSkills}
                                title= 'Soft Skills'
                                text= 'Some soft skills I have acquired along the way include strong communication skills demonstrated through effective collaboration with team members, clients, and stakeholders. Proven ability to analyze complex problems, identify viable solutions, and implement effective strategies. Demonstrates adaptability to evolving project requirements, technological advancements, and industry trends. Exhibits leadership qualities by mentoring junior developers, providing guidance, and taking ownership of project tasks.'
                            />
                            </Carousel>

                            <div className='skills-language d-flex mt-4 pt-4'>
                              <img src={html} alt="HTML" className='pr-2'/>
                              <img src={css} alt="CSS" className='px-2'/>
                              <img src={bootstrap} alt="bootstrap" className='px-2'/>
                              <img src={JS} alt="javascript" className='px-2'/>
                              <img src={mongoDB} alt="mongoDB" className='px-2'/>
                              <img src={node} alt="nodeJS" className='px-2'/>
                              <img src={react} alt="react" className='px-2'/>
                              <img src={mySQL} alt="mySQL" className='px-2'/>
                              <img src={python} alt="python" className='px-2'/>
                              <img src={php} alt="php" className='px-2'/>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}