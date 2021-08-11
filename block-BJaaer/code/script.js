let form = document.querySelector('form');
let userData = document.querySelector('.user-data')

userInfo = {};
function handleSubmit(event) {
    event.preventDefault()
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.fiction = form.elements.range.value;
    userInfo["non-fiction"] = form.elements['non-fiction'].value;
    userInfo.adventure = form.elements.adventure.value;
    userInfo.terms = form.elements.terms.checked;
    console.log(userInfo);
    createUi(userInfo);
}

function createUi(userInfo){
    userData.classList.add('visible'); 
    let btn = document.createElement("button");
    btn.innerText = 'close';
    btn.setAttribute('class','btn');
    btn.addEventListener('click',function(){
        userData.classList.remove('visible');
    });
    let h1 = document.createElement('h1');
    h1.innerText = `Hello ${userInfo.name}`;
    let h2 = document.createElement('h2');
    h2.innerText = `Email: ${userInfo.email}`;
    let h3 = document.createElement('h3');
    h3.innerText = `You Love: ${userInfo.gender}`;
    let h4 = document.createElement('h4');
    h4.innerText = `Color: ${userInfo.color}`;
    let h5 = document.createElement('h5');
    h5.innerText = `Rating: ${userInfo.range}`;
    let h6 = document.createElement('h6');
    h6.innerText = `Book Genere:fiction ${userInfo.fiction}`;
    let fxn = document.createElement('p');
    fxn.innerText = userInfo['non-fiction'];
    let adv = document.createElement('p');
    adv.innerText = userInfo.adventure;
    let p = document.createElement('p');
    p.innerText = `👉You agree to Terms and Conditions: ${userInfo.terms}`;
    userData.append(btn,h1,h2,h3,h4,h5,h6,p);
}

form.addEventListener('submit', handleSubmit);







