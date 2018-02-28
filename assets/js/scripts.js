function buscar()
        {
            var str=document.getElementById('googlebox').value;
            str = "http://www.google.com/search?hl=en&source=hp&q=" + str + "&aq=f&oq=&aqi=";
            var replaced= str.replace(" ","+");
            window.location.replace(replaced)
        }