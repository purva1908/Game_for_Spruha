
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log(numberOfDrumButtons);

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "dog":
      var dog = new Audio("sounds/dog.wav");
      dog.play();
      break;

    case "cat":
      var cat = new Audio("sounds/cat.wav");
      cat.play();
      break;

    case "horse":
      var horse = new Audio('sounds/horse.wav');
      horse.play();
      break;

    case "monkey":
      var monkey = new Audio('sounds/monkey.wav');
      monkey.play();
      break;

    case "parrot":
      var parrot = new Audio('sounds/parrot.wav');
      parrot.play();
      break;

    case "sparrow":
      var sparrow = new Audio('sounds/sparrow.mp3');
      sparrow.play();
      break;

   


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
