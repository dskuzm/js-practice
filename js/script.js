var inputValue = document.getElementById('search').value,
    inputSubmit = document.getElementById('submit'),
    repoLink = document.getElementById('repoLink');

inputSubmit.addEventListener("click", function() {
    var inputValue = document.getElementById('search').value,
        xmlHttp = new XMLHttpRequest();
        
        xmlHttp.open('GET', 'https://api.github.com/search/repositories?q=$'+ inputValue, true);
    
        xmlHttp.onreadystatechange = function (oEvent) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var obj = JSON.parse(xmlHttp.responseText);
                        var link = (obj.items[6].html_url);//test code
                        repoLink.setAttribute('href', link);
                        repoLink.innerHTML = link;
                        console.log(obj);
                } else {
                    console.log('Error', xmlHttp.statusText);
                }
            }
        };

        xmlHttp.send(null);
});
