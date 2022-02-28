
 
(function  (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  
    console.log( helloSpeaker.speak());
    console.log(byeSpeaker.speak());
  }
  )();

  (function  (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    
    var firstLetter ;
    for (var i=0;i<names.length;i++){
     
      if(names[i].charAt(0).toLowerCase()=='j'){
        firstLetter= names[i];
        if (firstLetter.charAt(0)=="j"){
          console.log(byeSpeaker.speakWord+ ''+firstLetter)
        }
        else{
          console.log(helloSpeaker.speakWord+''+firstLetter)
        }
      }
    
  }})();
  
