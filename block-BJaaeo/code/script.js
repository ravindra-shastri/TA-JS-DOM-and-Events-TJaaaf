let container = document.querySelector('.box-container');
let display = document.querySelector('.big-box');
let numBtn = document.querySelectorAll('.new-box-container');

numBtn.forEach(btn => btn.addEventListener('click',function(event){
    if(event.target.innerText === '='){
        display.innerText = eval(display.innerText);
    
    }else if(event.target.innerText === "C"){
        display.innerText = "";
    }else {
        display.append(event.target.innerText);
    }

}));
