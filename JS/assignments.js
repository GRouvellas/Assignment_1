//for comments see the courses.js file.

let selectedRow = null

function onFormSubmit() {
    if (validateTitle()&&validateDescription()&&validateOralMark()&&validateTotalMark()) {
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
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    formData["subDateTime"] = document.getElementById("subDateTime").value;
    formData["oralMark"] = document.getElementById("oralMark").value;
    formData["totalMark"] = document.getElementById("totalMark").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.querySelector('#assignmentList');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.subDateTime;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.oralMark;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.totalMark;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("subDateTime").value = "";
    document.getElementById("oralMark").value = "";
    document.getElementById("totalMark").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subDateTime").value = selectedRow.cells[2].innerHTML;
    document.getElementById("oralMark").value = selectedRow.cells[3].innerHTML;
    document.getElementById("totalMark").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.subDateTime;
    selectedRow.cells[3].innerHTML = formData.oralMark;
    selectedRow.cells[4].innerHTML = formData.totalMark;
}

function onDelete(td) {
    if (confirm('Do you really want to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("assignmentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validateTitle() {
    let isValid = true;
    if (document.getElementById("title").value.length > 30) {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");
    }
    return isValid;
}

function validateDescription() {
    let isValid = true;
    if (document.getElementById("description").value.length > 45) {
        isValid = false;
        document.getElementById("descriptionValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("descriptionValidationError").classList.contains("hide"))
            document.getElementById("descriptionValidationError").classList.add("hide");
    }
    return isValid;
}

function validateOralMark() {
    let isValid = true;
    if (document.getElementById("oralMark").value < 0) {
        isValid = false;
        document.getElementById("oralMarkValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("oralMarkValidationError").classList.contains("hide"))
            document.getElementById("oralMarkValidationError").classList.add("hide");
    }
    return isValid;
}

function validateTotalMark() {
    let isValid = true;
    if (document.getElementById("totalMark").value < 0) {
        isValid = false;
        document.getElementById("totalMarkValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("totalMarkValidationError").classList.contains("hide"))
            document.getElementById("totalMarkValidationError").classList.add("hide");
    }
    return isValid;
}
