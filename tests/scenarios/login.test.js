import * as element from '@helpers/elements'
import * as route from '@helpers/route'
import { ROUTES } from '@tests/const/routes'
import * as loginPage from '@tests/pages/login.page'
import * as assert from '@helpers/asserts'

describe('Login Test', () => {
  beforeEach(() => {
    route.visit(ROUTES.login)
  })

  it('Login with invalid credentials', () => {
    element.fillField(loginPage.usernameField, '')
    element.fillField(loginPage.passwordField, '')
    element.click(loginPage.loginButton)  

    assert.shouldBeVisible(loginPage.errorAlert)
    assert.shouldContainText(loginPage.errorAlert, 'Epic sadface: Username is required')
  })
})