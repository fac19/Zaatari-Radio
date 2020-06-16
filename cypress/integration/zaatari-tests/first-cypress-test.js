it('visits home page', () => {
	cy.visit('/');
});

it('failing test visiting non-existant page', () => {
	cy.visit('/asdfsdf');
});
