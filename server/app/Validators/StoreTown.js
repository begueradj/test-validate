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

  async fails() {
    return this
      .ctx
      .response
      .status(403)
      .json({
        message: 'Hello there'
      })
  }
}

module.exports = StoreTown
