function buscar() {
    var str = document.getElementById('googlebox').value;            
    str = "https://www.google.com/search?hl=en&source=hp&q=" + str + "&btnG=Buscar&meta=";            
    var replaced = str.replace(" ","+");            
    window.location.replace(replaced);            
}

// function redireccionar(){
//     location.href="http://localhost:8887/google-example/";
// }

// setTimeout ("redireccionar()", 10000);