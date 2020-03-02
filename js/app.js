function displayAnswer(input) {
  var answer = rot13(input);
  console.log(answer);
  document.getElementById('answer').innerHTML = "<p>"+answer+"</p>"
}

var elem = document.getElementById("cipher");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       console.log('you hit enter');
       var  myArgument = document.getElementById("cipher").value;
       displayAnswer(myArgument);
    }
}

function rot13(str) { // LBH QVQ VG!
    var myAnswer = ""
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (var i = 0; i < str.length; i++){
      var regex = /[a-zA-Z]/;
      if(regex.test(str[i])){
       var index = alphabet.indexOf(str[i]);
       index = index - 13;
       if(index < 0){
         index = index + 26
       }
        myAnswer = myAnswer + alphabet[index]
      } else {
        myAnswer = myAnswer +str[i];
      }
    }
    console.log(myAnswer)
    return myAnswer;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  