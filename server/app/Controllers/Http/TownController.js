'use strict'

class TownController {
  store({ request, response }) {
    console.log(request.post())
  }
}

module.exports = TownController
