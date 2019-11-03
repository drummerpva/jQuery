$(document).ready(function () {
    $('.icone').hover(function(){
        $(this).animate({
            'width':'100px',
            'height':'100px',
            'margin-top':'-30'
        },200);
    },function(){
        $(this).animate({
            'width':'70px',
            'height':'70px',
            'margin-top':'0'
        },200);
    });
});
