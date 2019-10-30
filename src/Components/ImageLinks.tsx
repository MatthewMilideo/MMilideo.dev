import React from "react";
import Image from "react-bootstrap/Image";



import Styled from "styled-components";

const StyledDiv = Styled.div`
width: 100%; 
margin-top: auto; 

`;

const StyledUL = Styled.ul`

margin-top: auto; 

display: flex; 
flex-direction: row; 


li{
    flex-grow: 1; 
}

`;
const StyledImage = Styled(Image)`
width: auto; 
height: 30px; 
`;

const StyledHr = Styled.hr`
	padding: 0; 
	margin: 0; 
	
	width: 100%;


	border-style: solid; 
	border-color: rgba(41, 43, 44, .5);

`;

interface PropTypes {}

const ImageLinks: React.FunctionComponent<PropTypes> = props => {
	return (
		<StyledDiv>
			<StyledHr className="text-primary mt-2 mb-2" />
			<StyledUL>
				<li>
					<a href="https://github.com/MatthewMilideo/" target="_blank">
						<StyledImage src="../media/Github.png"/>
					</a>
				</li>

				<li>
					<StyledImage src="../media/email.svg" />
				</li>

				<li>
					<a href="https://twitter.com/mmilideodev" target="_blank">
						<StyledImage src="../media/Twitter.svg" />
					</a>
				</li>
			</StyledUL>
		</StyledDiv>
	);
};

export default ImageLinks;
