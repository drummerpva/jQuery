
$(document).ready(function(){
    //Trim retira espações em braco de fora e dentro
console.log($.trim($('#algo').html()));
console.log($.trim($('li:eq(2)').html()));
//loop passando em todos os itens selecionadios e executa a função em todos
$('li').each(function(){
    console.log('To no li');
});

//verificar tipo do objeto
var numero = 0;
console.log($.type(numero));

});