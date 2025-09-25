document.getElementById("gender").onchange = function() {
    if (this.selectedIndex!==0) {
        window.location.href = this.value;
    }        
};

function searchByName() {
  var input, filter, table, tr, th, i, txtValue;
  input = document.getElementById("name-search");
  filter = input.value.toUpperCase();
  table = document.getElementById("name-table");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    th = tr[i].getElementsByTagName("th")[0];
    if (th) {
      txtValue = th.textContent || th.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchById() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("id-search");
  filter = input.value;
  table = document.getElementById("name-table");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    if (td.length > 0) {
      txtValue = td[td.length - 1].textContent || td[td.length - 1].innerText;
      if (filter === "" || txtValue.includes(filter)) { 
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function addNewRow() {
    let table = document.getElementById("name-table").getElementsByTagName("tbody")[0];

    // Create a new row
    let newRow = table.insertRow();

    // Name cell
    let nameCell = newRow.insertCell(0);
    nameCell.innerHTML = `<input type="text" placeholder="Enter name" class="new-row-input">`;

    // Gender cell
    let genderCell = newRow.insertCell(1);
    genderCell.innerHTML = `
        <select class="new-row-select">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
        </select>
    `;

    // Age cell
    let ageCell = newRow.insertCell(2);
    ageCell.innerHTML = `<input type="number" min="1" placeholder="Enter Age" class="new-row-input">`;

    // ID cell
    let idCell = newRow.insertCell(3);
    idCell.innerHTML = `<input type="number" placeholder="Enter ID" class="new-row-input">`;
}

// Add click event listeners to both the button and icon
document.getElementById("add-icon").addEventListener("click", addNewRow);
