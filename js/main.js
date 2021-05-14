const input = document.querySelector('#input');
const result = document.querySelector('#result');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const btnReadyAll = document.querySelector('#btnReadyAll');
const btn = document.querySelector('#btn');

input.addEventListener('keydown', function (enter) {
   if (enter.keyCode === 13 && input.value != '') {
      readyDeleteElements(input.value);
      input.value = '';
   } else {
      return;
   };
});

btn.addEventListener('click', () => {
   if (input.value === '') return;
   readyDeleteElements(input.value);
   input.value = '';
});


function readyDeleteElements(value) {
   const li = document.createElement('li');
   const btnDelete = document.createElement('button');
   const btnReady = document.createElement('button');
   const actionWrapper = document.createElement('div');
   actionWrapper.className = 'action-wrapper';

   li.className = 'li';
   li.textContent = value;

   btnDelete.className = 'btnDelete';
   btnDelete.textContent = 'delete';
   btnReady.className = 'btnReady';
   btnReady.textContent = 'UNREADY';

   actionWrapper.appendChild(btnDelete);
   actionWrapper.appendChild(btnReady);
   li.appendChild(actionWrapper);

   btnDelete.addEventListener('click', () => {
      result.removeChild(li);
   });

   btnReady.addEventListener('click', () => {
      li.classList.toggle('li-active');
      if (btnReady.textContent === 'READY') {
         btnReady.textContent = 'UNREADY';
      } else if (btnReady.textContent === 'UNREADY') {
         btnReady.textContent = 'READY';
      };
   });

   deleteAll();

   btnReadyAll.addEventListener('click', () => {
      if (btnReady.textContent === 'UNREADY') {
         li.classList.toggle('li-active');
         btnReady.textContent = 'READY';
      };
   });

   result.appendChild(li);
}

function deleteAll() {
   btnDeleteAll.addEventListener('click', () => {
      let remove = document.getElementsByClassName('li');
      while (remove[0]) {
         remove[0].parentNode.removeChild(remove[0]);
      };
   });
};