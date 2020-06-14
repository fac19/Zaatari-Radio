import React from 'react';
import * as SC from './style'

export default function LanderSection() {
	return (
		<SC.LanderSection>
			<SC.LanderTitle>Zaatari Radio</SC.LanderTitle>
			<SC.LanderText>Innovative humanitarian relief empowering war-affected communities</SC.LanderText>
			<SC.HowToLink>
				how does it work <SC.Icon />
			</SC.HowToLink>
		</SC.LanderSection>
	);
}
