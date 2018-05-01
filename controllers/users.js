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
              //res.send("user created and saved to DB")
              return res.redirect('/users/profile');
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
            //res.send("authentication successful");
            console.log("authentication successful");
            return res.redirect('/users/profile');
          }
        });
      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
}

export const getUserProfile = (req, res, next) => {
    User.find()
    .where('_id')
    .equals(req.session.userId)
    .exec(function(err, articles) {
      if (err) {
        return res.send(400, {
          message: getErrorMessage(err);
        });
      } else {
        var profile = UserProfile.find({username: articles.username})
        res.jsonp(profile);
      }
    });
};

export const addUserProfile = (req, res, next) => {
  var newProfile = new UserProfile(req.body);
  console.log(newProfile);
  newProfile.save()
  .then(item => {
    res.send("item saved to DB");
  })
  .catch(err => {
    res.status(400).send("unable to save to DB");
  })
};