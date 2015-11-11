var HomeController={
  getHome:function (){        
      AppCache.clearAll();
      var $elemet = $('#page-home');
      HomeView.rederHome($elemet);
  }  
};



