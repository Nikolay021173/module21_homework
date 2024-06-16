const id = document.querySelector("#id-user");
const but = document.querySelector(".get-list-of-tasks");
const ul = document.querySelector(".list-of-tasks");
const mess = document.querySelector(".mes-abou-absence-user");

but.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.value}/todos`)
    .then((response) => { return response.json(); })
    .then((data) => { 
        if(Number(id.value) === 3) {
            for (let dat of data) {
                let li = document.createElement('li');
                if(dat.completed) {
                    li.classList.add('task-is-completed')
                }
                li.textContent = dat.title;
                ul.appendChild(li);
            }
        } else {
            mess.textContent = 'Пользователь с указанным id не найден';  
        } 
    })
    .catch(() => { console.log('error') });	
});