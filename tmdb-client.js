Meteor.startup(function(){
  var tmdbConfig = new Mongo.Collection('tmdb-config')
  Meteor.subscribe('tmdb-config')
  Tracker.autorun(function(){
    tmdb.config = tmdbConfig.findOne()
  })
})