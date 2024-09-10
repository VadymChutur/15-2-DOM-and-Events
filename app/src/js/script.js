const titleEl = document.querySelector('.js-title');

titleEl.textContent = 'Hello JS';
titleEl.classList.add('title');
titleEl.classList.remove('title');
titleEl.classList.toggle('title');
titleEl.hidden = false;
console.log(titleEl.textContent);
console.dir(titleEl);
console.dir(titleEl.getAttribute('data-id'));
titleEl.setAttribute('hidden', 'true');
titleEl.removeAttribute('hidden');

const listEl = document.querySelector('.js-list');
console.log([...listEl.children]);
console.dir(listEl);

const li = document.createElement('li');
li.textContent = listEl.children.length + 1;
li.classList.add('title');
li.dataset.id = 'li';
const div = document.createElement('div');
const h2 = document.createElement('h2');
h2.textContent = 'Hello';
li.append(div);
div.append(h2);
listEl.append(li);
console.log(li);
console.dir(li);

const liEl = `<li class="title" data-id="li">${listEl.children.length + 1} 
<div>
<h2>World</h2>
</div>
</li>`;
listEl.insertAdjacentHTML('beforeend', liEl);
console.log(liEl);
console.dir(liEl);

const listStatick = document.querySelectorAll('li');
listEl.append(li);
listEl.append(li);
console.dir(listStatick);
const listDynamics = document.getElementsByTagName('li');
listEl.insertAdjacentHTML('beforeend', liEl);
listEl.insertAdjacentHTML('beforeend', liEl);
console.dir(listDynamics);

const cars = [
  {
    id: 1,
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    id: 2,
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 3,
    model: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
  {
    id: 4,
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    id: 5,
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 6,
    model: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 9,
    model: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
];

const containerEl = document.querySelector('.js-container');
const marckup = cars
  .map(
    ({ id = 'none', model, type, price, img }) => `<li data-id="${id}">
        <img src="${img}" alt="${model}" class="img">
        <h2>Brand - ${model}</h2>
        <h3>Model - ${type}</h3>
        <p>Price - ${price} </p>
        </li >`
  )
  .join('');

containerEl.insertAdjacentHTML('beforeend', marckup);
// console.dir(marckup);
const containerAfter = document.querySelector('.js-container');
// console.dir(containerAfter);
[...containerAfter.children].forEach((item) => {
  if (item.dataset.id === '2') {
    console.log(item.dataset.id);
    item.remove();
  }
});
// containerAfter.innerHTML = '';
