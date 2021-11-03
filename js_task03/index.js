let familia = prompt ('Введите вашу фамилию');

while (familia === '') {
    familia = prompt ('Введите вашу фамилию, пожалуйста');
};

let name = prompt ('Введите ваше имя');

while (name == '') {
    name = prompt ('Введите ваше имя, пожалуйста');
};

let otchestvo = prompt ('Введите ваше отчество');

while (otchestvo == '') {
    otchestvo = prompt ('Введите ваше отчество, пожалуйста');
};

let age = prompt ('Введите ваш возраст');

while (age == '') {
    age = prompt ('Введите ваш возраст, пожалуйста');
};

let gender = confirm ('Ваш пол - мужской?');
let pension;

if (gender == true) {
    gender = 'мужской';
}
else
    gender = 'женский';

if (gender == 'мужской' && age >= 63) {
    pension = 'да';
}
else
    pension = 'нет';

if (gender == 'женский' && age >= 58) {
    pension = 'да';
}
else
    pension = 'нет';

alert (`Ваше ФИО: ${familia} ${name} ${otchestvo}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age * 365}
Через 5 лет вам будет: ${age + 5}
Ваш пол: ${gender}
Вы на пенсии: ${pension}`);

