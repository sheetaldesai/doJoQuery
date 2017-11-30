var $Dojo = (function () {
    function dojo(id) {
        console.log("id: ",id)
        var el
        if (id !== document) {
            el = document.getElementById(id);

            el.click = function(callback) {
                el.addEventListener("click",callback);
            }

            el.hover = function(handlerIn, handlerOut) {
                el.addEventListener('mouseenter',handlerIn);
                el.addEventListener('mouseleave', handlerOut);
            }

            el.text = function(newText) {
                el.innerHTML = newText;
            }
        } else {
            el = document;
            console.log("document")
            el.ready = function(callback) {
                // Mozilla, Opera and webkit nightlies currently support this event
                if ( document.addEventListener ) {
                    // Use the handy event callback
                    document.addEventListener( "DOMContentLoaded", function(){console.log("DOM content loaded");callback()}, false );
                }
            }
        }
        return el;
    };
    return dojo;
})();





