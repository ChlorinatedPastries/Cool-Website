function RandomNum() {      //im bored so i made this 
    const ran1 = Math.floor(Math.random() * 100 + 1);
    const ran2 = Math.floor(Math.random() * 100);
    const ran3 = Math.floor(Math.random() * 100);
    const ran4 = Math.floor(Math.random() * 100);
    const ran5 = Math.floor(Math.random() * 100);
    const ran6 = Math.floor(Math.random() * 100);
    const ran7 = Math.floor(Math.random() * 100);
    const ran8 = Math.floor(Math.random() * 100);
    const ran9 = Math.floor(Math.random() * 100);
    const ran10 = Math.floor(Math.random() * 100);
    const ran11 = Math.floor(Math.random() * 100);
    const ran12 = Math.floor(Math.random() * 100);
    const pi = Math.PI;
    const e = Math.E;
    const phi = 1.618033988749895;
    const ranless_1 = Math.random();
    const ranless_2 = Math.random();
    const ranless_3 = Math.random();
    const ranless_4 = Math.random();
    const ranless_5 = Math.random();
    const ranless_6 = Math.random();
    const ranless_7 = Math.random();
    const ranless_8 = Math.random();
    const ranless_9 = Math.random();
    const ranless_10 = Math.random();
    const ranless_11 = Math.random();
    const ranless_12 = Math.random();
    const add1 = ran1 + ranless_1
    const add2 = ran2 - ranless_2 
    const add3 = ran3 * ranless_3
    const add4 = ran4 / ranless_4
    const add5 = ran5 % ranless_5
    const add6 = ran6 ** ranless_6
    const add7 = ran7 ^ ranless_7
    const add8 = ran8 - ranless_8
    const add9 = ran9 * ranless_9
    const add10 = ran10 / ranless_10
    const add11 = ran11 % ranless_11
    const add12 = ran12 ** ranless_12
    console.log(add1, add2, add3, add4, add5, add6, add7, add8, add9, add10, add11, add12,)
    const math_con_num1 = add1 + pi + e + phi
    const math_con_num2 = add1 - pi - e - phi
    const math_con_num3 = add1 * pi * e * phi
    const math_con_num4 = add1 / pi / e / phi
    const math_con_num5 = add1 ^ pi / e ^ phi
    const math_con_num6 = add1 ** pi / e ** phi
    const math_con_num7 = add1 % pi % e % phi + 1
    const math_con_num8 = add1 + pi - e * phi
    const math_con_num9 = add1 + pi + e + phi
    const math_con_num10 = add1 + pi / e * phi
    const math_con_num11 = add1 >>> pi ^ e % phi
    const math_con_num12 = add1 % pi << e >>> phi //Infinity checking code. replaces inf. with pi + e / phi * add1. also all e+* checking
    //if (math_con_num1 = Infinity) {math_con_num1 = pi + e / phi * add1} //not working ERR:  Uncaught TypeError: Assignment to constant variable. at RandomNum (commen.js:54:23) at onload (Test.htm:12:67)
    //if (math_con_num2 = Infinity) {math_con_num2 = pi + e / phi * add1} 
    //if (math_con_num3 = Infinity) {math_con_num3 = pi + e / phi * add1} 
    //if (math_con_num4 = Infinity) {math_con_num4 = pi + e / phi * add1} 
    //if (math_con_num5 = Infinity) {math_con_num5 = pi + e / phi * add1} 
    //if (math_con_num6 = Infinity) {math_con_num6 = pi + e / phi * add1} 
    //if (math_con_num7 = Infinity) {math_con_num7 = pi + e / phi * add1} 
    //if (math_con_num8 = Infinity) {math_con_num8 = pi + e / phi * add1} 
    //if (math_con_num9 = Infinity) {math_con_num9 = pi + e / phi * add1} 
    //if (math_con_num10 = Infinity) {math_con_num10 = pi + e / phi * add1} 
    //if (math_con_num11 = Infinity) {math_con_num11 = pi + e / phi * add1} 
    //if (math_con_num12 = Infinity) {math_con_num12 = pi + e / phi * add1} 
    console.log(math_con_num1, math_con_num2, math_con_num3, math_con_num4, math_con_num5, math_con_num6, math_con_num7, math_con_num8, math_con_num9, math_con_num10, math_con_num11, math_con_num12)


     
    document.getElementById("random-number").innerHTML = numberrandom
}