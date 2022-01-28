window.onload = function() {
    var menu = document.getElementById('menu');

    menu.onclick = function myFunction() {
        var x = document.getElementById("myHeader-top__nav");
        if(x.className === "header-top__nav"){
            x.className += " responsive";
        }else{
            x.className = "header-top__nav"
        }
    }
};