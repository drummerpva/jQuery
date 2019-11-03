//$(function(){
$(document).ready(function () { //evento depois que terminar de carregar a página
    $('button').click(function () {
        /*
         if($(this).hasClass('fundoVermelho')){
         $(this).removeClass('fundoVermelho');
         }else{
         $(this).addClass('fundoVermelho');
         }
         */
        //metodo auxiliar
        $(this).toggleClass('fundoVermelho');
        console.log('Clicou no botão!');
    });
    
    
    
    
    
    
    /*
     $('button').mouseover(function () {
     console.log("MouseOver - Quando colocar o mouse");
     });
     $('button').mouseout(function () {
     console.log("MouseOut - Quando tirar o mouse");
     });
     */
    /*
     * eventos auxiliadores
     * ao passar o mouse com dois parametros
     */
    $('button').hover(function () {
        console.log("MouseOver - Quando colocar o mouse");
    }, function () {
        console.log("MouseOut - Quando tirar o mouse");
    });
    //ao passar o mouse com um parametro
    $('input').hover(function () {
        $(this).toggleClass('fundoVermelho');
    });





     /*
      *Formas de adicionar eventos 
     */
    //$('input').click(function(){console.log("Clicou - CLICK");});
    $('input').bind('click', function () {
        console.log("Clicou - BIND");
        /*
         *Acionar FALSOS eventos 'TRIGGERS' 
         */
        $('button').trigger('click');
    });
    //$('input').on('click',function(){console.log("Clicou - ON");});
    $('h1').bind('mouseover', function () {
        console.log("MouseOver - bind");
    });



    /*
     *Remover eventos 
     */
    $('input').unbind('click');
    $('button').off('click');


    /*
     * Propriedades padrão em um evento
     */
     $('#botaoForm').bind('click',eventoBotao);
     $('#botaoForm').bind('mouseover',eventoBotao);
     
     /*
      * Eventos do Browser - Scroll e Resize
      */
     $('#texto').bind('scroll',function(){
         console.log("Evento Scroll");
         $(this).css('background-color',"#EEE");
     });
     $(window).bind('resize',function(){
         console.log("mudou tamanho da tela!");
     });
     
     /*
      * Eventos de formulários
      */
     
     $('#form').bind('submit',function(e){
         e.preventDefault();
         console.log("FOrmulario Submitado!");
         
     });
     $('#nomeF').bind('select',function(){
        console.log('Nome selecionado!'); 
     });
     $('#nomeF, #email').bind('focus',function(){
        console.log('Nome Focado!'); 
     });
     $('#nomeF, #email').bind('blur',function(){
        console.log('Nome Perdeu Foco!'); 
     });
     $('#idade').bind('change',function(){
        console.log($(this).val());
     });
     
     
     /*
      * Eventos no teclado
      */
     $('#nomeF').bind('keydown',function(){
        console.log('Pressionou a tecla - keydown'); 
     });
     $('#nomeF').bind('keyup',function(e){
         var txt = $(this).val();
         if(e.keyCode == 13){
             alert("Enviou mensagem com ENTER! Conteudo: "+txt);
             $(this).val('');
         }
        console.log('soltou a tecla - keyup',e.keyCode); 
     });
     
     
     
     /*
      * Eventos no mouse
      */
     $('.botao').bind('mousedown',function(){
         console.log('Presionou o botao do mouse - mousedown');
     });
     $('.botao').bind('mouseup',function(){
        console.log('Solta o botão do mouse - mouseup') ;
     });
     $('.botao').bind('mousemove',function (){
        console.log('movi o mouse no elemento - mousemove'); 
     });
     $('.botao').bind('mouseover',function (){
        console.log('Mouse entrou no elemento - mouseover'); 
     });
     $('.botao').bind('mouseout',function (){
        console.log('Mouse saiu do elemento - mouseout'); 
     });
     $('.botao').bind('click',function (){
        console.log('Clicou - click'); 
     });
     $('.botao').bind('dblclick',function (){
         alert('Double Click');
        console.log('Dois clicks - dbclick'); 
     });
     
     


});


//pegar parametros do evento
function eventoBotao(e){
    e.preventDefault(); //cancela a ação padrão 
    console.log(e.target);
    alert(e.type);//ver qual evento ocorreu
}