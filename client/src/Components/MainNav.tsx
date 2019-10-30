import React, { useState } from "react";
import Styled from "styled-components";
import Image from "react-bootstrap/Image";
import { NavButton, NavButtonInt } from "./NavButton";
import ImageLinks from "./ImageLinks";

const StyledNav = Styled.nav`
font-family: 'Roboto', sans-serif;
position: fixed;
top: 0;  

width: 250px; 
min-height: 100%; 

display: flex; 
flex-direction: column; 
align-items: center; 

padding-left: 15px;
padding-right: 15px; 

color: black;
text-align: center; 

background-color: #F3F3EF;

box-shadow: 1px 1px 6px #111111

h3{
	margin-top: 8px; 
	margin-bottom: 0px; 
}

#desktopUL{
	width: 100%; 
	display: flex; 
	flex-direction: column; 
	margin: auto; 
}
`;

const StyledImage = Styled(Image)`
width: 65%; 
box-shadow: 1px 1px 10px 0px #111111
`;

const StyledHr = Styled.hr`
	padding: 0; 
	margin: auto; 
	
	width: 90%;

    border-width: 1.5px; 
	border-style: solid; 
	border-color: #b25c45;
`;

const TheMobileNav = Styled.nav`
    position: sticky; 
    position: -webkit-sticky; /* Safari */
	top: 0px;
	
    width: 100%; 
    height: 75px; 

	background-color: #F3F3EF;

    z-index: 200;

    text-align: center; 

    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 

	
	box-shadow: 1px 1px 6px #111111

    h4{
        margin-bottom: 3px; 
    }

    h5{
        margin-top: 3px; 
    }

    span{
        font-size: 25px; 
        margin: auto; 
    }

    img {
        width: 15%; 
        height: auto; 
    }

    #name{
        margin: auto; 
        width: 70%
	}
	
	#mobileULDiv{
		position: absolute; 
		top: 75px; 
		left: 0; 
		width: 100%; 
		height: 100vh; 
		background-color: rgba(151, 151, 151, .8);
		z-index: 205; 
	}

    #mobileUL{
		display: flex; 
		flex-direction: column; 
		align-items: center; 
        position: absolute; 
        top: 25px;
        left: 0px; 
		width: 100%; 
		z-index: 206;
		opacity: 1;  
		
		li{

			width: 75%; 
		}
    }
`;

interface NavProps {
	linkText: NavButtonInt[];
}

const DesktopNav: React.FunctionComponent<NavProps> = props => {
	return (
		<StyledNav>
			<StyledImage
				className="mt-4 mb-4 "
				roundedCircle
				src="../media/matthew.jpg"
			/>

			<div className="mb-4">
				<h3> Matthew Milideo </h3>
				<StyledHr className="text-primary mt-1 mb-1" />
				<h4> Full Stack Web Developer </h4>
			</div>

			<ul id="desktopUL">
				{props.linkText.map(button => {
					return (
						<li key={button.text}>
							<NavButton location={button.location} text={button.text} />
						</li>
					);
				})}
			</ul>
			<ImageLinks />
		</StyledNav>
	);
};

const MobileNav: React.FunctionComponent<NavProps> = props => {
	const [clicked, setClicked] = useState(false);
	return (
		<React.Fragment>
			<TheMobileNav
				onClick={e => (clicked === true ? setClicked(false) : null)}
			>
				<span
					className="oi oi-menu"
					onClick={() => {
						setClicked(!clicked);
					}}
				></span>
				<div id="name">
					<h4> Matthew Milideo </h4>
					<StyledHr />
					<h5> Full Stack Web Developer </h5>
				</div>
				{clicked ? (
					<div id="mobileULDiv">
						<ul id="mobileUL">
							{props.linkText.map(button => {
								console.log(button);
								return (
									<li key={button.text}>
										<NavButton location={button.location} text={button.text} />
									</li>
								);
							})}
						</ul>
					</div>
				) : null}
			</TheMobileNav>
		</React.Fragment>
	);
};

interface PropTypes {
	mobile: boolean;
	linkText: NavButtonInt[];
}

const MainNav: React.FunctionComponent<PropTypes> = props => {
	return props.mobile ? (
		<MobileNav linkText={props.linkText} />
	) : (
		<DesktopNav linkText={props.linkText} />
	);
};

export default MainNav;
