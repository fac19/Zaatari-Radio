/* eslint-disable max-len */
import React from 'react';
import * as SC from '../style';

export default function Intro() {
	return (
		<SC.Section>
			<SC.Title>About HumaniBase</SC.Title>
			<SC.Text>
				After working in Zaatari Refugee Camp in Jordan for two years from Zaatari Radio station, our humanitarian project had to temporarily stop
				broadcasting due to the COVID-19 global pandemic. During this time we asked ourselves how can we continue working remotely and support other
				people being able to administer our radio-based workshops?
			</SC.Text>

			<SC.Text>
				Working with Tech for Better, our solution was an open-source humanitarian platform where individuals and other organisations are free to
				access our workshops and resources in addition to uploading their our work.
			</SC.Text>
			<SC.Text>
				The goal of HumaniBase is to create a platform to support and share knowledge among social projects worldwide so that we can make a bigger
				impact together.
			</SC.Text>
		</SC.Section>
	);
}
