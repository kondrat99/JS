
const readline = require('readline-sync');

let x;


  x = readline.question('Enter number ');
  console.log(`You entered ${x}`);

switch(x){
    case 1:
            console.log("Понедельник")
        break;
    case 2:
            console.log("Вторник")
        break;
    case 3:
            console.log("Среда")
        break;
    case 4:
            console.log("Четверг")
        break;
    case 5:
            console.log("Пятница")
        break;
    case 6:
            console.log("Суббота")
        break;
    case 7:
            console.log("Воскресенье")
        break;
    default:
            console.log("Такого дня нет");
        break;
}
