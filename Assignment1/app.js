function addToTop() {
    let cell, firstRow, row;
    let table = document.getElementById("data");
    firstRow = table.rows[0];
    row = table.insertRow(1);
    row.className = "tr";
    cell = row.insertCell(-1);
    cell.innerHTML = "1";
    var firstname = row.insertCell(1);
    var lastname = row.insertCell(2);
    var city = row.insertCell(3);
    var country = row.insertCell(4);

    for (let i = 2; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
    firstname.innerHTML = document.getElementById("fname").value;
    lastname.innerHTML = document.getElementById("lname").value;
    city.innerHTML = document.getElementById("city").value;
    country.innerHTML = document.getElementById("country").value;
}

function addToBottom() {
    
    var table = document.getElementById("data");
    var rowcount = table.rows.length;
    var row = table.insertRow(-1);
    
    var cell1 = row.insertCell(0);
    var firstname = row.insertCell(1);
    var lastname = row.insertCell(2);
    var city = row.insertCell(3);
    var country = row.insertCell(4);
    console.log(rowcount);
    
    cell1.innerHTML = rowcount
    firstname.innerHTML = document.getElementById("fname").value;
    lastname.innerHTML = document.getElementById("lname").value;
    city.innerHTML = document.getElementById("city").value;
    country.innerHTML = document.getElementById("country").value;
    return false;
}