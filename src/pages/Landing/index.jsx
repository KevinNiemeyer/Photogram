//getting an issue where the first search you do works, but if you type in a different search term,
//it still displays the first search

import React, { useState, useEffect } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import styled, { css } from 'styled-components';
import UserLink from '../../components/UserLink';
import { LayoutContext } from '../../App';
import SelectView from '../../components/SelectView';
import GoToTop from '../../components/GoToTop';
import { Heading } from '../../components/ui/styles';

const Container = styled.div`
	margin: 0 auto;
	background-color: rgb(250, 250, 250);
	
`;

const Results = styled.div`
	width: 100%;
	${(props) =>
		props.isGrid &&
		css`
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		`} 
	${(props) =>
			props.isColumn &&
			css`
				display: flex;
				flex-direction: column;
				align-items: center;
			`};
`;

const PhotoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 50px 20px 20px 20px;
	align-items: center;
	cursor: pointer;

	${(props) => (
		props.landscape ? 
		css`
			width: 80vw;` : css`height: 80vh;`
	)} 
	${(props) =>
			props.isGrid &&
			css`
				display: flex;
				width: 250px;
				height: 100%;
				padding-left: 15px;
				padding-right: 15px;
			`} 
			${(props) => 
				props.isColumn &&
				css`
					display: flex;
					flex-direction: column;
					flex: 1;
					width: 50%;
			`};
`;

const HR = styled.hr`
	display: block;
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	margin-left: auto;
	margin-right: auto;
	border-style: inset;
	border-width: 1px;
	background-color: red;
`;
const Loader = styled.div``;

const Landing = () => {
	const [ photos, setPhotos ] = useState([]);
	const [ page, setPage ] = useState(1);

	const getData = async () => {
		await unsplash.photos.listPhotos(page, 25, 'latest').then(toJson).then((json) => {
			setPhotos([ ...photos, ...json ]);
			setPage(page + 1);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	if (photos.length === 0) {
		return null;
	}

	return (
		<LayoutContext.Consumer>
			{(value) => {
				return (
					<Container id='landing-container'>
						<GoToTop />
						<Heading id='landing-heading'>Latest Photos:</Heading>
						<SelectView value={value} />
						<HR />
						<InfiniteScroll
							id='infinite-scroll'
							pageStart={1}
							loadMore={getData}
							hasMore
							loader={<Loader key={0}>Loading ...</Loader>}>
							<Results isGrid={value.isGrid} isColumn={value.isColumn} id='landing-results'>
								{photos.map((photo) => {
									const { height, width } = photo;
									return (
										<PhotoContainer
											key={photo.id}
											isGrid={value.isGrid}
											isColumn={value.isColumn}
											landscape={width > height}
											id='result-container'>
											<UserLink
												isGrid={value.isGrid}
												isColumn={value.isColumn}
												key={photo.user.id}
												id='userlink'
												user={photo.user}
											/>
											<Photo
												landscape={width > height}
												isGrid={value.isGrid}
												isColumn={value.isColumn}
												id='photo'
												key={photo.id}
												photo={photo}
											/>
										</PhotoContainer>
									);
								})}
							</Results>
						</InfiniteScroll>
					</Container>
				);
			}}
		</LayoutContext.Consumer>
	);
};

export default Landing;
