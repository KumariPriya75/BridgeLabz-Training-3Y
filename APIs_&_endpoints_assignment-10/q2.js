const employeeContainer = document.getElementById("employees");
const message = document.getElementById("message");
const apiUrl = "http://localhost:3002/employees";

// XMLHttpRequest fetches the employee records from this question's database.
function loadEmployees() {
    const request = new XMLHttpRequest();
    request.open("GET", apiUrl);
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            displayEmployees(JSON.parse(request.responseText));
        } else {
            employeeContainer.textContent = "Could not load employees.";
        }
    };
    request.onerror = function () {
        employeeContainer.textContent = "Network error. Check JSON Server on port 3002.";
    };
    request.send();
}

function displayEmployees(employees) {
    employeeContainer.innerHTML = "";
    employees.forEach(function (employee) {
        const row = document.createElement("div");
        row.className = "employee";

        const name = document.createElement("span");
        name.textContent = employee.name;

        const status = document.createElement("span");
        status.className = "status " + employee.status;
        status.textContent = employee.status.toUpperCase();

        const button = document.createElement("button");
        button.textContent = employee.status === "active" ? "Set Inactive" : "Set Active";
        button.addEventListener("click", function () {
            toggleStatus(employee, status, button);
        });

        row.append(name, status, button);
        employeeContainer.appendChild(row);
    });
}

function toggleStatus(employee, statusElement, button) {
    const oldStatus = employee.status;
    const newStatus = oldStatus === "active" ? "inactive" : "active";

    // Update the interface immediately, then send the PATCH request.
    employee.status = newStatus;
    updateStatusUI(statusElement, button, newStatus);

    const request = new XMLHttpRequest();
    request.open("PATCH", apiUrl + "/" + employee.id);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        if (request.status < 200 || request.status >= 300) {
            employee.status = oldStatus;
            updateStatusUI(statusElement, button, oldStatus);
            message.textContent = "Update failed. Employee status was restored.";
        } else {
            message.textContent = "Employee status updated successfully.";
        }
    };

    request.onerror = function () {
        employee.status = oldStatus;
        updateStatusUI(statusElement, button, oldStatus);
        message.textContent = "Network error. Employee status was restored.";
    };

    request.send(JSON.stringify({ status: newStatus }));
}

function updateStatusUI(statusElement, button, status) {
    statusElement.textContent = status.toUpperCase();
    statusElement.className = "status " + status;
    button.textContent = status === "active" ? "Set Inactive" : "Set Active";
}

loadEmployees();
