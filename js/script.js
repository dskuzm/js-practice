var inputSubmit = document.querySelector('[data-role=searchButton]'),
    inputHolder = document.querySelector('[data-role=inputHolder]'),
    listLink = document.querySelector('[data-role=listLink]'),
    inputText = document.querySelector('[data-role=inputText]');


inputText.addEventListener("change", checkInputValue);
inputSubmit.addEventListener("click", getData);
inputSubmit.addEventListener("click", clear);




// если инпут не пустой или пустой
function checkInputValue() {
    if ( this.value === '') {
        inputSubmit.setAttribute('disabled', 'true');
    } else {
        inputSubmit.removeAttribute('disabled');     
    }
};



function getData() {
  var xmlHttp = new XMLHttpRequest(),
      inputText = document.querySelector('[data-role=inputText]').value;
      xmlHttp.open('GET', 'https://api.github.com/search/repositories?q=$' + inputText, true);

      xmlHttp.onload = function (oEvent) {
          if (xmlHttp.readyState === 4) {
              if (xmlHttp.status === 200) {
                  var data = JSON.parse(xmlHttp.responseText),
                      link = (data.items[1].html_url);
                
                  var newLink = document.createElement('a');
                      newLink.setAttribute('href', link);
                      newLink.setAttribute('class', 'new-link');
                      newLink.innerHTML = link;
                
                  var closeIcon = document.createElement('span');
                      closeIcon.setAttribute('class', 'close-icon');
                      closeIcon.innerHTML = 'X';

                  var newLi = document.createElement('li');
                      listLink.appendChild(newLi);
                      newLi.appendChild(closeIcon);
                      newLi.appendChild(newLink);

              } else {
                  console.log('Error', xmlHttp.statusText);
              }
          }
      };
      xmlHttp.send(null);
};

function clear() {
  inputText = inputText.val = 'qweqwreqwr';
  console.log(inputText);
  console.log(typeof inputText);
}






// click on icon close and delete parent
// var imageList = document.querySelector(".image-list");
// imageList.addEventListener("click", removeClickedBlock);

// imageList.addEventListener("click", removeClickedBlock);


// function removeClickedBlock(e) {
//     console.log(e)
//     var el = e.target,
//         imageContainer,
//         list;
//         imageContainer = el.parentNode;
//         list = imageContainer.parentNode;
//         list.removeChild(imageContainer);
//   };































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
