//$(function(){
$(document).ready(function () {
    $('button').bind('click', function () {
        //load() método auxiliar do Ajax para carregar outra página dentro de alguma componente
        //$('.div').load('teste.html');
        //get() auxiliar que enviar parametros via GET - carregar um arquivo
        /*$.get('teste.html',function(data){
            $('.div').html(data);
        });*/
        //post() auxiliar que enviar parametros via POST - carregar um arquivo
        /*$.post('teste.html',function(data){
            $('.div').html(data);
        });*/
    });
    $('#form').bind('submit',function(e){
       e.preventDefault();
       var txt = $(this).serialize();
       console.log(txt);
       /*
        * Metodo ajax e seus parametros
        */
       $.ajax({
           type: 'POST',
           url: 'ajax.php',
           data:txt,
           dataType:'json',
           success:function(json){
               console.log(json);
              if(json.status == "ok"){
                  alert("Logado");
              }else{
                  alert("Login Errado!");
              }
           },
           error:function(){
             console.log('Erro');  
           }
       });
       
   });


});
