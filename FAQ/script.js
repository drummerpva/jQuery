
$(document).ready(function(){
//1 - Saber se elemento existe na tela
if($('.filha').length > 0){
    console.log("existe!");
}else{
    console.log('não existe!');
}
//2 - Ssaber se elemento tem uma classe especifica
if($('span').hasClass('filha')){
    console.log('Tem a classe!');
}else{
    console.log("não tem a classe!");
}

//3 - Ativar/Desativar elemento do formulario
$('input').attr('disabled','disabled');
$('input').removeAttr('disabled');
//$('#chkbox').attr('checked','checked');
//$('#chkbox').removeAttr('checked');

//4 - Pegar item de selecionado de SELECT]
console.log($('select').val());

//5 - PEgar/altera 1 elemento da lista
$('li:eq(2)').html('Alterei').css('color','purple');
//$('li').eq(2);
console.log($('li:eq(1)').html());
$('li').eq(4).remove();

//6 - Pegar elementos com javascript nativos - básica especifica a posição do array que o jquery pega
$('li').eq(0)[0].innerHTML = "Alguma Coisa Nativa";


});