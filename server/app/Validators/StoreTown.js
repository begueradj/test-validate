'use strict'

class StoreTown {
  
  get rules () {
    return {
      name: "required"
    }
  }

  get messages() {
    return {
      'name.required': 'Data needed'
    }
  }

  async fails(errorMessages) {
    return this
      .ctx
      .response
      .status(403)
      .json({
        message: errorMessages[0].message
      })
  }
}

module.exports = StoreTown
