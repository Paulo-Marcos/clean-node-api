const { MissingParamError } = require('../../utils/errors')

module.exports = class AuthUseCase {
  constructor (loadUserByEmailRepository, encrypterSpy) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypterSpy = encrypterSpy
  }

  async auth (email, password) {
    if (!email) {
      throw new MissingParamError('email')
    }
    if (!password) {
      throw new MissingParamError('password')
    }

    const user = await this.loadUserByEmailRepository.load(email)
    if (!user) {
      return null
    }

    const isValid = await this.encrypterSpy.compare(password, user.password)
    if (!isValid) return null
  }
}
