// JavaScript Document

// var foundYou = document.getElementById('sw_list');
// console.log(foundYou);
// var childArray = foundYou.getElementsByTagName('li');
// console.log(childArray)
// childArray[0].innerText = "These Items";
// childArray[1].innerText = "These Items";
// childArray[2].innerText = "These Items";


// var newOptions = ["Orange", "Red", "Blue" ];

// var foundYou = document.getElementById('myForm')
// console.log(foundYou)

// var selectArray = foundYou.getElementsByTagName('option');
// console.log(selectArray)

// for (let i = 0; i < selectArray.length; i++) {
//     selectArray[i].innerText = newOptions[i];
// }

//combination 2 allows us to take newOptions array and set it to innetText of optionsDOM

var foundYou = document.getElementById('myForm');
console.log("this is the Form", foundYou);

var seletArray = foundYou.getElementsByTagName('input');
console.log("this is the children of form", seletArray);

for (let i = 0; i < seletArray.length; i++) {
    console.log(seletArray[i].value) // asking for the value of each input value
}