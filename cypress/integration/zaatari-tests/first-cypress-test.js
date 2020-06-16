it('visits home page', () => {
	cy.visit('/');
	cy.get('Home');
});

it('failing test visiting non-existant page', () => {
	cy.visit('/asdfsdf');
});
