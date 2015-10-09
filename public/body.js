define(function(){
    window.bodyClass = function(){
        bodyClass.prototype.append = function(c)    {
            $("body").append(c._view)
        }
    }
});





