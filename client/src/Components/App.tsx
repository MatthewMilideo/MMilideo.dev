import "bootstrap/dist/css/bootstrap.min.css";
import "open-iconic/font/css/open-iconic-bootstrap.css";

import "../App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useWindowSize from "../Hooks/windowSize";
import ResumeSection from "./ResumeSection";
import MainNav from "./MainNav";
import Container from "react-bootstrap/Container";
import Styled from "styled-components";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StyledHr = Styled.hr`
	padding: 0; 
	margin: auto; 
	
	width: 100%;


	border-style: solid; 
	border-color: #979797;

`;

const Main = Styled.div`
	font-family: 'Lato', sans-serif;
	
	display: flex;
	flex-direction: column; 
	height: 100%; 
	width: 100%; 
	background-color: #99b5a7;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23f3f3ef' stroke-width='1.5' stroke-opacity='0.33'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");

	#CMU{
		margin-top: 7.19px; 
	}

	`;

const EmptyElem = Styled.div`
	min-width: 250px; 
	height: 100%; 
`;

const StyledUl2 = Styled.ul`
	width: 100%; 
	display: flex; 
	flex-direction: row; 
	overflow-wrap: normal;
`;

const ProjectUL = Styled.ul`
list-style-type: disc;
margin-left: 1.25rem; 
:nth-child(1n) li {
	margin-top: 1rem; 
}
li{
	margin-bottom: .5rem; 
}
`;

const SkillDiv = Styled.div`
width: auto; 
height: 100%; 
display: flex;
flex-direction: column;
align-items: center;
text-align: center; 
height: 100%: 

`;

const SkillImage = Styled(Image)`
width: 100px; 
height: auto; 
margin-bottom: .5rem; 
`;

const SkillSpan = Styled.span` 
	margin-top: auto; 
	min-height: 75px; 
`;

const EdSpan = Styled.span` 
	margin-bottom: auto; 
	min-height: 75px; 

	hr{
		margin-top: 3px; 
		margin-bottom: 3px; 
	}
`;

const LineList = Styled.ul`
	display: flex;
	flex-wrap: wrap; 
	justify-content: center; 

	list-style: none;
	padding: 0px;

	li {
		align-items: center; 
		margin-left: 2px; 
		display: inline;
	  }
`;

const MediaImage = Styled(Image)`
width: inherit; 
height: auto; 
margin: auto; 
`;

const ProjectDiv = Styled.div`
	position: relative; 
	width: 100%; 
	display: flex;
	flex-direction: column; 

`;

const locations = [
	{ text: "About Me", location: "#About" },
	{ text: "Skills", location: "#Skills" },
	{ text: "Experience", location: "#Experience" },
	{ text: "Projects", location: "#Projects" },
	{ text: "Resume", location: "#Resume" }
];

const skillImages = [
	{
		id: 1,
		src: "../journal/media/react.png",
		title: "React Logo",
		desc: "React - 2 Years"
	},
	{
		id: 2,
		src: "../journal/media/redux.png",
		title: "Redux Logo",
		desc: "Redux - 2 Years"
	},
	{
		id: 3,
		src: "../journal/media/html.png",
		title: "HTML Logo",
		desc: "HTML - 3 Years"
	},
	{ id: 4, src: "../journal/media/css.png", title: "CSS3 Logo", desc: "CSS - 3 Years" },
	{
		id: 5,
		src: "../journal/media/bootstrap.svg",
		title: "Bootstrap Logo",
		desc: "Bootstrap - 1 Year"
	},

	{
		id: 8,
		src: "../journal/media/js.jpg",
		title: "Javascript Logo",
		desc: "Javascript ES6 - 2.5 Years"
	},
	{
		id: 9,
		src: "../journal/media/TS.png",
		title: "TS Logo",
		desc: "Typescript - Novice"
	},
	{
		id: 6,
		src: "../journal/media/node.png",
		title: "Node Logo",
		desc: "Node / Express - 1 Year"
	},
	{
		id: 7,
		src: "../journal/media/PGSQL.svg",
		title: "PostgreSQL Logo",
		desc: "Postgre / SQL - 1 Year"
	},
	{
		id: 10,
		src: "../journal/media/jest.png",
		title: "Jest Logo",
		desc: "Jest - Novice"
	},
	{
		id: 11,
		src: "../journal/media/sass.svg",
		title: "SASS Logo",
		desc: "SASS - Novice"
	}
];

const educationImages = [
	{
		id: "ed-2",
		src: "../journal/media/Stevens.png",
		title: "Stevens Institute of Technology",
		desc: " Bachelors of Science in CS && Bachelors of Art in Literature"
	},
	{
		id: "ed-1",
		src: "../journal/media/CMU.png",
		title: "Carnegie Mellon University",
		desc: "Masters of Art in Cultural Studies"
	}
];

const skills = [
	"Git",
	"Postman",
	"Jenkins",
	"Docker",
	"Nginx",
	"DigitalOcean",
	"Heroku",
	"Photoshop CS6"
];

