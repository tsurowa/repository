function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rowsElements = document.querySelectorAll('tbody tr');
   let searchElement = document.getElementById('searchField');
   function onClick() {
      for (let row of rowsElements) {
         row.classList.remove('select');
         if(searchElement.value !== '' && row.innerHTML.includes(searchElement.value)) {
            row.className = 'select';
         }
      }
      searchElement.value = '';
   }
}
