import styled from 'styled-components';
import vars from '../../../styles';

const Section = styled.section`
	margin: 30px 45px 0 45px;
`;

const Title = styled.h2`
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: ${vars.night};
`;

const Text = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	text-align: justify;
	color: ${vars.night};
`;

const BoldText = styled(Text)`
	font-weight: bold;
`;

const ImageStrip = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
`;

export { Section, Title, Text, BoldText, ImageStrip };
