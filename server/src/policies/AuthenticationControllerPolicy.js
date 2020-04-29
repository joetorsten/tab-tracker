const Joi = require('joi')

module.exports = {
  register (req,res,next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if(error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. 8-32 characters long
            <br>
            2. it must ONLY contain either small letters, capital letters or digits`
          })
          break
          default:
            res.status(400).send({
              error: 'invalid registration information'
            })
      }
    } else {
      next()
    }

  }
}
