User.register = (data, cb) => {
    async.auto({
      validate: (callback) => {
        validate(data, callback);
      },
      checkIfAlreadyExists: ['validate', (result, callback) => {
        checkUserExistence(data.email, callback);
      }],
      saveUser: ['checkIfAlreadyExists', (result, callback) => {
        User.create(data, (error, newUser) => {
          if(error) {
            return callback(error);
          }
          return callback(null, user);
        });
      }],
      checkIfEmailIsValid: ['checkIfAlreadyExists', (result, callback) => {
        ThirdPartyCall.check(data.email, (error, response) => {
          return callback(null, response);
        })
      }],
      sendVerificationLink: ['saveUser', 'checkIfEmailIsValid', (result, callback) => {
        if(result.saveUser !== "Skipped" && result.checkIfEmailIsValid === true)
          User.sendEmailVerfication(data.email);
        return callback(null, true);
      }]
    }, (error, results) => {
      // DO something with the final result
    })
  }
  function validate(data, cb) {
    if(!data.name) {
      return cb("Error! Name is required");
    }
    if(!data.email) {
      return cb("Error! Email is required");
    }
    if(!data.phone) {
      return cb("Error! Phone is required");
    }
    return cb(null, true);
  }
  function checkUserExistence(email, cb) {
    User.findOne({
      where: {
        email: email
      }
    }, (error, user) => {
      if(user) {
        return cb(null, true);
      } else {
        return cb(null, false);
      }
    });
  }
  function createUser(data, cb) {
    User.create(data, (error, newUser) => {
      if(error) {
        return cb(error);
      }
      return cb(null, user);
    });
  }
  