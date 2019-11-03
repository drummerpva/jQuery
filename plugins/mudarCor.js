(function($){
    $.fn.mudarCor = function(cor){
        this.each(function(){
            $(this).css('color',cor).css('text-decoration','none');
            $(this).hover(function(){
                $(this).css('background-color','#CCC');
            },function(){
                $(this).css('background-color','#FFF');
            });
        });
        return this;
    }
}(jQuery));