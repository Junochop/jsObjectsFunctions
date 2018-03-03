//Challenge 2: functions
//2 types: 1.  function expression 

var a = function() {
  console.log(3)  
};

//2. function declarations

function b(){
    console.log("b", 2);
}

var num = 3;

function numPrinter(monkeyButt) {
    //monkeButt = num = 3
    
    console.log("my number: ", monkeyButt);
}

numPrinter(num);
numPrinter(4);
numPrinter(6); 
numPrinter("mike");

function cat() {
    return "love Them"
}

var message =  cat();
console.log("message", message); 

//return is only way get value out of FUNCTION!!!!

var instructorsPets = [
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil cat",
        isFavorite: true
    },
    {
        instructorName: "Pam",
        petName: "Louis",
        animalType: "drunk cat",
        isFavorite: true
    },
    {
        instructorName: "Zack",
        petName: "Syko",
        animalType: "crazy cat",
        isFavorite: false
    },
    {
        instructorName: "Hock",
        petName: "Pickle",
        animalType: "lazy cat",
        isFavorite: true
    },
    {
        instructorName: "Mary",
        petName: "Pink",
        animalType: "singing cat",
        isFavorite: true
    }


];

var petDiv = document.getElementById("pet-name");

var domMessage = "";

function domStringMaker(animalArray) { 
// take pet names and create dom string
// call printToDom function
    for(var i = 0; i < animalArray.length; i++){
        var animalString = "<h1>" + animalArray[i].petName + "</h1>";
        printToDom(animalString, "pet-names"); 
    //hard coding "pet-names"; why not Return?? 2 return will quit the function, no idea what or how many things in the array
     }
}




function printToDom(stringToPrint, divId){  
// take string and innerHTML to the divId
  var  myDiv = document.getElementById(divId);
  myDiv.innerHTML += stringToPrint;
//how long the array is.  so it should call 5 times
} 

domStringMaker(instructorsPets);


// challenge 3: display each pet as card
//display name, owner, type, if pet is fav background tobe green if not background to be red
