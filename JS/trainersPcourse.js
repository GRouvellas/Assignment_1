//for comments see the courses.js file.

let selectedRow = null

function onFormSubmit() {
    if (validatecTitle()&&validatetFirstName()&&validatetLastName()) {
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
    formData["tfname"] = document.getElementById("tfname").value;
    formData["tlname"] = document.getElementById("tlname").value;    
    return formData;
}

function insertNewRecord(data) {
    const table = document.querySelector('#trainerPerCourseList');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ctitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tfname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.tlname;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("ctitle").value = "";
    document.getElementById("tfname").value = "";
    document.getElementById("tlname").value = "";    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ctitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tfname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tlname").value = selectedRow.cells[2].innerHTML;    
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ctitle;
    selectedRow.cells[1].innerHTML = formData.tfname;
    selectedRow.cells[2].innerHTML = formData.tlname;    
}

function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("trainerPerCourseList").deleteRow(row.rowIndex);
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

function validatetFirstName() {
    let isValid = true;
    if (document.getElementById("tfname").value.length > 30) {
        isValid = false;
        document.getElementById("tfnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tfnameValidationError").classList.contains("hide"))
            document.getElementById("tfnameValidationError").classList.add("hide");
    }
    return isValid;
}

function validatetLastName() {
    let isValid = true;
    if (document.getElementById("tlname").value.length > 30) {
        isValid = false;
        document.getElementById("tlnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tlnameValidationError").classList.contains("hide"))
            document.getElementById("tlnameValidationError").classList.add("hide");
    }
    return isValid;
}
