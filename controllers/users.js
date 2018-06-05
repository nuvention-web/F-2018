import User from '../models/user';
import UserProfile from '../models/userprofile';
import {csvReadStream, mongooseToCsv} from 'mongoose-to-csv';
import fastCsv from 'fast-csv';

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
      } else if (user == null) {
        res.status(400).send("username is null");
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
      } else if (user == null) {
        res.status(400).send("username is null");
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

export const getProfileByUsername = (req, res, next) => {
    UserProfile.findOne()
    .where('username')
    .equals(req.params.username)
    .exec(function(err, userProfile) {
      if (err) {
        res.status(400).send({message: err.message});
      } else {
        //console.log(req.params.username);
        //console.log(userProfile);
        res.jsonp(userProfile);
      }
    })
}

export const getEmail = (req, res, next) => {
  //console.log(req.session);
  User.findOne()
  .where('username')
  .equals(req.params.username)
  .exec(function(err, user) {
    if (err) {
      res.status(400).send({message: err.message});
    } else if (user == null) {
      res.status(400).send("email is null");
    } else {
      console.log(user);
      res.send({email: user.email});
    }
  });
}

export const getAll = (req, res, next) => {
  UserProfile.find({})
    .exec((err, users) => {
    if (err) {
      res.status(400).send({message: err.message});
    } else {
      //console.log(users);
      let userMap = {};
      users.forEach((user)=> {
        userMap[user._id] = user;
      });
      res.send(userMap);
    }
  })
}

export const writeCSV = (req, res, next) => {
    // UserProfile.find({}).exec()
    //   .then(function(docs) {
    //     console.log(docs)
    //     UserProfile.csvReadStream(docs)
    //       .pipe(fs.createWriteStream('userprofiles.csv'));
    //     })
    //   .then(res.send('write to CSV complete'))
    const cursor = UserProfile.find();
    const transformer = (doc) => {
      return {
          'username': doc.username,
          'name': doc.name,
          'age': doc.age,
          'city': doc.location.city,
          'state': doc.location.state,
          'major': doc.education.major,
          'degree': doc.education.degree,
          'institution': doc.education.institution,
          'current industry': doc.industries.currentindustry,
          'target industry': doc.industries.targetindustry,
          'about': doc.about.about,
          'why indstry': doc.about.whyindustry,
          'transitioning questions': doc.about.transitioningquestions,
          'mentor': doc.mentor
      };
    }
    const filename = 'userprofiles.csv';
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.writeHead(200, { 'Content-Type': 'text/csv' });
    res.flushHeaders();
    var csvStream = fastCsv.createWriteStream({headers: true}).transform(transformer)
    cursor.stream().pipe(csvStream).pipe(res);
}