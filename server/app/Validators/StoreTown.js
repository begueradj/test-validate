'use strict'

class StoreTown {
  
  get rules () {
    return {
      name: "required|unique:towns"
    }
  }

  get messages() {
    return {
      'name.required': 'Data needed',
      'name.unique': 'Do not store duplicate data'
    }
  }

  async fails(errorMessages) {
    return this
      .ctx
      .response
      .status(403)
      .send(errorMessages)
  }
}

module.exports = StoreTown
