import React from 'react';
import * as SC from './style';

export default function LanderHeader() {
	return (
		<SC.LanderHeader>
			<SC.LanderTitle>Zaatari Radio</SC.LanderTitle>
			<SC.LanderText>Innovative humanitarian relief empowering war-affected communities</SC.LanderText>
			<SC.LanderLink>Find out more</SC.LanderLink>
			<SC.LanderLink>
				<SC.Icon />
			</SC.LanderLink>
		</SC.LanderHeader>
	);
}
