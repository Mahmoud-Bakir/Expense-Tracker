
  function addExpense() {
    const expense = $("#name");
    const amount = $("#amount");
    if (expense.val().trim() === "" || amount.val().trim==="") return;
    console.log(expense.val())
    console.log(amount.val())
    let newRow = "<tr><td>" + expense.val() + "</td><td>" + amount.val() + "</td></tr>";
     $("#table").append(newRow);
     expense.val("")
     amount.val("")

  }

$(document).ready(function () {
    const addButton = $("#add");
    addButton.click(addExpense);
  })