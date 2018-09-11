// logic here
function typeText(element, speed){
  //   save text to write
  var textToWrite = element.textContent;
  
  //   Remove text from element
  element.innerHTML = "";
  
  //   size of text for cicle
  var textSize = textToWrite.length;
  
  //   Setting up the text on screen
  for (var i=0; i<textSize; i++){    
      (function(i) {
          setTimeout(function(){
            element.innerHTML+=textToWrite.charAt(i);
          }, speed * i);
      })(i);
  }
}


var elementToWrite = document.getElementById("text");

var speedOfEffect = 200;

this.typeText(elementToWrite, speedOfEffect);