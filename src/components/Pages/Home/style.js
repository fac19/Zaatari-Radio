import React from 'react';
import styled from 'styled-components';
import * as vars from '../../../assets/styles/variables'

// Home styles
export const HomeContainer = styled.div`
	padding: 0 ${vars.homeHorizontalPadding};
`;

export const TextSpan = styled.span`
	font-weight: bold;
	cursor: pointer;

	&:hover {
		color: ${vars.sand};
	}
`;

// LanderSection Syles
export const LanderHeader = styled.header`
	background: ${vars.sand};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 6rem ${vars.homeHorizontalPadding} 1.5rem ${vars.homeHorizontalPadding};
	height: 95vh;
`;

export const LanderTitle = styled.h1`
	font-family: ${vars.headerFont};
	font-style: normal;
	font-weight: bold;
	font-size: ${vars.DinHeaderBig};
	color: ${vars.night};
	text-transform: uppercase;

	animation: fadeIn 3s ease 0.5s both;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const LanderText = styled.p`
	font-family: ${vars.standardFont};
	font-style: italic;
	font-size: ${vars.medP};
	color: ${vars.night};

	animation: fadeIn 3s ease 2s both;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const SectionLink = styled.a`
	font-family: ${vars.standardFont};
	font-size: 3rem;
	color: ${vars.night};
	text-align: center;

	&:hover {
		color: ${vars.sand};
		text-decoration: none;
	}

	&::after {
		content: '\\290B';
	}
`;

export const LanderLink = styled(SectionLink)`
	font-size: 5rem;
	&:hover {
		color: ${vars.offWhite};
	}

	&::after {
		content: '\\27F1';
	}

	animation: bouncing 0.7s 3s infinite alternate;
	@keyframes bouncing {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-25px);
		}
	}
`;

export const BackToTopLink = styled(SectionLink)`
	&::after {
		content: '\\290A';
	}
`;

export const Icon = () => (
	<svg width="21" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.86364 16.8876L10.0758 17.0997L10.2879 16.8876L17.7125 9.46299C17.8736 9.30192 18.0943
       9.21183 18.3273 9.21429C18.5607 9.21676 18.7872 9.31198 18.9558
      9.48062C19.1244 9.64926 19.2197 9.87574 19.2221 10.1091C19.2246 10.3421 19.1345 10.5628 18.9734
      10.7239L10.7239 18.9735C10.5628 19.1345 10.3421 19.2246 10.109
      19.2222C9.87569 19.2197 9.64921 19.1245 9.48057 18.9558L1.05472 10.53C0.886081 10.3614 0.790862
      10.1349 0.788396 9.90153C0.785932 9.66849 0.876023 9.44778
      1.03709 9.28671C1.19816 9.12564 1.41886 9.03555 1.65191 9.03802C1.88525 9.04048 2.11173 9.1357 2.28037 9.30434L9.86364 16.8876Z"
			fill="#322F2F"
			stroke="#FFCB74"
			strokeWidth="0.6"
		/>
	</svg>
);

// Shared Styles
export const SectionLanderTitle = styled.section`
	padding-top: 2rem;
	margin: 0 15%;

	@media only screen and (max-width: 600px) {
		margin: 0 0.3rem;
	}
`;

export const SectionLanderLink = styled(SectionLanderTitle)`
	display: flex;
	justify-content: center;
`;

export const Section = styled(SectionLanderTitle)`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h2`
	font-family: ${vars.standardFont};
	font-size: ${vars.subtitle};
	color: ${vars.night};
`;

export const Text = styled.p`
	font-family: ${vars.standardFont};
	font-size: ${vars.medP}
	display: flex;
	align-items: center;
	text-align: justify;
	color: ${vars.night};
`;

export const FaqArticle = styled.article`
	margin-bottom: 1rem;
`;

export const FaqTextHover = styled.p`
	margin: 0;
	&:hover {
		color: ${vars.olive};
		font-weight: 800;
	}
`;
