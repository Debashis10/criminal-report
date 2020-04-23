console.log("This is the crime report");
const name = document.getElementById('name');
const Address = document.getElementById('address');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, address, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

crimetype.addEventListener('blur', ()=>{
    console.log("crimetype is blurred");
    // Validate crimetype here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let str = crimetype.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('crime type is valid');
        crimetype.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('crime type is not valid');
        crimetype.classList.add('is-invalid');
        validUser = false;
        
    }
})

Address.addEventListener('blur', ()=>{
    console.log("address is blurred");
    // Validate email here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;

    let str = Address.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('address is valid');
        Address.classList.remove('is-invalid');
        validAddress = true;
    }
    else{
        console.log('address not valid');
        Address.classList.add('is-invalid');
        validAddress = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validAddress, validUser, validPhone);
    
    // Submit your form here
    if(validAddress && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, address and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
