var three="3";
function alertNumber(){
    var one = "1";
    alert(one);
    function alertAnotherNUmber(){
        var two="2";
        alert(two);
        alert(three);
        alert(one);
    }
    alertAnotherNUmber();
    
}
alertNumber();
alert(one);
