// Function to add a new empty row
function addNewRow() {
    let table = document.getElementById("name-table").getElementsByTagName("tbody")[0];
    
    // Create a new row
    let newRow = table.insertRow();

    // Name cell with input
    let nameCell = newRow.insertCell(0);
    nameCell.innerHTML = `<input type="text" placeholder="Enter name" class="new-row-input">`;

    // Gender cell with select
    let genderCell = newRow.insertCell(1);
    genderCell.innerHTML = `
        <select class="new-row-select">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
        </select>
    `;

    // Age cell with input
    let ageCell = newRow.insertCell(2);
    ageCell.innerHTML = `<input type="number" min="1" placeholder="Enter Age" class="new-row-input">`;

    // ID cell with input
    let idCell = newRow.insertCell(3);
    idCell.innerHTML = `<input type="number" placeholder="Enter ID" class="new-row-input">`;
    
    // Delete and Cancel buttons cell
    let actionCell = newRow.insertCell(4);
    actionCell.innerHTML = `
        <span class="material-symbols-outlined delete-btn">delete</span>
        <span class="material-symbols-outlined cancel-btn">cancel</span>
    `;
    actionCell.querySelector('.delete-btn').addEventListener('click', deleteRow);
    
    // Hide cancel button initially
    const cancelBtn = actionCell.querySelector('.cancel-btn');
    cancelBtn.style.display = 'none';
    
    // Show cancel button when any input in the row is being edited
    const inputs = newRow.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            cancelBtn.style.display = 'inline-block';
        });
    });
    
    // Add cancel functionality
    cancelBtn.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = ''; // Clear all inputs
        });
        const select = newRow.querySelector('select');
        if (select) {
            select.selectedIndex = 0; // Reset select to default option
        }
    });
}

// Function to delete a row
function deleteRow(event) {
    const row = event.target.closest('tr');
    if (row) {
        row.remove();
    }
}

function filterByGender() {
    const select = document.getElementById("gender");
    const selectedGender = select.value.toLowerCase();
    const table = document.getElementById("name-table");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let row of rows) {
        const genderSelect = row.cells[1].querySelector('select');
        if (genderSelect) {
            const gender = genderSelect.value.toLowerCase();
            if (selectedGender === 'all' || gender === selectedGender) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    }
}

function searchByName() {
    var input, filter, table, tr, nameInput, i, txtValue;
    input = document.getElementById("name-search");
    filter = input.value.toUpperCase();
    table = document.getElementById("name-table");
    tr = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        nameInput = tr[i].querySelector('td:first-child input');
        if (nameInput) {
            txtValue = nameInput.value.toUpperCase();
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchById() {
    var input, filter, table, tr, idInput, i, txtValue;
    input = document.getElementById("id-search");
    filter = input.value;
    table = document.getElementById("name-table");
    tr = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        idInput = tr[i].cells[3].querySelector('input');
        if (idInput) {
            txtValue = idInput.value;
            if (filter === "" || txtValue.includes(filter)) { 
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Add touch dragging functionality to the add button
const addIcon = document.getElementById("add-icon");
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }
    
    if (e.target === addIcon) {
        isDragging = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, addIcon);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Function to add a new empty row
function addNewRow() {
    let table = document.getElementById("name-table").getElementsByTagName("tbody")[0];
    
    // Create a new row
    let newRow = table.insertRow();

    // Name cell with input
    let nameCell = newRow.insertCell(0);
    nameCell.innerHTML = `<input type="text" placeholder="Enter name" class="new-row-input">`;

    // Gender cell with select
    let genderCell = newRow.insertCell(1);
    genderCell.innerHTML = `
        <select class="new-row-select">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
        </select>
    `;

    // Age cell with input
    let ageCell = newRow.insertCell(2);
    ageCell.innerHTML = `<input type="number" min="1" placeholder="Enter Age" class="new-row-input">`;

    // ID cell with input
    let idCell = newRow.insertCell(3);
    idCell.innerHTML = `<input type="number" placeholder="Enter ID" class="new-row-input">`;

    // Delete and Cancel buttons cell
    let actionCell = newRow.insertCell(4);
    actionCell.innerHTML = `
        <span class="material-symbols-outlined delete-btn">delete</span>
        <span class="material-symbols-outlined cancel-btn">cancel</span>
    `;
    actionCell.querySelector('.delete-btn').addEventListener('click', deleteRow);
    
    // Hide cancel button initially
    const cancelBtn = actionCell.querySelector('.cancel-btn');
    cancelBtn.style.display = 'none';
    
    // Show cancel button when any input in the row is being edited
    const inputs = newRow.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            cancelBtn.style.display = 'inline-block';
        });
    });
    
    // Add cancel functionality
    cancelBtn.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = ''; // Clear all inputs
        });
        const select = newRow.querySelector('select');
        if (select) {
            select.selectedIndex = 0; // Reset select to default option
        }
    });
}

// Function to delete a row
function deleteRow(event) {
    const row = event.target.closest('tr');
    if (row) {
        row.remove();
    }
}

