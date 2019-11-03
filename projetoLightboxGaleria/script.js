$(document).ready(function () {
    $('a.galeria').bind('click',function(){
        var img = $(this).find('img').attr('src');
        console.log(img);
        $('.divBox img').attr('src',img);
        $('.bgBox, .divBox').fadeIn('fast');
    });
    $('.bgBox, .divBox button').bind('click',function(){
       $('.bgBox').fadeOut('fast'); 
       $('.divBox').fadeOut('fast'); 
    });
    


});

