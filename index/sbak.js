const fruits = ["crosh","proxy","gamesite","Cookies","THE FACTORY MUST GROW", ];
const randomIndex = Math.floor(Math.random() * fruits.length);
const randomFruit = fruits[randomIndex];
console.log(randomFruit);
document.getElementById("pip").innerHTML = randomFruit