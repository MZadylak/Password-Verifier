/*const passPassword = document.querySelector('#password');
const p = document.querySelector('.no-password');

const letters = /[a-z]/i;
const numbers = /[0-9]/;
const specials = /[!@#$%^&*)(]/;
const minValue = 10;



const validatePass = () => {
    if(passPassword.value.length > minValue && passPassword.value.match(letters) && passPassword.value.match(numbers) && passPassword.value.match(specials)) {
        p.innerHTML = 'Masz bardzo dobre hasło';
        p.style.color = 'lime';
    } else if (passPassword.value.length > minValue && passPassword.value.match(letters) && passPassword.value.match(numbers)) {
        p.innerHTML = 'Masz dobre hasło';
        p.style.color = 'yellow';
    }
      else {
        p.innerHTML = 'Masz słabe hasło';
        p.style.color = 'red';
    }
};


passPassword.addEventListener('keyup', function() {
    if(p.value !== ''){
        validatePass();
    } else {
        p.innerHTML = 'Nie podałeś hasła...';
    }
}
);

*/

const placeholder = document.querySelector('#password');
const p = document.querySelector('.no-password');

const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minLength = 10;

placeholder.addEventListener('keyup', function(){
    if(placeholder.value != ''){
        validatePass();
    } else {
        p.innerHTML = 'Nie podałeś hasła...';
    }

});

const validatePass = () => {
    if (placeholder.value.length > minLength && placeholder.value.match(letters) && placeholder.value.match(numbers) && placeholder.value.match(special)) {
        p.innerHTML = 'Masz bardzo dobre hasło';
        p.style.color = 'lime';
    } else if (placeholder.value.length > minLength && placeholder.value.match(letters) && placeholder.value.match(numbers)) {
        p.innerHTML = 'Masz dobre hasło';
        p.style.color = 'yellow';
    } else {
        p.innerHTML = 'Masz za słabe hasło';
        p.style.color = 'red';
    }
}













































