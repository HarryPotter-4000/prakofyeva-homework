const firstInt = parseInt(prompt("Введите первое число"), 10);
if (!Number.isNaN(firstInt) && Number.isInteger(firstInt)) {
  const secondInt = parseInt(prompt("Введите второе число"), 10);
  if (!Number.isNaN(secondInt) && Number.isInteger(secondInt)) {
    console.log(`Ответ: ${firstInt + secondInt}, ${firstInt / secondInt}`);
  } else {
    console.log("Некорректный ввод");
  }
} else {
  console.log("Некорректный ввод");
}
