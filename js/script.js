"use strict"

// ----- 1 задание -----
function func(num1){
    if (num1 < 10){
        console.log('константа меньше 10');
    } else {
        console.log('константа не меньше 10');
    }
}
const num = 5;
func(num);
// ----- 2 задание -----
function func(){
    alert('Привет, мир!')
}
func();
// ----- 3 задание -----
function javascr(){
    console.log('JavaScript')
}
javascr();
// ----- 4 задание -----
let text = 'lorem';
function checking(check1){
    if (check1 === 'lorem'){
        console.log('У вас ошибка в тексте')
    } else {
        console.log(`Содержимое переменной ${text}`)
    }
}
checking(text);
