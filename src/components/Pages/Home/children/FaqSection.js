/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import * as SC from '../style';

function FAQ({ q, a }) {
	return (
		<SC.FaqArticle>
			<SC.FaqTextHover>Q: {q}</SC.FaqTextHover>
			<SC.FaqTextHover>A: {a}</SC.FaqTextHover>
		</SC.FaqArticle>
	);
}

export default function FAQs() {
	const handleClick = (e) => {
		const anchorTarget = document.querySelector('#NavBar');
		e.preventDefault();
		anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<SC.Section id="FaqSection">
			<SC.Title>FAQs</SC.Title>
			<FAQ
				q="How do I access workshops?"
				a="Navigate to the workshop tab and browse away. Use the filters to find the project that suits you best!"
			/>
			<FAQ
				q="How can I contribute?"
				a="Become a member to gain access to unlimited resources and the ability to provide feedbackon the workshops you have implemented"
			/>
			<FAQ
				q="How can I contact other organisations?"
				a="Once a member, you will be able to access the profile of other members who have contributed to the database. Ask specific questions about projects, open conversations and start collaborating."
			/>

			<SC.Text>
				Back to <SC.TextSpan onClick={handleClick}>the top.</SC.TextSpan>
			</SC.Text>

			<SC.Text>
				<SC.BackToTopLink href="#NavBar" onClick={handleClick} />
			</SC.Text>
		</SC.Section>
	);
}

FAQ.propTypes = {
	a: PropTypes.string.isRequired,
	q: PropTypes.string.isRequired,
};
