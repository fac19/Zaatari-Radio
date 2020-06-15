/* eslint-disable max-len */
import React from 'react';
import LandingButton from '../../buttons/LandingButton';
import * as SC from './style';

export default function Browse() {
	return (
		<SC.Section>
			<SC.Title>Browse current radio workshops.</SC.Title>
			<SC.Text>
				Find specialize in audio workshops. Working with the workshop attendees on a topic with the end goal of producing a podcast or audio feature
				to be aired on FM radio within the camp.
			</SC.Text>

			<LandingButton innerText="Go To The Workshops" to="/workshops" />
		</SC.Section>
	);
}
