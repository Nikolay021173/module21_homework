window.addEventListener('load', function() {
    let date = new Date();
    let timeOfTheVisit = addZero(date.getDate())  + '.' + addZero((date.getMonth() + 1)) + 
    '.' + date.getFullYear() + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + 
    addZero(date.getSeconds());

    let userDataJson = localStorage.getItem('keyUser');

    if(userDataJson === null) {
        const userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя.'); 

        let objUser = {
            user: userName,
            timeOfTheVisit: timeOfTheVisit
        }
        let jsonObj = JSON.stringify(objUser);
        localStorage.setItem('keyUser', jsonObj); 

    } else {
        let userData = JSON.parse(userDataJson);
        alert(`Добрый день, ${userData.user}! Давно не виделись. 
              В последний раз вы были у нас ${userData.timeOfTheVisit}`);           
  
    let newObjUser = {
        user: userData.user,
        timeOfTheVisit: timeOfTheVisit
    }
    let newJsonObj = JSON.stringify(newObjUser);
    localStorage.setItem('keyUser', newJsonObj); 
    }
});

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
