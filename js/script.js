var inputSubmit = document.querySelector('[data-role=searchButton]'),
    inputHolder = document.querySelector('[data-role=inputHolder]'),
    listLink = document.querySelector('[data-role=listLink]'),
    inputText = document.querySelector('[data-role=inputText]');


inputText.addEventListener("input", checkInputValue);
inputSubmit.addEventListener("click", getData);
listLink.addEventListener("click", removeItem);

function checkInputValue() {
    if ( inputText.value === '') {
        inputSubmit.setAttribute('disabled', 'true');
    } else {
        inputSubmit.removeAttribute('disabled');
    }
};

function removeItem(event) {
    if (!event.target.classList.contains('remove-button')) return;
    event.target.parentNode.hidden = !event.target.parentNode.hidden;
}

function getData() {
  var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', 'https://api.github.com/search/repositories?q=$' + inputText.value, true);

      xmlHttp.onload = function (oEvent) {
          if (xmlHttp.readyState === 4) {
              if (xmlHttp.status === 200) {
                  var data = JSON.parse(xmlHttp.responseText)
                      link = (data.items[1].html_url);
                //   console.log(data);
                  console.log(typeof data);
                //   data.items;

                    //   link = (data.items[1].html_url),
                    //   newLi = document.createElement('li'),
                    //   liItem = '<button class="remove-button" data-role="close">close</button><a class="new-link" href="' + link + '" target="_blank">' + link + '</a>';
                    //   newLi.innerHTML = liItem;
                    //   listLink.appendChild(newLi);

                    //   inputText.value = '';
                    //   checkInputValue();
                    createLocalStorage()
                    function createLocalStorage() {
                        var obj = [
                            {
                                obj.push(data.items[1]);
                            }

                        ];

                            

                        // var serialObj = JSON.stringify(obj); //сериализуем его

                        localStorage.setItem("myKey", obj); //запишем его в хранилище по ключу "myKey"

                        // var returnObj = JSON.parse(localStorage.getItem("myKey")) //спарсим его обратно объект

                    }
              } else {
                  console.log('Error', xmlHttp.statusText);
              }
          }
      };
      xmlHttp.send(null);
};











// backup
// var inputSubmit = document.querySelector('[data-role=searchButton]'),
//     repoLink = document.querySelector('[data-role=repoLink]'),
//     inputText = document.querySelector('[data-role=inputText]');


// inputText.addEventListener("change", getData);

// function getData() {
//     if ( this.value === '') {//if input is empty
//         inputSubmit.setAttribute('disabled', 'true');

//     } else {//if user write some text
//         inputSubmit.removeAttribute('disabled');
//         inputSubmit.addEventListener("click", function() {
//             var xmlHttp = new XMLHttpRequest(),
//                 inputText = document.querySelector('[data-role=inputText]').value;
//                 xmlHttp.open('GET', 'https://api.github.com/search/repositories?q=$' + inputText, true);
        
//                 xmlHttp.onload = function (oEvent) {
//                     if (xmlHttp.readyState === 4) {
//                         if (xmlHttp.status === 200) {
//                             var data = JSON.parse(xmlHttp.responseText),
//                                 link = (data.items[1].html_url);
//                                 repoLink.setAttribute('href', link);
//                                 repoLink.innerHTML = link;
//                                 console.log(data);
//                         } else {
//                             console.log('Error', xmlHttp.statusText);
//                         }
//                     }
//                 };
//                 xmlHttp.send(null);
//         });
        
//     }
// };

// function addCloseAttr() {
//   repoLink.setAttribute('href', link);
//   repoLink.innerHTML = link;
//   console.log(data);
// }

// click on icon close and delete parent
// var imageList = document.querySelector(".image-list");
// imageList.addEventListener("click", removeClickedBlock);
































// function  toDoList() {
//     var inputText = [document.getElementById("inputText").value];
//     for (var i = 0; i <= 0; i++) {
//         if (inputText.length >= 1) {
//             var newLi = document.createElement('li');

//             newLi.setAttribute( 'class', 'item' );
//             newLi.innerHTML = inputText;
//             list.appendChild(newLi);
//             localStorage.setItem('key', inputText )
//             console.log( inputText[0] );
//             // showMylist()
//         } else{
//             alert("Вы ничего не ввели");
//         }
//     }
//     resetForm();
// }
