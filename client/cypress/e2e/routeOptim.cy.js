/* eslint-disable no-undef */

describe('Route Optimizer', function() {
  it('web app launches and logs-in', function() {
    cy.visit('http://localhost:3000')
    cy.contains('MENU').click()
    cy.contains('LOGIN').click()
    cy.get('input').first().type('adrianaris')
    cy.get('input').last().type('admin')
    cy.get('button').contains('Login').click()
    cy.contains('Welcome adrianaris')
  })

  it('DEPOT gets initialized and new route created and saved', function() {
    const months = ['jan', 'feb', 'march', 'april',
      'mai', 'june', 'july', 'aug',
      'sept', 'oct', 'nov', 'dec']
    const date = new Date()
    const routeName = `route ${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`

    cy.contains(routeName)
    cy.get('button').contains('Remove')
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
    cy.contains(routeName)
  })

//  it('routes list populate', function() {
//    cy.contains('MENU').click()
//    cy.contains('USERPANEL').click()
//    cy.contains('route Test 21/2/2022').click()
//    cy.get('button').contains('Reuse this route').click()
//    cy.contains('Locations-count: 17')
//  })
})