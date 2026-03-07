var lis= document.querySelectorAll("li")
var ol = document.querySelector("ol")
var input = document.querySelector("input");
var button = document.querySelector("button");
var div = document.querySelector("div");
var h1 = document.querySelector("h1")


var todos = [{
  id: 1,
  value: "Apprendre JS",
  date: "2026-03-02",
  completed: false
}
,
{
  id: 2,
  value: "Apprendre HTML",
  date: "2026-05-02",
  completed: false
},
{ 
    id: 3,
  value: "Apprendre CSS",
  date: "2026-07-02",
  completed: false
}]




var validtask = document.createElement("p")
validtask.textContent = "you need to add task"
validtask.style.color = "red"

button.addEventListener("click", function () {
 if (input.value === "") {
  div.append(validtask)
    return 
 }
  var newli = document.createElement("li");
  newli.textContent = input.value;
  ol.append(newli);
  input.value = ""
})


todos.forEach(function () {
  var counter = 3
  var newTask = {
        id: counter,
        value: input.value,
        date: new Date(),
        completed: false
    }
    todos.push(newTask);
    counter++;
    console.log(todos)
})

ol.addEventListener("dblclick" , function (task) {
    task.target.remove()
})


ol.addEventListener("click" , function (task) {
    if (task.target.value) {
        console.log(true);
    }
    task.target.textdecoration = "line-through"
    task.target.style.opacity= "0.6"
})

function compteur() {
  var counter = 0
  if (task.target.remove() || ol.append(newli)) {
   h1.textContent =  counter++
  }
  console.log(h1);
}



