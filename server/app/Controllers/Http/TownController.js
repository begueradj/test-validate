'use strict'

const Town = use('App/Models/Town')

class TownController {
  async store({ request, response }) {
    const data = request.post()
    const town = new Town()
    town.name = data.name
    try {
      await town.save()
      response.status(200)
    } catch(e) {
      console.log(e)
    }
    
  }
}

module.exports = TownController
