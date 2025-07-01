//eventlistener for mouse work
//mouse event//==
// input.addEventListener("mousedown",(event)=>{  //left or right button diff count come
//     console.log(event.button)
// })
//--------------
input.addEventListener("mousedown",(event)=>{
let xcor =event.pageX;
let ycor =event.pageY;
let cors='X cor -${xcor}, Y cor -${ycor}'
console.log(cors);//helps to find 
});
