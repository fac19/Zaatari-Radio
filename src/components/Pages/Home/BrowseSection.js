/* eslint-disable max-len */
import React from 'react';
import LandingButton from '../../buttons/LandingButton';
import * as SC from './style';

export default function Browse() {
	return (
		<SC.Section>
			<SC.Title>Browse Current Radio Workshops</SC.Title>
			<SC.Text>
				From grassroot projects to experienced organisations, find specialised audio workshops toinspire your next humanitarian project. Use the
				search engine and filter tabs to find exactlywhat you need to get things going; from workshop focus, to language and implementedregion. The
				Feedback Section of each workshop will fine tune projects to let you knowexactly what you will need for successful implementation, as well as
				provide community-driven feedback loops with easy-to-access forums to support future cross organisationcollaborations.
			</SC.Text>

			<LandingButton innerText="Go To The Workshops" to="/workshops" />
		</SC.Section>
	);
}
