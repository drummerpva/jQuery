$(document).ready(function () {
    $('form').bind('submit',function(e){
        e.preventDefault();
        var altura = $('#altura').val();
        var peso = $('#peso').val();
        altura = altura.replace(',','.');
        peso = peso.replace(',','.');
        var imc = peso / (altura*altura);
        if(imc < 16){
            var desc = "Baixo peso muito grave";
        }else if(imc < 16.99){
            var desc = "Baixo peso grave";
        }else if(imc < 18.49){
            var desc = "Baixo peso";
        }else if(imc < 24.99){
            var desc = "Peso Normal";
        }else if(imc < 29.99){
            var desc = "Sobrepeso";
        }else if(imc < 34.99){
            var desc = "Obesidade 1";
        }else if(imc < 39.99){
            var desc = "Obesidade 2";
        }else{
            var desc = "Obesidade 2";
        }
        
        $('#resultado').html('Seus IMC é '+imc+' kg/m² <br/>Você esta: '+desc);
    });
});
