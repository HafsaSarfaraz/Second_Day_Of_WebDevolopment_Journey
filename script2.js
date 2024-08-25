let btn= document.createElement("button");
btn.innerText="Click Me";
btn.style.backgroundColor="pink";
btn.style.color= "white";
let body= document.querySelector("body");
body.append(btn);

//Question#2: create a class in css and add that class in 1st paragraph without removin privious class in paragraph using JS
let paras= document.querySelector("p");
paras.classList.add("para2");    //use classList to add it