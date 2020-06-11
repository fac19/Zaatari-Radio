import React from 'react';
import LanderSection from './LanderSection';
import Intro from './intro';
import Browse from './Browse';
import Contribute from './contribute';
import FAQs from './faqs';

export default function Home() {
	//   const [currentTags, setCurrentTags] = React.useState([]);
	// console.log('Home -> currentTags', currentTags);

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
