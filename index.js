//Sole Developer: Aiden J

class Garbage{
  constructor(name, type){
    //All types must be r, l, or c
    this.name = name
    this.type = type
  }
}

var prompts = [
  new Garbage("Plastic Water Bottle", "r"),
  new Garbage("Glass Bottle", "r"),
  new Garbage("Soda Can", "r"),
  new Garbage("Banana Peel", "c"),
  new Garbage("Cereal Box", "r"),
  new Garbage("Notebook", "r"),
  new Garbage("Copy Paper", "r"),
  new Garbage("Egg Shells", "c"),
  new Garbage("Brocoli", "c"),
  new Garbage("Carrot", "c"),
  new Garbage("Fish Bones", "c"),
  new Garbage("#3-#7 Plastics", "l"),
  new Garbage("Paper Takeout Container", "l"),
  new Garbage("Hat", "l"),
  new Garbage("Plastic Shopping Bag", "l"),
  new Garbage("Rubber", "l"),
  new Garbage("Leather", "l")
]

function randomize(arr){
  for(var i = 0; i < arr.length; i++){
    var num = Math.floor(Math.random() * arr.length)
    var temp1 = arr[i]
    arr[i] = arr[num]
    arr[num] = temp1
  }
  return arr
}

prompts = randomize(prompts)
var score = 0
var prompt = 0
var disp = document.getElementById("questionDisplay")


disp.innerHTML = prompts[prompt].name
console.log(prompts)

function submitAnswer(answer, question){
  var winSound = new Audio("mixkit-attention-bell-ding-586.wav")
  console.log(answer + " " + question)
  if(question==answer){
    winSound.play()
    score++
  }
  //Pick New Prompt
  prompt++
  disp.innerHTML = prompts[prompt].name
  if(prompt == prompts.length-1){
    disp.innerHTML = score + "/" + prompt
  }
}

