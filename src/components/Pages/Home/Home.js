import React from 'react';
import LanderHeader from './LanderHeader';
import IntroSection from './IntroSection';
import BrowseSection from './BrowseSection';
import ContributeSection from './ContributeSection';
import FaqSection from './FaqSection';

export default function Home() {
	return (
		<>
			<LanderHeader />
			<IntroSection />
			<BrowseSection />
			<ContributeSection />
			<FaqSection />
		</>
	);
}
