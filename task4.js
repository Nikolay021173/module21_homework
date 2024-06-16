function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let promise = new Promise(function(resolve, reject) {
	setTimeout(function()  {
        let number = getRandomInt(1, 100);
		if(number % 2 === 0) {
		resolve(`Завершено успешно. Сгенерированное число — ${number}`);
	} else {
		reject(`Завершено с ошибкой. Сгенерированное число — ${number}`);
	}
	}, 3000);
});

promise.then((result) => {
    console.log(result);
})
.catch((error) => {
  console.log(error);
});