import React from 'react';
import * as SC from './style';

export default function LanderHeader() {
	return (
		<SC.LanderHeader>
			<SC.LanderTitle>Zaatari Radio</SC.LanderTitle>
			<SC.LanderText>Open-source humanitarian platform for collaborating and sharing resources</SC.LanderText>
			<SC.LanderLink>Find out more</SC.LanderLink>
			<SC.LanderLink>
				<SC.Icon />
			</SC.LanderLink>
		</SC.LanderHeader>
	);
}
