var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');

const userStore = require('./../model/user');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    userStore.set(user.profile.id, user.profile)
    done(null, user.profile);
  });

  passport.deserializeUser(function(user, done) {
    done(null, userStore.get(user.id))
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: [
      "id",
      "cover",
      "name",
      "email",
      "age_range",
      "link",
      "gender",
      "locale",
      "picture.type(large)",
      "timezone",
      "updated_time",
      "verified"
    ]
  },



  function(token, refreshToken, profile, done) {
    done(null, {
      profile, token, refreshToken
    })
  }));

};
