let selectedRow = null

//runs the validation functions for certain fields of the form and if they return true 
// it creates a formData object that takes the value of the readFormData function. If
// no row is selected, it runs the insertNewRecord function. If a row is selected, it runs
// the updateRecord function. In the end it runs the resetForm function.
function onFormSubmit() {
    if (validateTitle()&&validateStream()&&validateType()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

//creates an empty object named formData and sets its properties to be the same
// as the values of the form. The function returns the updated object formData.
function readFormData() {
    let formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["stream"] = document.getElementById("stream").value;
    formData["type"] = document.getElementById("type").value;
    formData["startDate"] = document.getElementById("startDate").value;
    formData["endDate"] = document.getElementById("endDate").value;
    return formData;
}

//creates a new row in the table with id tag "courseList" then it inserts the values
// of the parameter object of the function as values of the cells of the row. In the
// last cell it creates two anchor tags that lead to the onEdit and onDelete functions.
function insertNewRecord(data) {
    const table = document.querySelector('#courseList');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stream;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.type;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.startDate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.endDate;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

//sets the values of the form properties to empty strings
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("stream").value = "";
    document.getElementById("type").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    selectedRow = null;
}

//selects the row where the cell with the anchor tag that leads to the function
// is, then it changes the values of the properties of the form to those of the
// selected row.
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stream").value = selectedRow.cells[1].innerHTML;
    document.getElementById("type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("startDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("endDate").value = selectedRow.cells[4].innerHTML;
}

//changes the values of the cells of the selected row to the values of the properties
// of the parameter object
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.stream;
    selectedRow.cells[2].innerHTML = formData.type;
    selectedRow.cells[3].innerHTML = formData.startDate;
    selectedRow.cells[4].innerHTML = formData.endDate;
}

//after the user clicks yes, it selects the row where the cell with the anchor tag
// that leads to the function is, then it deletes the whole row from the table with 
// id tag "courseList". In the end it runs the resetForm function.
function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("courseList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//creates the boolean variable isValid and sets its value to true. When the conditions in the
// if statement occur, the variable's value becomes false which leads to the removal of the 
// "hide" attribute from the class of the label of the input element, thus displaying the label.
// If the condition is not met, the boolean's values becomes true which leads to adding the
// "hide" attribute if the label's class does not already have it.
function validateTitle() {
    let isValid = true;
    if ((document.getElementById("title").value.length > 10)||(!document.getElementById("title").value.toUpperCase().startsWith("CB"))) {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");
    }
    return isValid;
}

//similar to the previous comment.
function validateStream() {
    let isValid = true;
    if (document.getElementById("stream").value.length > 20) {
        isValid = false;
        document.getElementById("streamValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("streamValidationError").classList.contains("hide"))
            document.getElementById("streamValidationError").classList.add("hide");
    }
    return isValid;
}

//similar to the comment in the validateTitle() function.
function validateType() {
    let isValid = true;
    if (document.getElementById("type").value.length > 20) {
        isValid = false;
        document.getElementById("typeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("typeValidationError").classList.contains("hide"))
            document.getElementById("typeValidationError").classList.add("hide");
    }
    return isValid;
}
