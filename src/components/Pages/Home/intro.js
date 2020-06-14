import React from 'react';
import imageOne from '../../../Images/Image1.png';
import imageTwo from '../../../Images/Image2.png';
import * as SC from './style';

export default function Intro() {
	return (
		<SC.Section>
			<SC.BoldText>Zaatari Radio has been bringing education and creativity to the Zaatari refugee camp for a number of years.</SC.BoldText>

			<SC.Text>
				After the recent situation with COVID-19, we realised that we needed a way to keep bringing this remotely. Now we have a platform to do so...
			</SC.Text>
			<SC.ImageStrip>
				<img alt="A sample" src={imageOne} />
				<img alt="A sample" src={imageTwo} />
			</SC.ImageStrip>
		</SC.Section>
	);
}
