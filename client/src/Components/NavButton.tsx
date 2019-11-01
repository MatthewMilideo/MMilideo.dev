import React from "react";
import Styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Button from "react-bootstrap/Button";

const StyledButton = Styled(Button)`


color: black; 
width: 100%; 

background-color: #F3F3EF
box-shadow: 0px 0px 1px 0px #979797
border-color: #b25c45
border-width: 0px 0px 3px 0px;  

padding: .5rem; 
margin-bottom: 1rem; 

:hover{
	color: black; 
	background-color: #D6D6D6;
	box-shadow: 0px 2px 10px 1px #979797;
	border-color: rgba(41, 43, 44, .5);
}
:active{
	color: black; !important
	background-color: #D6D6D6; !important;
	box-shadow: 0px 2px 10px 1px #979797; !important;
	border-color: rgba(41, 43, 44, .5); !important;
}

:focus{
	color: black; !important
	background-color: #D6D6D6 !important;
	box-shadow: 0px 2px 10px 1px #979797; !important;
	border-color: rgba(41, 43, 44, .5); !important;
}

@media screen and ( max-height: 699px ) { 
	padding: .25rem; 
	margin-bottom: .5rem; 
}


`;

export interface NavButtonInt {
	location: string;
	text: string;
}

export const NavButton: React.FunctionComponent<NavButtonInt> = props => {
	let location = useLocation();
	let active = location.pathname === props.location ? true : false;

	return (
		<NavLink to={`/${props.location}`}>
			<StyledButton className="">{props.text}</StyledButton>
		</NavLink>
	);
};

