import React from 'react';
import BackButton from './BackButton';
import LandingButton from './LandingButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default { title: 'Button' };

export const back = () => <BackButton to="/workshops" />;
export const landing = () => <LandingButton innerText="Go To The Workshops" to="/workshops" />;
export const primary = () => <PrimaryButton innerText="Workshop" to="/workshop" />;
export const secondary = () => <SecondaryButton innerText="Submit Feedback" to="/feedback" />;
