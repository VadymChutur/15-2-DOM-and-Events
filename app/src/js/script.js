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
console.log(listEl.children[1]);
console.dir(listEl);
