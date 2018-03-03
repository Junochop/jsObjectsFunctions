console.log("hi");//WHat is an object
var favAnimal = {
    name: "zoe",
    animal: "cat"

};

console.log (favAnimal.animal, favAnimal['animal']);



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

console.log("instructor pets", instructorsPets);

//Challenge 1:
//div with id "pet-names"
//loop through insturctorPet and pring petName as h1 tag

var newPetName = " "; 
for (var i = 0; i < instructorsPets.length; i++){
    
    newPetName += instructorsPets[i].petName + ", ";
    document.getElementById("pet-names").innerHTML = "<h1>" + newPetName + "</h1>";

}
// option 1
var petDiv = document.getElementById("pet-names");
for (var j =0; j < instructorsPets.length; j++){
    petDiv.innerHTML += "<h2>" + instructorsPets[j].petName + "</h2>";
} 


