import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

	position: fixed;
	bottom: 0;
	left: 0;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 7vh;
	display: flex;
	background-color: var(--main-color);
	
	font-size: 12px;
	color: var(--secondary-color);
`;

function Footer(props) {
	return <Container>@Kevin Niemeyer 2020</Container>;
}

export default Footer;
