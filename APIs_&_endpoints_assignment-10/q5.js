const timetableUrl = "http://localhost:3005/timetable";
const daySelect = document.getElementById("day");
const schedule = document.getElementById("schedule");

function loadTimetable() {
    const day = daySelect.value;

    // The selected weekday is sent as a query parameter to JSON Server.
    fetch(timetableUrl + "?day=" + encodeURIComponent(day))
        .then(function (response) {
            if (!response.ok) throw new Error("Request failed");
            return response.json();
        })
        .then(function (classes) {
            if (classes.length === 0) {
                schedule.textContent = "No classes today.";
                return;
            }

            let table = document.createElement("table");
            let header = document.createElement("tr");
            ["Subject Name", "Faculty", "Time"].forEach(function (heading) {
                let th = document.createElement("th");
                th.textContent = heading;
                header.appendChild(th);
            });
            table.appendChild(header);

            classes.forEach(function (item) {
                let row = document.createElement("tr");
                [item.subject, item.faculty, item.time].forEach(function (value) {
                    let cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });

            schedule.innerHTML = "";
            schedule.appendChild(table);
        })
        .catch(function () {
            schedule.textContent = "Could not load timetable. Check JSON Server on port 3005.";
        });
}

daySelect.addEventListener("change", loadTimetable);
loadTimetable();
