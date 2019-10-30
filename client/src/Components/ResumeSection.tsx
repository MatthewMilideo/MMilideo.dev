import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledH1 = styled.h1`
	width: 100%;
	color: black;
	padding-bottom: 0px;
	margin-bottom: 0px;
	margin-top: 0px;
	margin-left: 0.5rem;
	line-height: 1;
`;

const StyledHr = styled.hr`
	margin-top: 0px;
	width: 100%;
`;

const StyledCard = styled(Card)`
	@media screen and (max-width: 450px) {
		width: 85%;
	}

	width: 85%;
	margin: auto;

	background-color: #f3f3ef;
	border-radius: 20px;

	box-shadow: 3px 7px 20px 0px #111111;
`;

const Anchor = styled.div`
	width: 100%;
	height: 0;
	position: absolute;
	top: -100px;
`;

const StyledCardBody = styled(Card.Body)`
	margin-top: 0;
`;

interface PropTypes {
	sectionTitle: string;
	location: string;
	children: JSX.Element;
}

const ResumeSection: React.FunctionComponent<PropTypes> = props => {
	return (
		<StyledCard className=" mt-3 mb-3 p-3">
			<Anchor id={props.location} />
			<StyledH1>{props.sectionTitle}</StyledH1>

			<StyledCardBody>{props.children}</StyledCardBody>
		</StyledCard>
	);
};

export default ResumeSection;
