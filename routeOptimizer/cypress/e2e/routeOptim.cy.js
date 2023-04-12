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

describe('Add/Remove locations', {
  retries: {
    runMode: 2,
    openMode: 1
  },
}, function() {
  it('add locations', function() {
    cy.visit('http://localhost:3000')
    const Locations = ['Brussels', 'Ghent']
    cy.wrap(Locations).each(location => {
      cy.get('[id=mainGeocoder]').within(() => {
        cy.get('input').type(location)
      })
      cy.contains(location).eq(0).click()
      cy.contains(location)
      cy.get('[id=mainGeocoder]').within(() => {
        cy.get('input').clear()
      })
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

  it('removing location', {
    retries: {
      runMode: 2,
      openMode: 1
    },
  }, function() {
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

describe('user settings', function() {
  before(() => {
    cy.visit('http://localhost:3000/#/login')
    cy.get('input').first().type('test')
    cy.get('input').last().type('test')
    cy.get('button').contains('Login').click()
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
  })

  it('button SaveChanges not displayed if no change is set', function() {
    cy.get('[data-testid=changeNameButton').click()
    cy.get('[data-testid=changeNameInput').clear().type('test')
    cy.get('button').contains('set').click()

    cy.get('button').contains('Save Changes').parent().should('not.be.visible')
  })

  it('change settings', {
    retries: {
      runMode: 3,
      openMode: 1
    },
  }, function() {
    cy.get('[data-testid=changeNameButton').click()
    cy.get('[data-testid=changeNameInput').clear().type('name')
    cy.get('button').contains('set').click()

    cy.get('[data-testid=changeUsernameButton').click()
    cy.get('[data-testid=changeUsernameInput').clear().type('username')
    cy.get('button').contains('set').click()

    cy.get('[data-testid=changeNavigatorButton').click()

    cy.get('button').contains('Save Changes').click()

    cy.contains('update successful')
    cy.contains('Waze')
    cy.contains('Name: name')
    cy.contains('Username: username')
  })

  it('change password', {
    retries: {
      runMode: 3,
      openMode: 1
    },
  }, function() {
    cy.get('button').contains('Change Password').click()
    cy.contains('Changed My Mind')
    cy.get('[data-testid=oldPass]').clear().type('test')
    cy.get('[data-testid=newPass1]').clear().type('abc')
    cy.get('[data-testid=newPass2]').clear().type('abc')
    cy.get('button').contains('Submit').click()
    cy.contains('password updated successfully')
    cy.contains('Change Password')

    cy.contains('MENU').click()
    cy.contains('LOGOUT').click()
  })

  it('login works', {
    retries: {
      runMode: 3,
      openMode: 1
    },
  }, function() {
    cy.visit('http://localhost:3000/#/login')
    cy.get('input').first().type('username')
    cy.get('input').last().type('abc')
    cy.get('button').contains('Login').click()
    cy.contains('Welcome username')
  })

  it('delete user', function() {
    cy.contains('MENU').click()
    cy.contains('USERPANEL').click()
    cy.get('input').last().type('abc')
    cy.get('button').contains('Delete').click()
    cy.contains('Account name has been deleted.')
  })

  it('login with deleted user fails', function() {
    cy.contains('MENU').click()
    cy.contains('LOGIN').click()
    cy.get('input').first().type('username')
    cy.get('input').last().type('abc')
    cy.get('button').contains('Login').click()
    cy.contains('invalid username or password')
  })
})
