class LoginRouter {
  route (httpRequest) {
    return {
      statusCode: 400
    }
  }
}

describe('Login Router', () => {
  test('Should return 400 if no email is provided', () => {
    // sut = system under test
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
