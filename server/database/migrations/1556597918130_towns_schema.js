'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TownsSchema extends Schema {
  up () {
    this.create('towns', (table) => {
      table.increments()
      table.string('name', 25).notNullable()
    })
  }

  down () {
    this.drop('towns')
  }
}

module.exports = TownsSchema
