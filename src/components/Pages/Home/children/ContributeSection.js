/* eslint-disable max-len */
import React from 'react';
import * as SC from '../style';

export default function Contribute() {
	const handleClick = (e) => {
		const anchorTarget = document.querySelector('#FaqSection');
		e.preventDefault();
		anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<SC.Section id="ContributeSection">
			<SC.Title>How to contribute</SC.Title>
			<SC.Text>
				Become a member of HumaniBase by registering yourself as an individual or an organisation. You will have free access to unlimited humanitarian
				resources, and to the feedback section of each workshop to review and fine tune uploaded content plus the ability to easily reach out to other
				organisations for advice and future collaborations.
			</SC.Text>

			<SC.Text>
				Become a member of HumaniBase by registering yourself as an individual or an organisation. You will have free access to unlimited humanitarian
				resources, and to the feedback section of each workshop to review and fine tune uploaded content plus the ability to easily reach out to other
				organisations for advice and future collaborations.
			</SC.Text>

			<SC.Text>
				Scroll down <SC.TextSpan onClick={handleClick}>for FAQs.</SC.TextSpan>
			</SC.Text>

			<SC.SectionLink href="#FaqSection" onClick={handleClick} />
		</SC.Section>
	);
}
