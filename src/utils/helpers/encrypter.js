const bcrypt = require('bcrypt')
module.exports = class Encrypter {
  async compare (value, hash) {
    return await bcrypt.compare(value, hash)
  }
}
