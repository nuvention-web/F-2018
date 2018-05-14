import User from '../models/user';
import UserProfile from '../models/userprofile';

export const createUser = (req, res, next) => {
    console.log('creating user')
    if (req.body.email &&
        req.body.username &&
        req.body.password) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
          if (err) {
            return next(err)
          } else {
              req.session.userId = user._id;
              req.session.save();
              //console.log(req.session);
              res.send("user created and saved to DB")
              //return res.redirect('/users/profile');
          }
        });
      }
      else {
          var err = new Error('All fields required.');
          err.status = 400;
          return next(err);
        }
    }

export const logUser = (req, res, next) => {
    if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
          if (error || !user) {
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return next(err);
          } else {
            req.session.userId = user._id;
            req.session.save();
            res.send("authentication successful");
            console.log("authentication successful");
            //return res.redirect('/users/profile');
          }
        });
      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
}

export const getUserProfile = (req, res, next) => {
    User.findOne()
    .where('_id')
    .equals(req.session.userId)
    .exec(function(err, user) {
      if (err) {
        res.status(400).send({message: err.message});
      } else {
        // console.log(user)
        // console.log(req.session.userId)
        UserProfile.findOne({username: user.username})
        .exec(function(err, userProfile) {
          if (err) {
            res.status(400).send({message: err.message});
          } else {
            //console.log(userProfile);
            res.jsonp(userProfile);
          }
        })
        //console.log(profile)
        //res.jsonp(profile);
      }
    });
};

export const getUserName = (req, res, next) => {
    //console.log(req.session);
    User.findOne()
    .where('_id')
    .equals(req.session.userId)
    .exec(function(err, user) {
      if (err) {
        res.status(400).send({message: err.message});
      } else {
        console.log(user);
        res.send({username: user.username});
      }
    });
}

export const addUserProfile = (req, res, next) => {
    var newProfile = new UserProfile(req.body);
    console.log(newProfile);
    newProfile.save()
    .then(item => {
      res.send("item saved to DB");
    })
    .catch(err => {
      res.status(400).send({message: err.message});
    })
};

export const updateProfileByUserName = (req, res, next) => {
    UserProfile.update({'username':req.body.username},{$set: req.body})
    .exec(function(err, articles) {
      if (err) {
        res.status(400).send({message: err.message});
      } else {
        res.send('update by username successful');
      }
    });
}

export const deleteProfileByUserName = (req, res, next) => {
    UserProfile.remove({'username':req.body.username})
    .exec(function(err, articles) {
      if (err) {
        res.status(400).send({message: err.message});
      } else {
        res.send('delete by username successful');
      }
    })
}