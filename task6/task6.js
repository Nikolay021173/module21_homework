const numbPage = document.querySelector("#numb-page");
const lim = document.querySelector("#limit");
const but = document.querySelector(".submit");
const pictures = document.querySelector(".list-img");
const mess = document.querySelector(".message");


function createData(data) {
  for (let dat of data) {
    let div = document.createElement('div');
      let img = document.createElement('img');
      let p = document.createElement('p');
      p.textContent = dat.author;
      img.setAttribute('src', dat.download_url);
      img.setAttribute('alt', dat.author);
      img.setAttribute('width', '200');
      img.classList.add('photo');
      div.classList.add('container-img');
      div.append(img);
      div.append(p);
      pictures.appendChild(div);                      
  }
}

but.addEventListener('click', () => {
    fetch(`https://picsum.photos/v2/list?${numbPage.value}&${lim.value}`)
    .then((response) => { return response.json(); })
    .then((data) => { 
      if(numbPage.value < 1 || numbPage.value > 10) {
        mess.textContent = 'Номер страницы вне диапазона от 1 до 10';
      } else if (lim.value < 1 || lim.value > 10) {
        mess.textContent = 'Лимит вне диапазона от 1 до 10';
      } else if ((numbPage.value < 1 || numbPage.value > 10) && 
                (lim.value < 1 || lim.value > 10)) {
                    mess.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';   
                } else {
                  createData(data);
                    localStorage.setItem('lastData', JSON.stringify(data));
                }
    })
    .catch(() => { console.log('error') });	
});

window.addEventListener('load', () => {
  const dataItem = JSON.parse(localStorage.getItem('lastData'));
  createData(dataItem);
});