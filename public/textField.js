define(["css!/textField.css"], function(){
    var html = "<input type=text value=0 name=textfield>";
    var textFieldClass = function(){
        var own = this;
        own._view = $(html);
        own._view.attr("class","textField");
        own.setText = function(value){ 
            $(own._view).val(value);

        }
        own.getText = function(){ 
            return own._view.val();
        }

    }
    return textFieldClass;
});