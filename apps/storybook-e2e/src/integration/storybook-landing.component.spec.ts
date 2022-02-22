describe('storybook', () => {
  beforeEach(() => cy.visit('/iframe.html?id=storybooklandingcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-workspace-template-storybook-landing').should('exist');
  });
});