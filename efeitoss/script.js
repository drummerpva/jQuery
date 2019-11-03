//$(function(){
$(document).ready(function () { //evento depois que terminar de carregar a página
    $('#divBotao').bind('click', function () {
        /*
         * hide('slow') ou show('fast') oculta e mostra com efeito!
         * toggle('slow') altena entre mostrar e ocultar
         * sem colocar parametro ele oculta/mostra sem efeito
         */
        //$('.div').toggle('slow');




        /*
         * Usando o Fade
         * 
         */
        //$('.div').fadeOut();
        /*
         * fadeTo aumenta ou diminui a transparencia do elemento
         * 2 paramentros, velocidade e nivel de transparencia
         */
        //$('.div').fadeTo(2000,0.2);
        /*
         * fadeToggle alterna em ocultar e mostrar
         */
        //$('.div').fadeToggle('slow');





        /*
         * Usando Slide - deslizar 
         * slideUp - vai sumir indo pra cima
         * slideDown - vai aparecer indo pra baixo
         * slideToggle - alterna entre sumir e aparecer
         */
        //$('.div').slideToggle('slow');





        /*
         * Animações com Animate
         * Primeiro parâmetro um JSON com os efeitos a serem feitos
         * Segundo o tempo para fazer isso ou ou JSON com varias propriedade e funções
         */
        /*
         $('.div').animate({
         'margin-left':'100px',
         'margin-top':'20px',
         'background-color':'#FCC',
         'border-radius':'75px'
         },{
         duration:1500,
         step:function(){
         console.log('cada movimento!');  
         },
         complete:function(){
         console.log('animação finalizada!');
         },
         start:function(){
         console.log('Animação iniciou!');
         }
         });
         */
        /*
        $('.div').animate({
            'top': 80,
            'left': 400,
            'height': '50px',
            'width': '50px'
        }, {
            duration: 1500,
            complete: function () {
                $('.div').animate({
                    'top': 0,
                    'left': 0,
                    'height': '150px',
                    'width': '150px'
                }, 1500);
            }
        });
        */
       
       /*
        * FAQ - Como parar animação no meio
        * FAQ - Somar Propriedades colocar +=
        * FAQ - Diminuir Propriedades colocar +=
        */
       $('.div').animate({
            'margin-left':"+=50",
            'font-size':'30px'
        }, 200);
       
    });
    /*
     * FAQ - Como parar animação no meio
     */
    $('#divBotao2').bind('click',function(){
        $('.div').animate({
            'margin-left':"-=50",
            'font-size':'30px'
        }, 200);
        //$('.div').stop();
    });

    $('.helloBar').bind('click', function () {
        $(this).slideUp('slow');
    });

});
