/* eslint-disable no-undef */

describe('Register User', function() {
  it('web app launches', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Welcome')
  })

  it('register new user', function() {
    cy.contains('MENU').click()
    cy.contains('LOGIN').click()
    cy.get('button').contains('Register').click()
    cy.get('input').first().clear().type('test')
    cy.get('input').eq(1).clear().type('test')
    cy.get('input').last().clear().type('test')
    cy.get('button').contains('Register').click()
    cy.contains('Welcome test')
  })

  it('route created, saved and can be reused and deleted', {
    retries: {
      runMode: 3,
      openMode: 1
    },
  }, function() {
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
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
    cy.contains(routeName).click()
    cy.get('button').contains('deleteRoute').click()
    cy.contains(routeName).should('not.exist')
  })

  it('logout', function() {
    cy.contains('MENU').click()
    cy.contains('LOGOUT').click()
    cy.contains('Welcome test').should('not.exist')
  })
})

describe('Add/Remove locations', function() {
  it('add locations', {
    retries: {
      runMode: 3,
      openMode: 1
    },
  }, function() {
    cy.visit('http://localhost:3000')
    const Locations = ['Brussels', 'Gent']
    cy.wrap(Locations).each(location => {
      cy.get('[id=mainGeocoder]').within(() => {
        cy.get('input').clear().type(location)
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
})

describe('delete user', function() {
  it('login works', {
    retries: {
      runMode: 3,
      openMode: 1
    },
  }, function() {
    cy.visit('http://localhost:3000/#/login')
    cy.get('input').first().type('test')
    cy.get('input').last().type('test')
    cy.get('button').contains('Login').click()
    cy.contains('Welcome test')
  })
  it('delete user', function() {
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
    cy.get('input').last().type('test')
    cy.get('button').contains('Delete').click()
    cy.contains('Account test has been deleted.')
  })
  it('login with deleted user fails', function() {
    cy.contains('MENU').click()
    cy.contains('LOGIN').click()
    cy.get('input').first().type('test')
    cy.get('input').last().type('test')
    cy.get('button').contains('Login').click()
    cy.contains('invalid username or password')
  })
})
