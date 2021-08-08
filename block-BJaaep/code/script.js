let boxC = document.querySelector('.boxes');
let list = document.querySelectorAll('.box');
function randomNumber(){
    let num = Math.floor(Math.random() * 12);
    return num
}

function getBoxes(){
    boxC.innerHTML = '';
    for (let i = 1;i <= 12;i++){
        let div = document.querySelector('.wrapper')
        list.innerText = randomNumber();
        div.append(boxC)
        boxC.append(list);
    }
}
box.addEventListener('click',getBoxes);
getBoxes()



