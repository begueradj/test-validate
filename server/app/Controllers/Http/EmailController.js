'use strict'

const Mail = use('Mail')
class EmailController {
  async index() {
    try {
      await Mail.raw('<h1> HTML email </h1>', (message) => {
        message.from('foo@bar.com')
        message.to('billal.begueradj@gmail.com')
      })
    } catch(e) {
      console.log(e.message)
    }
  }
}

module.exports = EmailController
