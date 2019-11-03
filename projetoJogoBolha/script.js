function addBola(){
    var x = Math.floor(Math.random()*800);
    var y = Math.floor(Math.random()*500);
    var cor = Math.floor(Math.random()*4)
    
    
    //$('<div class="bola"></div>').appendTo(document.body);
    var bola = $("<div class='bola'></div>");
    bola.css('left',x+'px');
    bola.css('top',y+'px');
    switch(cor){
        case 0:bola.css('background-color','blue');break;
        case 1:bola.css('background-color','red');break;
        case 2:bola.css('background-color','yellow');break;
        case 3:bola.css('background-color','black');break;
        case 4:bola.css('background-color','green');break;
    }
    bola.bind('click',function(){
        $(this).fadeOut('fast');
        placar++;
        updatePlacar();
    });
    $(document.body).append(bola);
}
var placar = 0;
function updatePlacar(){
    $('#placar').html(placar);
}
$(document).ready(function () {
    $('button').bind('click',function(){
        setInterval(addBola,1000);
    });
});

