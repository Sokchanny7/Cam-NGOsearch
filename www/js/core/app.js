
/* global CinemaModel, LaunchMovieModel, MovieController, MovieModel */

var app = { 
  initialize: function () {
    this.bindEvents();
  },  
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },  
  onDeviceReady: function () {    
    AppCache.clearAll();
    MovieModel.setMovie();
    MovieController.getMovie();
    LaunchMovieModel.setLaunchMovie();    
    CinemaModel.setCinema();       
  }
};

app.initialize();