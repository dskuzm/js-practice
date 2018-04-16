getApi()

function getApi() {
    // debugger
    var inputValue = document.getElementById('search').value,
        xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open("GET", "https://api.github.com/search/repositories?q=$test", true);

    xmlHttp.onreadystatechange = function (oEvent) {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                var obj = JSON.parse(xmlHttp.responseText);
                console.log(obj);
            } else {
                console.log('Error', xmlHttp.statusText);
            }
        }
    };

    xmlHttp.send(null);
}





