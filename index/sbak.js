const fruits = ["crosh","proxy","gamesite","Cookies","THE FACTORY MUST GROW","Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit. <br> Adipisci, ad illum consequatur consequuntur similique <br> quidem dignissimos possimus ipsa sequi nisi, <br> cupiditate voluptatibus id debitis,  <br> deserunt non nam provident quia porro!" ];
const randomIndex = Math.floor(Math.random() * fruits.length);
const randomFruit = fruits[randomIndex];
console.log(randomFruit);    
document.getElementById("demo").innerHTML = randomFruit;