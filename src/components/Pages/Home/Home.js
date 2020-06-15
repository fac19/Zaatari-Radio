import React from 'react';
import LanderSection from './LanderSection';
import Intro from './intro';
import Browse from './Browse';
import Contribute from './contribute';
import FAQs from './faqs';

export default function Home() {

	return (
		<>
			<LanderSection />
			<Intro />
			<Browse />
			<Contribute />
			<FAQs />
		</>
	);
}
