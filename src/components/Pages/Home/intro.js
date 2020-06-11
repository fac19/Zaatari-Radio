import React from 'react';
import imageOne from '../../../Images/Image1.png';
import imageTwo from '../../../Images/Image2.png';
import { Text, Section, BoldText, ImageStrip } from './homeStyles';

export default function Intro() {
  return (
    <Section>
      <BoldText>Zaatari Radio has been bringing education and creativity to the Zaatari refugee camp for a number of years.</BoldText>

      <Text>
        After the recent situation with COVID-19, we realised that we needed a way to keep bringing this remotely. Now we have a platform to do so...
      </Text>
      <ImageStrip>
        <img alt="A sample" src={imageOne} />
        <img alt="A sample" src={imageTwo} />
      </ImageStrip>
    </Section>
  );
}
