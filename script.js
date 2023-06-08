let randomnumber = Math.floor(Math.random()*10);
console.log(randomnumber);

const gameStart = ()=>{
    let userinput = parseInt(document.querySelector('.input').value);
    let result = document.querySelector('.result');

    if(userinput == randomnumber){
        result.innerHTML = `congrats ! you guessed the correct number , and the number is ${randomnumber}`;
        result.style.background = 'green';
    }
    else if(userinput > randomnumber){
        result.innerHTML = `the number is less than ${userinput}, and the number is ${randomnumber}`;
        result.style.background = 'red';
    }
    else {
        result.innerHTML = `the number is greater than ${userinput} , and the number is ${randomnumber}`;
        result.style.background = 'orange';
    }
}

const reset = ()=>{
    window.location.reload();
}