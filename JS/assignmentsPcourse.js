//for comments see the courses.js file.

let selectedRow = null

function onFormSubmit() {
    if (validatecTitle()&&validateaTitle()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["ctitle"] = document.getElementById("ctitle").value;
    formData["atitle"] = document.getElementById("atitle").value; 
    return formData;
}

function insertNewRecord(data) {
    const table = document.querySelector('#assignmentPerCourseList');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ctitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.atitle;    
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("ctitle").value = "";
    document.getElementById("atitle").value = ""; 
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ctitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("atitle").value = selectedRow.cells[1].innerHTML;  
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ctitle;
    selectedRow.cells[1].innerHTML = formData.atitle;
}

function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("assignmentPerCourseList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validatecTitle() {
    let isValid = true;
    if ((document.getElementById("ctitle").value.length > 10)||(!document.getElementById("ctitle").value.toUpperCase().startsWith("CB"))) {
        isValid = false;
        document.getElementById("ctitleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("ctitleValidationError").classList.contains("hide"))
            document.getElementById("ctitleValidationError").classList.add("hide");
    }
    return isValid;
}

function validateaTitle() {
    let isValid = true;
    if (document.getElementById("atitle").value.length > 30) {
        isValid = false;
        document.getElementById("atitleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("atitleValidationError").classList.contains("hide"))
            document.getElementById("atitleValidationError").classList.add("hide");
    }
    return isValid;
}
