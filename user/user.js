import '../src/css/style.scss';
import back from '../static/images/back.svg';
import notfoto from '../static/images/not_foto.svg';

const currentUser = {
    login: 'ivanivanov',
    email: 'pochta@yandex.ru',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30'
}

document.querySelector('.user__back-panel-img').src = back;
document.querySelector('.user__not-foto').src = notfoto;

for(let field in currentUser){
    const input =document.querySelector(`.user__input-${field}`)
    input.value=currentUser[field];
    input.disabled=true
  /*document.querySelector(`.user__input-${field}`).value = currentUser[field];*/
}



