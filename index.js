document.addEventListener("DOMContentLoaded", function () {
    var currentAudio = null; // Variable to store the currently playing audio
  
    var soundBtns = document.querySelectorAll(".animals").length;
    for (let i = 0; i < soundBtns; i++) {
      document.querySelectorAll(".animals")[i].addEventListener("click", function () {
        var animalSounds = this.innerHTML;
        if (currentAudio !== null) {
          // If there's a currently playing audio, pause it
          currentAudio.pause();
        }

        this.classList.add("pressed");
        switch (animalSounds) {
          case "dog":
            currentAudio = new Audio("sounds/dog.mp3");
            break;
          case "cat":
            currentAudio = new Audio("sounds/cat.mp3");
            break;
          case "bird":
            currentAudio = new Audio("sounds/bird.mp3");
            break;
          case "cow":
            currentAudio = new Audio("sounds/cow.mp3");
            break;
          case "chicken":
            currentAudio = new Audio("sounds/chicken.mp3");
            break;
          case "goat":
            currentAudio = new Audio("sounds/goat.mp3");
            break;
          case "pig":
            currentAudio = new Audio("sounds/pig.mp3");
            break;
          case "duck":
            currentAudio = new Audio("sounds/duck.mp3");
            break;
          case "cricket":
            currentAudio = new Audio("sounds/cricket.mp3");
            break;
          default:
            break;
        }
        if (currentAudio !== null) {
          // If there's a new audio, play it
          currentAudio.play();
        }

        setTimeout(() => {
            this.classList.remove("pressed");
            
        }, 200);
      });
    }
  });
  
  function buttonAnimation(){

  }