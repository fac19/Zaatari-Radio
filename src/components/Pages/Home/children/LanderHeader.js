import React from 'react';
import * as SC from '../style';

export default function LanderHeader() {
	const handleClick = (e) => {
		const anchorTarget = document.querySelector('#AboutSection');
		e.preventDefault();
		anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<SC.LanderHeader>
			<SC.SectionLanderTitle>
				<SC.LanderTitle>HumaniBase</SC.LanderTitle>
				<SC.LanderText>Open-source humanitarian platform for collaborating and sharing resources</SC.LanderText>
			</SC.SectionLanderTitle>
			<SC.SectionLanderLink>
				<SC.LanderLink href="#AboutSection" onClick={handleClick} />
			</SC.SectionLanderLink>
		</SC.LanderHeader>
	);
}
