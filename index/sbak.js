function idklol() {
    const fruits = ["Cookies","THE FACTORY MUST GROW","Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit. <br> Adipisci, ad illum consequatur consequuntur similique <br> quidem dignissimos possimus ipsa sequi nisi, <br> cupiditate voluptatibus id debitis,  <br> deserunt non nam provident quia porro!"
        ,"(defun botsbuildbots () (botsbuildbots))" , "I CENTER DIV EZ YIPPYYYYYYYYYYYYYYYYYYYYYYYY" , "Hey bro, got any  <I><u><b>UPSHOW</b></u></i>?", "", "Made with the Shapez 2 soundtrack!", "Welcome to the Information Superhighway!",
     ];
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const result = fruits[randomIndex];
    console.log(result);    
    document.getElementById("color").innerHTML = result   
}
