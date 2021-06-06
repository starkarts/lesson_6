

function guessNumber() {
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  let randomNumber = Math.ceil(Math.random() * 100);

   
  function checkNumber() {
    let userNumber = +prompt('Угадай число от 1 до 100');

    if (userNumber == 0) {
      alert('Игра окончена');
      return;
    } else if (userNumber > randomNumber) {
      alert('Загаданное число меньше');
      checkNumber();  
    } else if (userNumber < randomNumber) {
      alert('Загаданное число больше');
      checkNumber();  
    } else if (userNumber == randomNumber){
      alert('Поздравляю, Вы угадали!!!');
      return;
    } else if (userNumber !== isNumber) {
      alert('Введите число');
      checkNumber();
    } 
  }
  
  checkNumber();
}

guessNumber();

