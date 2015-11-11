var App = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {   
    AppCache.clearAll();   
    CategoryModel.setCategory();
    NgoModel.setNgo();    
  }
};
App.initialize();