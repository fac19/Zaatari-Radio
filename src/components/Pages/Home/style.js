import React from 'react';
import styled from 'styled-components';
import * as vars from '../../../styles/variables';

// LanderSection Syles
export const LanderHeader = styled.header`
	margin-top: 73px;
	background: ${vars.sand};
	display: flex;
	flex-direction: column;
`;

export const LanderTitle = styled.h1`
	font-family: ${vars.headerFont};
	font-style: normal;
	font-weight: bold;
	font-size: 45px;
	color: ${vars.night};
	text-transform: uppercase;
`;

export const LanderText = styled.p`
	font-family: ${vars.standardFont};
	font-style: italic;
	font-weight: normal;
	font-size: 14px;
	color: ${vars.night};
`;

export const LanderLink = styled.a`
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	text-transform: uppercase;
	color: ${vars.night};
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

// FaqSection styles
export const FaqPair = styled.article`
	max-width: 500px;
	margin: 0 auto 2em auto;
`;

export const FaqSection = styled.section`
	background-color: ${vars.offWhite};
	font-family: ${vars.standardFont};
`;

export const FaqTitle = styled.h2`
	max-width: 500px;
	margin: 0 auto;
`;

// Shared Styles
export const Section = styled.section`
	margin: 30px 45px 0 45px;
`;

export const Title = styled.h2`
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: ${vars.night};
`;

export const Text = styled.p`
	font-family: ${vars.standardFont};
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	text-align: justify;
	color: ${vars.night};
`;

export const BoldText = styled(Text)`
	font-weight: bold;
`;

export const ImageStrip = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
`;