function App() {
	let mobile = false;
	let size = useWindowSize();

	size.width < 450 ? (mobile = true) : (mobile = false);
	console.log(size, mobile);

	return (
		<Router>
			{mobile ? null : (
				<React.Fragment>
					<MainNav linkText={locations} mobile={mobile} />
					<EmptyElem />
				</React.Fragment>
			)}

			<Main>
				{mobile ? <MainNav linkText={locations} mobile={mobile} /> : null}
				<Switch>
					<Route path="/:id" children={<div />} />
				</Switch>

				<ResumeSection sectionTitle="About Me" location="About">
					<div>
						<p>
							My name is Matt and I’m a Full Stack Web Developer with dual
							passions for solving complex technical problems and thinking
							through how people interact with media. As an undergraduate, I
							studied Computer Science and Literature with the intent to
							eventually get a doctorate in Media Studies. I wanted to use the
							left side of my brain to process large datasets, and the right
							side to analyze that data. After earning my Masters in Cultural
							Studies however, I began to realize that life in the academy was
							not for me. I determined that I wanted to build products that
							people use, not analyze their affects.
						</p>
						<p>
							To prepare myself for the move back into industry, I dug back into
							my college notes on data structures and algorithms, and took
							online courses in React/Redux, Node.js, SQL, and other Full Stack
							topics. I’ve paired these studies with practical experience by
							working on personal projects and taking on freelance work.
						</p>

						<p>
							My showcase project is the Media Journaling Site linked and
							described below. It showcases my ability to build and interact
							with APIs, to think through how data flows through the front end,
							to build code that is reusable, and to follow through on a large
							project.
						</p>
						<p>
							Moving forward, I am seeking to join a team of developers because
							I want to contribute my skills to an interesting project, and I
							want to grow as a developer through collaboration. In the future,
							I am interested in moving towards a role in DevSecOps, I am
							fascinated with the intersection of secure coding, and the nitty
							gritty of deploying and maintaining websites.
						</p>
					</div>
				</ResumeSection>

				<ResumeSection sectionTitle="Skills" location="Skills">
					<div>
						<Container>
							<Row>
								{skillImages.map(elem => {
									return (
										<Col xs={6} sm={6} md={6} lg={3} className=" relative mb-3">
											<SkillDiv>
												<SkillImage src={elem.src} alt={elem.title} />

												<SkillSpan> {elem.desc} </SkillSpan>
											</SkillDiv>
										</Col>
									);
								})}
							</Row>
						</Container>

						<h4>Other Skills</h4>
						<StyledHr />
						<LineList className="mt-1">
							{skills.map((skill, index) => {
								return index !== skills.length - 1 ? (
									<li> {` ${skill} |`} </li>
								) : (
									<li> {skill} </li>
								);
							})}
						</LineList>
					</div>
				</ResumeSection>
				<ResumeSection sectionTitle="Education" location="Education">
					<Container>
						<Row>
							<Col xs={6} sm={6} md={6} lg={6} className=" relative mb-3">
								<SkillDiv>
									<SkillImage
										src="../journal/media/Stevens.png"
										alt="Stevens Institute of Technology"
									/>
									<EdSpan>
										{" "}
										Bachelors of Arts in English <hr /> Bachelors of Science in
										CS
									</EdSpan>
								</SkillDiv>
							</Col>
							<Col xs={6} sm={6} md={6} lg={6} className=" relative mb-3">
								<SkillDiv>
									<SkillImage
										id="CMU"
										src="../journal/media/CMU.png"
										alt="Carnegie Mellon University"
									/>
									<EdSpan> Masters of Arts in Cultural Studies </EdSpan>
								</SkillDiv>
							</Col>
						</Row>
					</Container>
				</ResumeSection>
				<ResumeSection
					sectionTitle="Technical Experience"
					location="Experience"
				>
					<React.Fragment>
						<h4>Freelance Work</h4>
						<StyledHr />
						<ProjectUL>
							<li>
								Allows user to seamlessly browse media from both The Movie
								Database (TMDB), and Google Books.
							</li>
							<li>
								Uses a lazy loader to increase performance on pages with a large
								number of images.
							</li>
							<li>
								Implements animations for the image load to provide a pleasant
								user experince.
							</li>
							<li>Implements an infinte scroll.</li>
							<li>
								Parses incoming data and gracefully decays when the API does not
								have a lot of data for the item in question.
							</li>
							<li>
								Uses protected routes to direct the user towards sign in /
								account creation.
							</li>
						</ProjectUL>
					</React.Fragment>
				</ResumeSection>

				<ResumeSection sectionTitle="Media Journal Project" location="Projects">
					<ProjectDiv>
						Media Journaling Website - Personal Project: ​hosted at mmilideo.dev
						<MediaImage src="../journal/media/MediaJournal.png" />
						<h4>Frontend</h4>
						<StyledHr />
						<ProjectUL>
							<li>
								Allows user to seamlessly browse media from The Movie Database
								(TMDB), and Google Books.
							</li>
							<li>
								Uses a lazy loader to increase performance on pages with a large
								number of images.
							</li>
							<li>
								Implements animations for the image load to provide a pleasant
								user experince.
							</li>
							<li>Implements an infinte scroll.</li>
							<li>
								Parses incoming data and gracefully decays when the API does not
								have a lot of data for the item in question.
							</li>
							<li>
								Uses protected routes to direct the user towards sign in /
								account creation.
							</li>
						</ProjectUL>
						<h4>Backend</h4>
						<StyledHr />
						<ProjectUL>
							<li>
								All external and local API calls are routed through the Node.js
								/ Express backend.
							</li>
							<li>
								Designed the API using MVC architecture. Focused on reusable
								services that increased code comprehensibility and eased unit
								testing
							</li>
							<li> User System is managed by Firebase Auth. </li>
							<li>Backend built using test driven development.</li>
							<li>Deployed application to DigitalOcean cloud using Jenkins.</li>
						</ProjectUL>
					</ProjectDiv>
				</ResumeSection>
			</Main>
		</Router>
	);
}

export default App;
