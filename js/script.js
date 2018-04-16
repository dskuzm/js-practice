httpGet()

function httpGet() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "https://api.github.com/search/repositories?q=$test", true);

    xmlHttp.onreadystatechange = function (oEvent) {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
              console.log(xmlHttp.responseText)
            } else {
               console.log("Error", xmlHttp.statusText);
            }
        }
    };

    xmlHttp.send(null);
}









