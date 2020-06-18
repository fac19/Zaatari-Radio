import React from 'react';
import LanderHeader from './LanderHeader';
import IntroSection from './IntroSection';
import BrowseSection from './BrowseSection';
import ContributeSection from './ContributeSection';
import FaqSection from './FaqSection';
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
