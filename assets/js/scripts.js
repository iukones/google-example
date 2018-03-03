function buscar() {
    var str = document.getElementById('googlebox').value;
    // str = "https://www.google.com/search?q=" + str;
    var replaced = str.replace(" ","+");
    location.assign("https://www.google.com/search?q="+str);
}

