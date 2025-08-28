
// Part 1: Basics

function checkTemperature() {
  // Variable declaration and user input
  let temp = prompt("Enter current temperature in °C:");
  temp = Number(temp);

  // Conditional check
  if (temp >= 30) {
    document.getElementById("tempResult").textContent = "It's hot outside!";
  } else if (temp >= 20) {
    document.getElementById("tempResult").textContent = "The weather is pleasant.";
  } else {
    document.getElementById("tempResult").textContent = "It's quite cold.";
  }
}


// Function 1: Calculate area of a rectangle
function getArea(length, width) {
  return length * width;
}
function calculateArea() {
  let l = Number(prompt("Enter length:"));
  let w = Number(prompt("Enter width:"));
  let result = getArea(l, w);
  document.getElementById("areaResult").textContent = "Area: " + result;
}

// Function 2: Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
function reverseText() {
  let input = prompt("Enter text to reverse:");
  let result = reverseString(input);
  document.getElementById("reverseResult").textContent = "Reversed: " + result;
}


// Part 3: Loops

// Example 1: for loop

function listNumbers() {
  const list = document.getElementById("numberList");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: forEach loop
function iterateNames() {
  const names = ["Alice", "Bob", "Charlie"];
  const list = document.getElementById("nameList");
  list.innerHTML = "";
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}


// Part 4: DOM Manipulation

// Example 1: Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "light yellow" ? "#fafafaff" : "lightyellow";
});

// Example 2: Add a new paragraph dynamically
document.getElementById("addNoteBtn").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "This note was added dynamically.";
  document.body.appendChild(p);
});

// Example 3: Change the main title text
document.getElementById("changeTitleBtn").addEventListener("click", () => {
  document.querySelector("h1").textContent = "JavaScript is Fun!";
});
