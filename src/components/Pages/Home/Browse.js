import React from 'react';
import SandButton from '../../buttons/Yellow';
import { Title, Text, Section } from './homeStyles';

export default function Browse() {
  return (
    <Section>
      <Title>Browse current radio workshops.</Title>
      <Text>
        Find specialize in audio workshops. Working with the workshop attendees on a topic with the end goal of producing a podcast or audio feature
        to be aired on FM radio within the camp.
      </Text>

      <SandButton innerText="Go To The Workshops" to="/workshops" />
    </Section>
  );
}
