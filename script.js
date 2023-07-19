let total = $("#total");
  function addExpense() {
    const expense = $("#name");
    const amount = $("#amount");
    if (expense.val().trim() === "" || amount.val().trim==="") return;
    console.log(expense.val())
    console.log(amount.val())
    let newRow = "<tr><td>" + expense.val() + "</td><td>" + amount.val() + "</td></tr>";
     $("#table").append(newRow);
     console.log(total)
     total.text(parseInt(total.text()) + parseInt(amount.val()))
     expense.text("")
     amount.val("")
     
  }

$(document).ready(function () {
    const addButton = $("#add");
    addButton.click(addExpense);
  })