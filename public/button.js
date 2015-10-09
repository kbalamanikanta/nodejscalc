define(['css!/button.css'], function(){
    var html = "<button></button>";
    var buttonClass = function(){
        var own = this;
        own._view = $(html);

        $(own._view).on("click", function(){
            
        })
        own.setText = function(text){
            $(own._view).html(text);
        }
        
    }
    return buttonClass;
});