import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = () => {
  document.querySelector('#btn').addEventListener("click", () =>{
   document.querySelector('#the-excuse').innerHTML = generarExcusa();
   })
   
  console.log("Hello Rigo from the console!");

};


let generarExcusa = () => {
  
  let pronoun = ['A', 'The'];
  let subjet = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pincone'];
  let action = ['took my', 'threw my', 'yelled at my', 'stole my', 'bit my'];
  let possesion = ['homework', 'toe', 'car', 'shoe'];
  let where = ['on the street', 'in my house', 'in my driveway'];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subjet.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
 



  return pronoun[proIndx] + ' ' + subjet[subjIndx] + ' ' + action[actionIndex] + ' ' + possesion[possesionIndex] + ' ' + where[whereIndex] + ' ';

};