var color = prompt("choisir votre couleur (green , blue , red)")
var img = document.querySelectorAll("img")
var btn = document.querySelector("button")

btn.addEventListener("click" , function () {
    
    if (color === "green") {
    document.body.style.backgroundColor = "green"
} else if (color === "blue") {
    document.body.style.backgroundColor = "blue"
} 
else if (color === "red") {
    document.body.style.backgroundColor = "red"
} 
})

// while (true) {
//     if (color === "green" || color === "blue" || color === "red" ) {
//         
//         break 
//     }
//      (color === "") {
//         alert("Invalid input. Please type green, blue, or red")
//     }
// }

// if (color === "green") {
//     document.textContent.style.color = "green"
//     document.border.color = "green"
// }
// else if (color === "blue") {
//     document.textContent.style.color = "blue"
//     document.border.color = "blue"
// }
// else if (color === "red") {
//     document.textContent.style.color = "red"
//     document.border.color = "red"
// }
// alert(color + "theme applied! Changer l’image")



// btn.addEventListener("click" ,function () {
//     var color = prompt("choisir votre couleur (green , blue , red)")
//     if (color.value === "green") {
//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Wzo2YMfFwDoCi5R2n2qtVuLqOi1kYemNgQ&s"
//     }
//     else if (color.value === "blue") {
//         img.src = "https://images.freeimages.com/images/large-previews/d35/serene-blue-sky-0410-5701786.jpg?fmt=webp&w=500"
//     }
//     else if (color.value === "red") {
//         img.src = "https://study.com/cimages/multimages/16/autumn23bf183d-fa1e-4365-8c6d-a0095e0ab789.jpg"
//     }
// })






