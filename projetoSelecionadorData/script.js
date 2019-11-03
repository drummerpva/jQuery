$(document).ready(function () {
    var horaEscolhaCampo;
   $('input').bind('focus',function(){
       var pos = $(this).offset();
       var width = $(this).width();
       $('.horaEscolha').css('left',pos.left+width+7).css('top',pos.top);
       $('.horaEscolha').show();
       horaEscolhaCampo = $(this);
   });
   $('input').bind('blur',function(){
       setTimeout(function(){
           $('.horaEscolha').hide();
       },200);
   });
   $('.horaEscolha button').bind('click',function(){
       var hora = $(this).html();
       horaEscolhaCampo.val(hora);
   });
});
