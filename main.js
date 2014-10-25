require.config({
 paths:{"jquery":"js/lib/jquery-1.11.1.min"}
});
require(["jquery"],funciton($){
  $(function(){
  $("body").html("Hello world");
  });
});
