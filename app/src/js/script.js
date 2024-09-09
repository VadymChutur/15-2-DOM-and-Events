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
