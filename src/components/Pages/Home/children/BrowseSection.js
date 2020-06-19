/* eslint-disable max-len */
import React from 'react';
import LandingButton from '../../../buttons/LandingButton';
import * as SC from '../style';

export default function Browse() {
	const handleClick = (e) => {
		const anchorTarget = document.querySelector('#ContributeSection');
		e.preventDefault();
		anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<SC.Section id="BrowseSection">
			<SC.Title>Browse Current Radio Workshops</SC.Title>
			<SC.Text>
				From grassroot projects to experienced organisations, find specialised audio workshops to inspire your next humanitarian project. Use the
				search engine and filter tabs to find exactly what you need to get things going; from workshop focus, to language and implemented region.
			</SC.Text>

			<SC.Text>
				The Feedback Section of each workshop will fine tune projects to let you know exactly what you will need for successful implementation, as
				well as provide community-driven feedback loops with easy-to-access forums to support future cross organisation collaborations.
			</SC.Text>

			<LandingButton innerText="Go To The Workshops" to="/workshops" />

			<SC.Text>
				Scroll down to <SC.TextSpan onClick={handleClick}>learn how to contribute.</SC.TextSpan>
			</SC.Text>

			<SC.Text>
				<SC.SectionLink href="#ContributeSection" onClick={handleClick} />
			</SC.Text>
		</SC.Section>
	);
}
