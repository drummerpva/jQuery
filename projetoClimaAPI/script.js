$(document).ready(function () {
    $('button').bind('click', function () {
        var cidade = $('#cidade').val();
        var now = new Date();
        var tempURL = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() + '&diagnostics=true&callback=?&q=';
        tempURL += 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+cidade+'") and u="c"';
        $.ajax({
            url:encodeURI(tempURL),
            dataType: 'json',
            type:'GET',
            success:function(data){
                if(data !== null && data.query !== null && data.query.results !== null && data.query.results.channel.description !== 'Yahoo! Weather Error'){
                    var temp = data.query.results.channel.item.condition.temp;
                    $('#resultado').html(temp+" ºC");
                }
            },
            beforeSend:function (){
                $('#resultado').html("Carregando...");
            },
            error:function(){
                $('#resultado').html("Erro!");
            }
        });
        
        //$('#resultado').html(tempURL);
    });
});

