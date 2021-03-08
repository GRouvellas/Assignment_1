//for comments see the courses.js file.

let selectedRow = null

function onFormSubmit() {
    if (validateFirstName()&&validateLastName()&&validateTuitionFees()) {
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
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["tuitionFees"] = document.getElementById("tuitionFees").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.querySelector('#studentList');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dateOfBirth;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tuitionFees;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("tuitionFees").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tuitionFees").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.dateOfBirth;
    selectedRow.cells[3].innerHTML = formData.tuitionFees;
}

function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validateFirstName() {
    let isValid = true;
    if (document.getElementById("fname").value.length > 30) {
        isValid = false;
        document.getElementById("fnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
    }
    return isValid;
}

function validateLastName() {
    let isValid = true;
    if (document.getElementById("lname").value.length > 30) {
        isValid = false;
        document.getElementById("lnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lnameValidationError").classList.contains("hide"))
            document.getElementById("lnameValidationError").classList.add("hide");
    }
    return isValid;
}

function validateTuitionFees() {
    let isValid = true;
    if (document.getElementById("tuitionFees").value < 0) {
        isValid = false;
        document.getElementById("tuitionFeesValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tuitionFeesValidationError").classList.contains("hide"))
            document.getElementById("tuitionFeesValidationError").classList.add("hide");
    }
    return isValid;
}
