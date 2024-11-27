// Part 1: Number Facts
let baseURL = "http://numbersapi.com";
let favNumber = 2;

// 1.
async function getNumberFact(num) {
  let numberData = await $.getJSON(`${baseURL}/${num}?json`);
  console.log(numberData.text)
}

getNumberFact(favNumber);


// 2.
const numbers = [2, 22, 222, 2222];

async function getNumberData(arr){
  let data = await $.getJSON(`${baseURL}/${arr}?json`);

  for (let key in data) {
    const p = document.createElement("p");
    p.textContent = `${key}: ${data[key]}`;
    document.body.appendChild(p);
  }
}

getNumberData(numbers);


// 3.
async function getNumberFacts(num, factAmount) {
  for (let i = 0; i < factAmount; i++) {
    let data = await $.getJSON(`${baseURL}/${num}?json`);
    
    const p = document.createElement("p");
    p.textContent = data.text; 
    document.body.appendChild(p); 
  }
}

getNumberFacts(favNumber, 4); 

