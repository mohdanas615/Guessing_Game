let maximum=parseInt(prompt("Enter the maximum number:"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number:"));
}
const targetNum=Math.floor(Math.random()*maximum+1);
let guess=parseInt(prompt("Enter your guess:"));
let attempt=1;
while(parseInt(guess)!==targetNum){
    if(guess===`q`) break;
    attempt++;
    if(guess>targetNum)
    guess=prompt("Too high! Enter a new guess:")
    if(guess<targetNum)
    guess=prompt("Too low! Enter a new guess:");
}
if(guess===`q`)
alert("OK, YOU QUIT.");
else
    alert(`CONTRATS YOU WIN!, You got it!, you took ${attempt} guessing`);