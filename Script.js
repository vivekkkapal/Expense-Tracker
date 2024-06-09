
const expenseList = document.getElementById(`expenseList`)
const expenseForm = document.getElementById(`expenseForm`)

expenseForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const description = document.getElementById(`description`).value;            
    const category = document.getElementById('category').value;
    const amount = document.getElementById(`amount`).value

    if (description && category && !isNaN(amount)){
        const addrow = document.createElement(`tr`)
        addrow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;
        expenseList.appendChild(addrow)
        
        document.getElementById(`description`).value = ""
        document.getElementById(`category`).value = ""
        document.getElementById(`amount`).value = ""

    }else{
        alert(`Please enter all the necessary details`)
    }


})