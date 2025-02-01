function idklol() {
    document.getElementById("color").innerHTML = getRandomSentence();   
}

function getRandomSentence() {
    const fruits = ["Cookies","THE FACTORY MUST GROW","Lorem ipsum dolor sit amet" ,"(defun botsbuildbots () (botsbuildbots))" , "I CENTER DIV EZ YIPPYYYYYYYYYY" , "Hey bro, got any  <I><u><b>UPSHOW</b></u></i>?", "", "Made with the Shapez 2 soundtrack!", "Welcome to the Information Superhighway!",
        "life is MS Paint, MS Paint is life.", ":GD_Normal:" ,"FIRE IN THE HOLE", "WATER ON THE HILL", "ROCK ON THE GROUND", "AREA CONFIRMED", "AIR DETECTED", "BLOOD IN THE BATH", "KIDS AT THE BASEMENT", "WE WORK, TO EARN THE RIGHT TO WORK", "Welcome to the Information Superhighway!" ,"The secret to happiness is --DATA_CORRUPTED--", "<🅱️r>",
        ,"You can't stop progress.", "We're all in it together.", "88888888888888888888888888" , ":sentry:" , "engineer gaming", "Sentry goin up!","Dispenser down!","it starts with","The engineer is engi-here!","moe", "BONK"
        ,"BOINK","CAUTION: Spinny thing go fast.", "Today is amazing midday!", "test", "BEEP-BOOP, I AM A ROBOT, I HAVE COME TO TAKE AMERICAN JOBS!", "xd is DOMINATING Average Linux user!", "xd is DOMINATING Average Windows user!", "1+1=4137843", "Number 19, mouse in baked beans.", "Theres a spy creeping around here!", "I am a", "xee xorb xi xam",
        "play tf2", "We work, to earn the right to work.", "Ubuntu gaming", "The cake is a lie","I'm going to k&nbsp;i&nbsp;l&nbsp;l you and all the cake is gone.","It's big brain time.","Oh yeah, it's big brain time.","Made with old computers, &quot;computers&quot;, and cables!", "Your mom","Your doin good lad!","NATURALLY AND ARTIFICIALLY FLAVORED", "KABLUEY",
        "`1234567890-=","qwertyuiop[]","sdfghjkl;'","zxcvbnm,./","Not aproved by the FDA!","1=1","No Brainrot Zone!","Oxygen Not Included!","Also Comes in <u><b>Grape!</b><u/>","Why's this dealer (do do) taken a pisss ive been standing here (dodo) for 30 minutes.","The Data Won't Corrupt Itself!","The Data Won't Collate Itself!","All That Code Won't Compile Itself!",
        "SSSPAAAAAAAAACCCCCCCCCEEEEEEEEEEEEE","glorp zorp","linux gaming","Stickman CPU inside","Stickman GPU inside","Made with 74.903 Novemdecillion Cookies!","Go finish your homework.","Go finish your homework.","Go finish your homework.","Go finish your homework.","Go finish your homework.","Go finish your homework.","Go finish your homework.","Go finish your homework.",
        ,"The cake is a lie.","I LOVE CSS","100% Free Range Code!*","*Code may not be free range lol","The Gizmo-gadget-thingamajig.","μ","⺺⑤■⩹ⶺ⍸⛱⮲Ⓘⳕ","ↀ℆℧⅋ℬKKℳⅪⅭⅯↇℂℿ℠⅞⅖⅘ⅾ⅑Ⅳ⅃Ⅲℶⅶ⅛℡ℙↁ℺⅟⅛⅊Ⅺ⅝⅝⅚℥⅊№ⅲ℔ℌℏℝ℘Ⅽ℡⅄ⅢⅮℝ⅗℺ℨⅤ⅂ℐℹⅽ℘ↀ⅙⅘Ⅸ⅍","🅱️","A 3 piece Bicken nugget?","A Large Boke?" ,"And 3 Bhocolate Bhip Bookies?", "weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","Ctrl+I to continue with Copilot",
        "YEEEEE HEEEEE, HIC-ADDEEEE HEEEEEEEE!!!!!!","Science is Fun","Concentration Enhancing Menu Initialiser...","Comedy = Tragedy + Time","I AM NOT A MORON!","Reconstructing More Science...","This The Part Where He Kills You."
     ];
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const result = fruits[randomIndex];
    return result;
}