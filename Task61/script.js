let a = prompt ('Введите вашу фамилию');
let b = prompt ('Введите ваше имя');
let c = prompt ('Введите ваше отчество');
let d = prompt ('Введите ваш возраст');
var e = confirm ('Вы мужчина?');
if (e == true)
    var e = 'муж';
else
    var e = 'жен';

var f = confirm ('Вы на пенсии?');
if (f == true) 
    var f = 'да!';
else
    var f = 'нет!';

alert('Ваше ФИО:' + ' ' + a + ' ' + b + ' ' + c 
    + '\n' + 'Ваш возраст в годах: ' + d 
    + '\n' + 'Ваш возраст в днях: ' + d * 365 
    + '\n' + 'Через 5 лет вам будет: ' + d + 5
    + '\n' + 'Ваш пол: ' + e
    + '\n' + 'Вы на пенсии: ' + f);