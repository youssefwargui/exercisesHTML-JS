var lis= document.querySelectorAll("li")
var ol = document.querySelector("ol")

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


var input = document.createElement("input");
input.placeholder = "type task";
input.type = "text"

var button = document.createElement("button");
button.textContent = "add"

var div = document.createElement("div");
div.append(input, button);
document.body.append(div)

var textvalidation = document.createElement("p")
textvalidation.textContent = "you need to fill input"
textvalidation.style.color = "red"

button.addEventListener("click", function () {
 if (input.value === "") {
  div.append(textvalidation)
    return 
 }
  var newli = document.createElement("li");
  newli.textContent = input.value;
  ol.append(newli);
  input.value = ""
})

// ol.addEventListener("click" , function (task) {
//     task.target.remove()
// })


ol.addEventListener("click" , function (task) {
    if (task.target.value) {
        console.log(true);
    }
    document.ol.style.text-decoration = "line-through"
})


