import React from 'react';
import LanderHeader from './children/LanderHeader';
import IntroSection from './children/IntroSection';
import BrowseSection from './children/BrowseSection';
import ContributeSection from './children/ContributeSection';
import FaqSection from './children/FaqSection';
import * as SC from './style';

export default function Home() {
	return (
		<>
			<LanderHeader />
			<SC.HomeContainer>
				<IntroSection />
				<BrowseSection />
				<ContributeSection />
				<FaqSection />
			</SC.HomeContainer>
		</>
	);
}
