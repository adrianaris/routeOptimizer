/* eslint-disable no-undef */

describe('Route Optimizer', function() {
  it('web app launches and log-in fails', function() {
    cy.visit('http://localhost:3000')
    cy.contains('MENU').click()
    cy.contains('LOGIN').click()
    cy.get('input').first().type('test')
    cy.get('input').last().type('test')
    cy.get('button').contains('Login').click()
    cy.contains('invalid username or password')
  })

  it('register new user', function() {
    cy.get('button').contains('Register').click()
    cy.get('input').first().clear().type('test')
    cy.get('input').eq(1).clear().type('test')
    cy.get('input').last().clear().type('test')
    cy.get('button').contains('Register').click()
    cy.contains('Welcome test')
  })

  it('add locations', function() {
    const Locations = ['Brussels']
    cy.wrap(Locations).each(location => {
      cy.get('[id=mainGeocoder]').within(() => {
        cy.get('input').clear()
        cy.focused().type(location)
      })
      cy.contains(location).eq(0).click()
      cy.contains(location)
    })
    cy.contains('Locations-count').within(() => {
      cy.get('b').then($b => {
        expect($b.text()).to.equal(Locations.length.toString())
      })
    })
    cy.contains('jobDone').click()
    cy.contains('Undo jobDone').click()
    cy.get('[id=optimizer]').click()
    cy.contains('Distance')
    cy.contains('Duration')
    cy.contains('open in gmaps')
  })

  it('removing location', function() {
    cy.contains('Locations-count:').within(() => {
      return cy.get('b').then($b => {
        cy.wrap($b.text()).as('count')
      })
    })
    cy.get('[id=remove]').eq(0).click()
    cy.contains('Locations-count').within(() => {
      cy.get('b').then($b => {
        cy.get('@count').then(count => {
          expect(Number.parseInt($b.text())).to.equal(count - 1)
        })
      })
    })
  })

  it('route created, saved and can be reused', function() {
    const months = ['jan', 'feb', 'march', 'april',
      'mai', 'june', 'july', 'aug',
      'sept', 'oct', 'nov', 'dec']
    const date = new Date()
    const routeName = `route ${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`

    cy.contains('Create new route').click()
    cy.contains(routeName).click()
    cy.get('[id=routeName]').clear().type('new')
    cy.get('button').contains('set').click()
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
    cy.contains(routeName).click()
    cy.get('button').contains('Reuse this route').click()
    cy.contains(routeName)
  })

  it('delete user', function() {
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
    cy.get('input').last().type('test')
    cy.get('button').contains('Delete').click()
    cy.contains('Account test has been deleted.')
  })
})
