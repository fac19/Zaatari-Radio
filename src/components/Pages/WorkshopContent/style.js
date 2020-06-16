import styled from 'styled-components';
import * as vars from '../../../styles/variables';

export const MainContainer = styled.section`
	display: flex;
	flex-direction: column;
	max-width: ${vars.mainContainerWidth};
	margin: 0 auto;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
