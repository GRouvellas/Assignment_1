//for comments see the courses.js file.

let selectedRow = null

function onFormSubmit() {
    if (validatecTitle()&&validatesFirstName()&&validatesLastName()&&validateaTitle()) {
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
    formData["sfname"] = document.getElementById("sfname").value;
    formData["slname"] = document.getElementById("slname").value;
    formData["atitle"] = document.getElementById("atitle").value;    
    return formData;
}

function insertNewRecord(data) {
    const table = document.querySelector('#assignmentsPerStudentPerCourseList');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ctitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sfname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.slname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.atitle;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("ctitle").value = "";
    document.getElementById("sfname").value = "";
    document.getElementById("slname").value = "";
    document.getElementById("atitle").value = "";    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ctitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sfname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("slname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("atitle").value = selectedRow.cells[3].innerHTML;    
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ctitle;
    selectedRow.cells[1].innerHTML = formData.sfname;
    selectedRow.cells[2].innerHTML = formData.slname;
    selectedRow.cells[3].innerHTML = formData.atitle;    
}

function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("assignmentsPerStudentPerCourseList").deleteRow(row.rowIndex);
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

function validatesFirstName() {
    let isValid = true;
    if (document.getElementById("sfname").value.length > 30) {
        isValid = false;
        document.getElementById("sfnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("sfnameValidationError").classList.contains("hide"))
            document.getElementById("sfnameValidationError").classList.add("hide");
    }
    return isValid;
}

function validatesLastName() {
    let isValid = true;
    if (document.getElementById("slname").value.length > 30) {
        isValid = false;
        document.getElementById("slnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("slnameValidationError").classList.contains("hide"))
            document.getElementById("slnameValidationError").classList.add("hide");
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
