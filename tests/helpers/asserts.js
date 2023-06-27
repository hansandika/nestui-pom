export function shouldBeVisible(selector){
  cy.get(selector).should('be.visible')
}

export function shouldContainText(selector, ...args){
  cy.get(selector).should('contain.text', ...args)
}

export function shouldContain(selector, ...args){
  cy.get(selector).should('contain', ...args)
}