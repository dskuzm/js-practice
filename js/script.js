var inputSubmit = document.querySelector('[data-role=searchButton]'),
    repoLink = document.querySelector('[data-role=repoLink]');
    
inputSubmit.addEventListener("click", function() {
    var xmlHttp = new XMLHttpRequest(),
        inputText = document.querySelector('[data-role=inputText]').value;
        xmlHttp.open('GET', 'https://api.github.com/search/repositories?q=$' + inputText, true);
    
        xmlHttp.onload = function (oEvent) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var data = JSON.parse(xmlHttp.responseText);
                        var link = (data.items[6].html_url);
                        repoLink.setAttribute('href', link);
                        repoLink.innerHTML = link;
                        console.log(data)
                } else {
                    console.log('Error', xmlHttp.statusText);
                }
            }
        };

        xmlHttp.send(null);
});
