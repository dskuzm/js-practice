var inputText = document.querySelector('[data-role=inputText]').value,
    inputSubmit = document.querySelector('[data-role=searchButton]'),
    repoLink = document.querySelector('[data-role=repoLink]');
    console.log(inputText)
    
inputSubmit.addEventListener("click", function() {
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', 'https://api.github.com/search/repositories?q=$qwe', true);
    
        xmlHttp.onreadystatechange = function (oEvent) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var obj = JSON.parse(xmlHttp.responseText);
                        var link = (obj.items[6].html_url);//test code
                        repoLink.setAttribute('href', link);
                        repoLink.innerHTML = link;
                        console.log(obj)
                } else {
                    console.log('Error', xmlHttp.statusText);
                }
            }
        };

        xmlHttp.send(null);
});
