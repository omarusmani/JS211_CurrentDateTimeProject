// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNumberToString =() =>{
  // console.log(typeof x)
  x=document.getElementById("numtostring").value;
  console.log(x)
  document.getElementById('NumToString').innerHTML= String(x);  
}
// console.log(typeof convertNumberToString(123))

// Write a JavaScript program to convert a string to the number.
const convertStringToNumber =()=>{
  str=document.getElementById('stringtonum').value;
  d
}
// console.log(typeof convertStringToNumber("hello"))

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const findType =(z) =>{
  return(typeof z)
}
// console.log(findType("t"))
// console.log(findType(true))
// console.log(findType(undefined))
// console.log(findType(null))
// console.log(findType(54))
// console.log(findType(NaN))
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.
const addition=(num1,num2)=>{
    return (num1+num2);
}
console.log(addition(34,34))


// Write a JavaScript program that runs only when 2 things are true.
const iff=(bol1,bol2)=>{
  if(bol1&&bol2){
    return
  }
  else{

  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const or=(bol1,bol2)=>{
  if(bol1||bol2){
    return 
  }
  else{

  }
}


// Write a JavaScript program that runs when both things are not true.  
const notTrue=(bol1,bol2)=>{
  
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
