const scissors = ['', 'ножницы', 'камень', 'бумага'];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compare_results(result1, result2){
	return result1 === result2 ? 'Ничья' : ((result1 === 1 && result2 === 2) || (result1 === 2 && result2 === 3) || (result1 === 3 && result2 === 1)) ? 'Вы проиграли' : 'Вы выиграли';
}


let value = parseInt(prompt("Введите цифру:\nножницы(1)\nкамень(2)\nбумага(3)"));
let aivalue = getRandomIntInclusive(1,3);

value >= 1 && value <= 3 ? (alert('У тебя '+ scissors[value] +' а у меня ' + scissors[aivalue]),alert(compare_results(value, aivalue))) : false;




