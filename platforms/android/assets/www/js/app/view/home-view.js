var HomeView={
    rederHome:function ($element){
       AppTemplate.process("home-template.html",null,function (content){
           $element.html(content);                      
       })
    }
};