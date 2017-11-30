
$Dojo(document).ready(function(){
    $Dojo("myBtn").click(function(){
        console.log("Button was clicked");
        $Dojo("info").innerHTML = "Button was clicked";
    });

    handlerIn = function() {
        console.log("Mouse enter");
    }

    handlerOut = function() {
        console.log("Mouse leave");
    }

    $Dojo("myBtn").hover(handlerIn, handlerOut);
    
});