// Add event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Add 5 empty rows when the page loads
    for (let i = 0; i < 5; i++) {
        addNewRow();
    }

    // Add touch events to the add icon
    addIcon.addEventListener("touchstart", dragStart, false);
    addIcon.addEventListener("touchend", dragEnd, false);
    addIcon.addEventListener("touchmove", drag, false);

    // Add mouse events to the add icon
    addIcon.addEventListener("mousedown", dragStart, false);
    addIcon.addEventListener("mouseup", dragEnd, false);
    addIcon.addEventListener("mousemove", drag, false);

    // Add click event for adding new rows
    addIcon.addEventListener("click", addNewRow);

    // Add click event for the download button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // TODO: Implement download functionality
            console.log('Download button clicked');
        });
    }
});

// Add the event listeners for both touch and mouse
addIcon.addEventListener("touchstart", dragStart, false);
addIcon.addEventListener("touchend", dragEnd, false);
addIcon.addEventListener("touchmove", drag, false);

addIcon.addEventListener("mousedown", dragStart, false);
addIcon.addEventListener("mouseup", dragEnd, false);
addIcon.addEventListener("mousemove", drag, false);

// Function to validate ID (exactly 5 digits)
function validateID(idInput) {
    const value = idInput.value;
    const isValid = /^\d{5}$/.test(value);
    
    if (!isValid && value !== '') {
        idInput.classList.add('error');
        return false;
    } else {
        idInput.classList.remove('error');
        return true;
    }
}

// Function to delete a row
function deleteRow(event) {
    const row = event.target.closest('tr');
    if (row) {
        row.remove();
    }
}

function addNewRow() {
    let table = document.getElementById("name-table").getElementsByTagName("tbody")[0];

    // Create a new row
    let newRow = table.insertRow();

    // Set the row content with input fields
    newRow.innerHTML = `
        <td>
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <input type="text" placeholder="Enter name" class="new-row-input" style="flex: 1;">
            </div>
        </td>
        <td>
            <select class="new-row-select">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </td>
        <td><input type="number" min="1" max="100" placeholder="Age" class="new-row-input"></td>
        <td>
            <div style="display: flex; align-items: center; gap: 5px;">
                <input type="text" maxlength="5" placeholder="5-digit ID" class="new-row-input" pattern="\\d{5}" style="flex: 1;">
                <span class="delete-btn" style="padding: 0 5px;">×</span>
            </div>
        </td>
    `;

    // Add event listeners
    const deleteBtn = newRow.querySelector('.delete-btn');
    const idInput = newRow.querySelector('input[placeholder="5-digit ID"]');
    
    deleteBtn.addEventListener('click', deleteRow);
    
    // Add real-time ID validation
    idInput.addEventListener('input', function() {
        validateID(this);
    });
    
    // Auto-save functionality when user moves away from inputs
    const inputs = newRow.querySelectorAll('.new-row-input, .new-row-select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            setTimeout(() => saveRowIfComplete(newRow), 100);
        });
    });
    
    // Focus on the name input
    newRow.querySelector('.new-row-input').focus();
}

// Function to automatically save row when all fields are filled
function saveRowIfComplete(row) {
    const inputs = row.querySelectorAll('.new-row-input, .new-row-select');
    const values = [];
    let allFilled = true;
    let isValid = true;
    
    inputs.forEach((input, index) => {
        const value = input.value.trim();
        if (value === '') {
            allFilled = false;
        }
        if (index === 3 && value !== '') { // ID field
            if (!/^\d{5}$/.test(value)) {
                isValid = false;
            }
        }
        values.push(value);
    });
    
    if (allFilled && isValid) {
        // Replace inputs with text content
        row.innerHTML = `
            <th>${values[0]}</th>
            <td>${values[1]}</td>
            <td>${values[2]}</td>
            <td>${values[3]} <span class="delete-btn">×</span></td>
        `;
        
        // Add delete functionality to the new row
        row.querySelector('.delete-btn').addEventListener('click', deleteRow);
    }
}

// Function to download table as Excel
function downloadExcel() {
    const table = document.getElementById("name-table");
    const workbook = XLSX.utils.book_new();
    
    // Get visible rows only (not filtered out)
    const visibleRows = [];
    const headerRow = ['Name', 'Gender', 'Age', 'ID'];
    visibleRows.push(headerRow);
    
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        if (row.style.display !== 'none') {
            const rowData = [];
            const cells = row.querySelectorAll('th, td');
            
            // Process each cell, removing delete buttons
            for (let i = 0; i < cells.length; i++) {
                let cellContent = cells[i].textContent || cells[i].innerText;
                // Remove the × symbol from ID field
                if (i === 3) {
                    cellContent = cellContent.replace(/\s*×\s*$/, '').trim();
                }
                rowData.push(cellContent.trim());
            }
            
            if (rowData.length > 0 && rowData[0] !== '') {
                visibleRows.push(rowData);
            }
        }
    });
    
    const worksheet = XLSX.utils.aoa_to_sheet(visibleRows);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    
    // Generate filename with current date
    const now = new Date();
    const filename = `students_${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}.xlsx`;
    
    XLSX.writeFile(workbook, filename);
}

// Add click event listeners
document.getElementById("add-icon").addEventListener("click", addNewRow);
document.getElementById("download-btn").addEventListener("click", downloadExcel);

// Add click events to existing delete buttons
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', deleteRow);
});
