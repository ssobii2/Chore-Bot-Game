let doorImage1 = document.getElementById("door1")
let doorImage2 = document.getElementById("door2")
let doorImage3 = document.getElementById("door3")
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById("start")
let currentlyPlaying = true
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"

function isBot(door) {
  if (door.src === botDoorPath) {
    return true
  } else {
    return false
  }
}

function isClicked(door) {
  if (door.src === closedDoorPath) {
    return false
  } else {
    return true
  }
}

function playDoor(door) {
  numClosedDoors--
  if (numClosedDoors === 0) {
    gameOver("win")
  } else if (isBot(door)) {
    gameOver()
  }
}

doorImage1.onclick = function () {
  if(!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1
    playDoor(doorImage1)
  }
}
doorImage2.onclick = function () {
  if(!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2
    playDoor(doorImage2)
  }
}
doorImage3.onclick = function () {
  if(!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3
    playDoor(doorImage3)
  }
}
startButton.onclick = function () {
  if (!currentlyPlaying) {
    startRound()
  }
}

function startRound() {
  numClosedDoors = 3
  doorImage1.src = closedDoorPath
  doorImage2.src = closedDoorPath
  doorImage3.src = closedDoorPath
  startButton.innerHTML = "Good luck!"
  currentlyPlaying = true
  randomChoreDoorGenerator()
}

function gameOver(status) {
  if (status === "win") {
    startButton.innerHTML = 'You win! Play again?'
  } else {
  startButton.innerHTML = 'Game over! Play again?'
}
currentlyPlaying = false
}

function randomChoreDoorGenerator() {
  let choreDoor = Math.floor(Math.random() * numClosedDoors)
  if(choreDoor === 0) {
    openDoor1 = botDoorPath
    openDoor2 = spaceDoorPath
    openDoor3 = beachDoorPath
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath
    openDoor2 = botDoorPath
    openDoor3 = spaceDoorPath
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = botDoorPath
  }
}
startRound()