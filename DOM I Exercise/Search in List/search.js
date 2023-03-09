function search() {
   let townsElements = Array.from(document.getElementsByTagName('li'));
   let searchElement = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   let count = 0;
   for(let currTown of townsElements) {
      if (currTown.textContent.includes(searchElement)) {
         count++;
         currTown.style.fontWeight = 'bold';
         currTown.style.textDecoration = 'underline';
      } else {
         currTown.style.fontWeight = 'normal';
         currTown.style.textDecoration = 'none';
      }
   }
   resultElement.textContent = `${count} matches found`;
}
