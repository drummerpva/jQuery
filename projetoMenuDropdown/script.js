$(document).ready(function () {
    $('li').hover(function(){
        $(this).find('.menu2').slideDown('fast');
    },function(){
        $(this).find('.menu2').slideUp('fast');
    });

});
