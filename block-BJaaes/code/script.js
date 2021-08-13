let form = document.querySelector('form');
let button = document.querySelector('button');

let errorMessage1 = "";
let errorMessage2 = "";
let errorMessage3 = "";
let errorMessage4 = "";
let errorMessage5 = "";


function handleSubmit(event){
    event.preventDefault();
    const userName = event.target.elements.username;
    const name = event.target.elements.name;
    const email = event.target.elements.email;
    const phone = event.target.elements.phone;
    const password = event.target.elements.password;
    const passwordC = event.target.elements['confirm-pass'];

    // 1.username can't be less than 4 characters

    if(userName.value.length < 4){
        errorMessage1 = "Can't be less than 4 characters!";
        userName.nextElementSibling.innerText = errorMessage1;
    }else if(userName.value.length >= 4){ 
        errorMessage = "";       
        userName.nextElementSibling.innerText = errorMessage1;
    }

    // 2. Name can't be numbers

    if(!isNaN(name.value)){
        errorMessage2 = "You can't use number in the name field";
        name.nextElementSibling.innerText = errorMessage2;
    }else{
        errorMessage2 = "";        
        name.nextElementSibling.innerText = errorMessage2;
    }

    // 3. Email must contain the symbol `@`
    // 4. Email must be at least 6 characters

    if(!email.value.includes("@")){
        errorMessage3 = "Not a valid email";
        email.nextElementSibling.innerText = errorMessage3;
    }else if(email.value.length < 6){
        errorMessage3 = "Email must be at least 6 characters";
        email.nextElementSibling.innerText = errorMessage3; 
    }else if(email.value.length >=6){
        errorMessage3 = "";        
        email.nextElementSibling.innerText = errorMessage3;
    }

    // 5. Phone numbers can only be a number
    // 6. Length of phone number can't be less than 7 characters

    if(isNaN(phone.value)){ 
        errorMessage4 = "Phone number can only contain numbers";
        phone.nextElementSibling.innerText = errorMessage4;
    }else if(phone.value.length < 7){
        errorMessage4 = "phone number can't be less than 7 characters";
        phone.nextElementSibling.innerText = errorMessage4;
    }else if(phone.value.length >= 7){
        errorMessage4 = "";        
        phone.nextElementSibling.innerText = errorMessage4;
    }

    // 7. Password and confirm password must be same.

    if(password.value !== passwordC.value){
        errorMessage5 = "Password and confirm password must be same";
        password.nextElementSibling.innerText = errorMessage5;
        passwordC.nextElementSibling.innerText = errorMessage5;
    }else if(password.value == passwordC.value){
        errorMessage5 = "";        
        password.nextElementSibling.innerText = errorMessage5;
        passwordC.nextElementSibling.innerText = errorMessage5;
    }    

    // Once the form is valid it should alert `User Added Successfully!`



    if (errorMessage1 == "" &&
        errorMessage2 == "" &&
        errorMessage3 == "" &&
        errorMessage4 == "" &&
        errorMessage1 == ""
        ){
            alert(`User Added Successfully`)
        
        }
}

form.addEventListener('submit',handleSubmit);

