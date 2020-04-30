const Promise = require('bluebird')
const bcryptNode = Promise.promisifyAll(require('bcrypt-nodejs'))
const bcrypt = require('bcrypt');


function hashPassword (user, options) {
  const SALT_FACTOR = 8

  // if(!user.changed('password')) {
  //   return;
  // }

  const hash = bcrypt.hashSync(user.password, SALT_FACTOR);
  user.setDataValue('password', hash)

  // console.log('registerpw: '+ user.password)
  // return bcryptNode
  //   .genSaltAsync(SALT_FACTOR)
  //   .then(salt => bcryptNode.hashAsync(user.password, salt, null))
  //   .then(hash => {
  //     user.setDataValue('password', hash)
  //   })
    
}

module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, 
  {
    hooks: {
      // beforeSave: hashPassword,
      // beforeUpdate: hashPassword,
      beforeCreate: hashPassword
    }
  }
  )

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  

  return User

}