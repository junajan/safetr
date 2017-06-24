var express = require('express');
var _ = require('lodash');
var passport = require('passport');
var router = express.Router();

var tripStore = require('../model/trip')
var emailParser = require('../model/email')

const config = require('../config/auth')
const DB = require('../modules/mysql')(config.mysql);
const countryStoreClass = require('../model/country')

const countryStore = new countryStoreClass(DB)

router.get('/', function (req, res, next) {
  res.render('index', {sess: req.session});
});

router.post('/user', function (req, res) {
  if(req.user) req.user.info = req.body

  res.json({
    ok: true
  })
});

let countryInfo = {}
let countryStats = {}

DB.getData('*', 'country_info')
  .then((res) => {
    countryInfo = _.keyBy(res, 'country')
  })

DB.getData('*', 'country_stats')
  .then((res) => {
    countryStats = _.keyBy(res, 'country')
  })

router.post('/email', function (req, res) {
  console.log("Receiving an email")
  const email = req.body
  const info = {
    from: email.from[0].address,
    to: email.to[0].address,
    userId: email.to[0].address.split('@')[0],
    subject: email.subject,
    // html: email.html
  }

  info.ticket = emailParser.parse(email.html);

  return Promise.all([
    countryStore.getCountryByAirportCode(info.ticket.toKey)
      .then((country) => info.ticket.countryTo = country),
    countryStore.getCountryByAirportCode(info.ticket.fromKey)
      .then((country) => info.ticket.countryFrom = country),
  ])
    .then((data) => {
      tripStore.add(info.userId, info);
      console.log("Successfully parsed an email from %s", info.userId)
      res.json({ok: true})
    })
});

router.head('/email', function (req, res) {
  res.json({
    ok: true
  })
});

router.get('/profile', isLoggedIn, function (req, res) {
  const trips = tripStore.get(req.user.id)
  res.render('profile', {
    user: req.user,
    trips: trips
  });
});

router.get('/profile/trip/:id', isLoggedIn, function (req, res) {
  const trip = tripStore.getByIndex(req.user.id, req.params.id)

  console.log(trip.ticket.countryTo)

  const data = {
    user: req.user,
    trip: trip,
    countryInfo: countryInfo[trip.ticket.countryTo],
    countryFromStats: countryStats[trip.ticket.countryFrom],
    countryToStats: countryStats[trip.ticket.countryTo]
  }

  console.log(data)
  res.render('trip', data);
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
