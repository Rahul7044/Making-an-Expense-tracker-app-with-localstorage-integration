function saveToLocalStorage(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    
    
    const obj={
        amount,
        description,
        category
    }
    localStorage.setItem(obj.amount,JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
     childElem.textContent=obj.amount+'-'+obj.description+'-'+obj.category;
     const deleteButton = document.createElement('input');
     deleteButton.type = "button";
     deleteButton.value = "Delete"; 
     deleteButton.onclick=() =>{
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);
    
     }
    


     const editButton = document.createElement('input');
     editButton.type="button";
     editButton.value='Edit';
     editButton.onclick = () =>{
        //console.log('hello');
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);
        document.getElementById('amount').value=obj.amount;
        document.getElementById('description').value=obj.description;
        document.getElementById('category').value=obj.category;
    
     }
     
     
     childElem.appendChild(deleteButton);
     childElem.appendChild(editButton);
     parentElem.appendChild(childElem);
}
//  const lsEntries = Object.entries(localStorage);
window.addEventListener('DOMContentLoaded', (event) => {
    const lsEntries = obj.values(localStorage);
   
      //showUserOnScreen(lsEntries);
      for(var i =0; i<lsEntries.length; i++){
        showUserOnScreen(lsEntries.data[i]);
        console.log(lsEntries);
      }
     
});