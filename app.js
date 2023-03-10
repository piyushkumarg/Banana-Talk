var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time...");
}

function clickHandler() {
  var inputText = txtInput.value;
  //console.log(inputText);

  // calling server for processing
  fetch(getTranslation(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      txtOutput.innerText = translatedText; //output
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
