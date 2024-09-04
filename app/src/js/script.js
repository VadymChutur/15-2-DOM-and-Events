const titleEl = document.querySelector('.js-title');

titleEl.textContent = 'Hello JS';
titleEl.classList.add('title');
titleEl.classList.remove('title');
titleEl.classList.toggle('title');
console.log(titleEl.textContent);
console.dir(titleEl);
