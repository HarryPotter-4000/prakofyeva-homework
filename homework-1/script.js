const TEXT_MESSAGE = 'Введите число №';
const firstInt = parseInt(prompt(`${TEXT_MESSAGE}1`), 10);
const secondInt = parseInt(prompt(`${TEXT_MESSAGE}2`), 10);
if (
  !Number.isNaN(firstInt) &&
  Number.isInteger(firstInt) &&
  !Number.isNaN(secondInt) &&
  Number.isInteger(secondInt)
) {
  if (secondInt === 1) {
    console.log('Некорректный ввод');
  } else {
    console.log(firstInt.toString(secondInt));
  }
} else {
  console.log('Некорректный ввод');
}

const firstNumber = parseInt(prompt('Введите первое число'), 10);
if (!Number.isNaN(firstNumber) && Number.isInteger(firstNumber)) {
  const secondNumber = parseInt(prompt('Введите второе число'), 10);
  if (!Number.isNaN(secondNumber) && Number.isInteger(secondNumber)) {
    console.log(
      `Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`
    );
  } else {
    console.log('Некорректный ввод');
  }
} else {
  console.log('Некорректный ввод');
}
