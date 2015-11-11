var HomeController={
  getHome:function (){              
      var $element = $('#page-home');
      HomeView.rederHome($element);
      $element.trigger('create');
  }  
};



