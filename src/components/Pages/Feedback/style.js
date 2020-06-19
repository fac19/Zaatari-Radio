import styled from 'styled-components';
import * as vars from '../../../assets/styles/variables';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 80vw;
	box-sizing: border-box;
	border-radius: 8px;
	margin: calc(50vh - 220px) auto;
	padding: 20px 30px;
	max-width: calc(100vw - 40px);
	font-family: ${vars.standardFont};

	margin-top: 8rem;
`;

export const RatingLegend = styled.legend`
	content: attr(type);
	display: block;
	margin: 28px 0 0;
	font-family: ${vars.standardFont};

	color: #5a5a5a;
`;

export const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: rows;
`;

export const FormInput = styled.input`
	width: 100%;
	box-sizing: border-box;
	background: none;
	outline: none;
	resize: none;
	border: 0;
	margin: 10px 0;
	transition: all 0.3s;
	border-bottom: 2px solid #bebed2;
	font-family: ${vars.standardFont};

	&:focus {
		border-bottom: 2px solid ${vars.ocean};
	}
`;

export const FormText = styled.textarea`
	width: 100%;
	transition: all 0.3s;
	border-bottom: 2px solid #bebed2;
	font-family: ${vars.standardFont};

	&:focus {
		border-bottom: 2px solid ${vars.ocean};
	}
`;

export const FormLabel = styled.label`
	content: attr(type);
	display: block;
	margin: 28px 0 0;
	font-family: ${vars.standardFont};

	color: #5a5a5a;
`;

// Same styles as Primary Button
export const FormButton = styled.input`
	background: ${vars.ocean};
	color: ${vars.offWhite};
	font-size: ${vars.smallButtonTextSize};
	padding: ${vars.smallButtonPadding};
	font-family: ${vars.standardFont};
	width: fit-content;
	border-style: none;
	cursor: pointer;
	margin: 1rem 0;
	transition: all 0.3s;
	text-align: center;

	&:hover {
		background: #78788c;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
		position: relative;
		top: -2px;
		left: -2px;
	}
`;

export const ErrorMessage = styled.p`
	font-family: ${vars.standardFont};
	color: ${vars.warningRed};
`;
