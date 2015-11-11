$(function(){
  $("#page-ngo").on("pagebeforeshow",function(){
    NgoController.getNgos();
  });
});


